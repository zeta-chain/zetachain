import { getAddress, isNetworkName } from "@zetachain/addresses";
import { BigNumber } from "ethers";
import { network } from "hardhat";

import { isEthNetworkName } from "../lib/contracts.helpers";
import { ZetaConnectorEth__factory, ZetaConnectorNonEth__factory } from "../typechain-types";
import { calculateBestSalt } from "./deterministic-deploy.helpers";

const MAX_ITERATIONS = BigNumber.from(100000);
const DEPLOYER_ADDRESS = "0x25A92a5853702F199bb2d805Bba05d67025214A8";

export async function deterministicDeployGetSaltZetaConnector() {
  if (!isNetworkName(network.name)) {
    throw new Error(`network.name: ${network.name} isn't supported.`);
  }

  const zetaToken = getAddress("zetaToken");
  const tss = getAddress("tss");
  const tssUpdater = getAddress("tssUpdater");

  /// @todo: decide which address use as pauser
  const constructorTypes = ["address", "address", "address", "address"];
  const constructorArgs = [zetaToken, tss, tssUpdater, tssUpdater];

  let contractBytecode;

  if (isEthNetworkName(network.name)) {
    contractBytecode = ZetaConnectorEth__factory.bytecode;
  } else {
    contractBytecode = ZetaConnectorNonEth__factory.bytecode;
  }

  calculateBestSalt(MAX_ITERATIONS, DEPLOYER_ADDRESS, constructorTypes, constructorArgs, contractBytecode);
}

if (!process.env.EXECUTE_PROGRAMMATICALLY) {
  deterministicDeployGetSaltZetaConnector()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
