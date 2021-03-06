import { getAddress, isNetworkName } from "@zetachain/addresses";
import { ethers, network } from "hardhat";

import { getZetaFactoryEth, getZetaFactoryNonEth, isEthNetworkName } from "../lib/contracts.helpers";
import { ZetaEth__factory as ZetaEthFactory, ZetaNonEth__factory as ZetaNonEthFactory } from "../typechain-types";

const approvalAmount = ethers.utils.parseEther("10000000.0");

export async function setTokenApproval() {
  if (!isNetworkName(network.name)) {
    throw new Error(`network.name: ${network.name} isn't supported.`);
  }

  let contract;
  if (isEthNetworkName(network.name)) {
    contract = await getZetaFactoryEth({ deployParams: null, existingContractAddress: getAddress("zetaToken") });
  } else {
    contract = await getZetaFactoryNonEth({ deployParams: null, existingContractAddress: getAddress("zetaToken") });
  }

  let tx = await contract.approve(getAddress("connector"), approvalAmount);
  tx.wait();

  console.log(`Approved Connector Contract ${getAddress("connector")} for ${approvalAmount} `);
}

setTokenApproval()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
