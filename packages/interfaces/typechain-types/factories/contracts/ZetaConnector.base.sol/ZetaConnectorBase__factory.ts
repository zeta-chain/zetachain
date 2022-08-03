/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ZetaConnectorBase,
  ZetaConnectorBaseInterface,
} from "../../../contracts/ZetaConnector.base.sol/ZetaConnectorBase";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "zetaToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tssAddress_",
        type: "address",
      },
      {
        internalType: "address",
        name: "tssAddressUpdater_",
        type: "address",
      },
      {
        internalType: "address",
        name: "pauserAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerIsNotPauser",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerIsNotTss",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerIsNotTssOrUpdater",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "CallerIsNotTssUpdater",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxSupply",
        type: "uint256",
      },
    ],
    name: "ExceedsMaxSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ZetaTransferError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updaterAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTssAddress",
        type: "address",
      },
    ],
    name: "PauserAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "zetaTxSenderAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTssAddress",
        type: "address",
      },
    ],
    name: "TSSAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "zetaTxSenderAddress",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "sourceChainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "zetaValueAndGas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "internalSendHash",
        type: "bytes32",
      },
    ],
    name: "ZetaReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "zetaTxSenderAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sourceChainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "destinationAddress",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "zetaValueAndGas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "internalSendHash",
        type: "bytes32",
      },
    ],
    name: "ZetaReverted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sourceTxOriginAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zetaTxSenderAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "destinationAddress",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "zetaValueAndGas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationGasLimit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "zetaParams",
        type: "bytes",
      },
    ],
    name: "ZetaSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "zetaTxSenderAddress",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "sourceChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destinationAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "zetaValueAndGas",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "internalSendHash",
        type: "bytes32",
      },
    ],
    name: "onReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "zetaTxSenderAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sourceChainId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "destinationAddress",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "zetaValueAndGas",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "internalSendHash",
        type: "bytes32",
      },
    ],
    name: "onRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauserAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceTssAddressUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "destinationAddress",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "destinationGasLimit",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "zetaValueAndGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "zetaParams",
            type: "bytes",
          },
        ],
        internalType: "struct ZetaInterfaces.SendInput",
        name: "input",
        type: "tuple",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tssAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tssAddressUpdater",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauserAddress_",
        type: "address",
      },
    ],
    name: "updatePauserAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tssAddress_",
        type: "address",
      },
    ],
    name: "updateTssAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "zetaToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620012af380380620012af83398181016040528101906200003791906200027c565b60008060006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480620000b95750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b80620000f15750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b80620001295750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b1562000161576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000341565b600081519050620002768162000327565b92915050565b6000806000806080858703121562000299576200029862000322565b5b6000620002a98782880162000265565b9450506020620002bc8782880162000265565b9350506040620002cf8782880162000265565b9250506060620002e28782880162000265565b91505092959194509250565b6000620002fb8262000302565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200033281620002ee565b81146200033e57600080fd5b50565b60805160601c610f4f6200036060003960006102160152610f4f6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636128480f1161008c5780639122c344116100665780639122c344146101a2578063942a5e16146101be578063ec026901146101da578063f7fb869b146101f6576100cf565b80636128480f14610172578063779e3b631461018e5780638456cb5914610198576100cf565b806321e093b1146100d457806329dd214d146100f2578063328a01d01461010e5780633f4ba83a1461012c5780635b112591146101365780635c975abb14610154575b600080fd5b6100dc610214565b6040516100e99190610d62565b60405180910390f35b61010c60048036038101906101079190610be6565b610238565b005b610116610242565b6040516101239190610d62565b60405180910390f35b610134610268565b005b61013e610304565b60405161014b9190610d62565b60405180910390f35b61015c61032a565b6040516101699190610da6565b60405180910390f35b61018c60048036038101906101879190610ad7565b610340565b005b6101966104b6565b005b6101a0610636565b005b6101bc60048036038101906101b79190610ad7565b6106d2565b005b6101d860048036038101906101d39190610b04565b6108a4565b005b6101f460048036038101906101ef9190610cb5565b6108af565b005b6101fe6108b2565b60405161020b9190610d62565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b5050505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102fa57336040517f4677a0d30000000000000000000000000000000000000000000000000000000081526004016102f19190610d62565b60405180910390fd5b6103026108d8565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900460ff16905090565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103d257336040517f4677a0d30000000000000000000000000000000000000000000000000000000081526004016103c99190610d62565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610439576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fd41d83655d484bdf299598751c371b2d92088667266fe3774b25a97bdd5d039733826040516104ab929190610d7d565b60405180910390a150565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461054857336040517fe700765e00000000000000000000000000000000000000000000000000000000815260040161053f9190610d62565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156105d1576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106c857336040517f4677a0d30000000000000000000000000000000000000000000000000000000081526004016106bf9190610d62565b60405180910390fd5b6106d0610979565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415801561077e5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b156107c057336040517fcdfcef970000000000000000000000000000000000000000000000000000000081526004016107b79190610d62565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610827576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fe79965b5c67dcfb2cf5fe152715e4a7256cee62a3d5dd8484fd8a8539eb8beff3382604051610899929190610d7d565b60405180910390a150565b505050505050505050565b50565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6108e061032a565b61091f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091690610dc1565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610962610a1b565b60405161096f9190610d62565b60405180910390a1565b61098161032a565b156109c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b890610de1565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610a04610a1b565b604051610a119190610d62565b60405180910390a1565b600033905090565b600081359050610a3281610ed4565b92915050565b600081359050610a4781610eeb565b92915050565b60008083601f840112610a6357610a62610e69565b5b8235905067ffffffffffffffff811115610a8057610a7f610e64565b5b602083019150836001820283011115610a9c57610a9b610e73565b5b9250929050565b600060c08284031215610ab957610ab8610e6e565b5b81905092915050565b600081359050610ad181610f02565b92915050565b600060208284031215610aed57610aec610e7d565b5b6000610afb84828501610a23565b91505092915050565b600080600080600080600080600060e08a8c031215610b2657610b25610e7d565b5b6000610b348c828d01610a23565b9950506020610b458c828d01610ac2565b98505060408a013567ffffffffffffffff811115610b6657610b65610e78565b5b610b728c828d01610a4d565b97509750506060610b858c828d01610ac2565b9550506080610b968c828d01610ac2565b94505060a08a013567ffffffffffffffff811115610bb757610bb6610e78565b5b610bc38c828d01610a4d565b935093505060c0610bd68c828d01610a38565b9150509295985092959850929598565b60008060008060008060008060c0898b031215610c0657610c05610e7d565b5b600089013567ffffffffffffffff811115610c2457610c23610e78565b5b610c308b828c01610a4d565b98509850506020610c438b828c01610ac2565b9650506040610c548b828c01610a23565b9550506060610c658b828c01610ac2565b945050608089013567ffffffffffffffff811115610c8657610c85610e78565b5b610c928b828c01610a4d565b935093505060a0610ca58b828c01610a38565b9150509295985092959890939650565b600060208284031215610ccb57610cca610e7d565b5b600082013567ffffffffffffffff811115610ce957610ce8610e78565b5b610cf584828501610aa3565b91505092915050565b610d0781610e12565b82525050565b610d1681610e24565b82525050565b6000610d29601483610e01565b9150610d3482610e82565b602082019050919050565b6000610d4c601083610e01565b9150610d5782610eab565b602082019050919050565b6000602082019050610d776000830184610cfe565b92915050565b6000604082019050610d926000830185610cfe565b610d9f6020830184610cfe565b9392505050565b6000602082019050610dbb6000830184610d0d565b92915050565b60006020820190508181036000830152610dda81610d1c565b9050919050565b60006020820190508181036000830152610dfa81610d3f565b9050919050565b600082825260208201905092915050565b6000610e1d82610e3a565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b610edd81610e12565b8114610ee857600080fd5b50565b610ef481610e30565b8114610eff57600080fd5b50565b610f0b81610e5a565b8114610f1657600080fd5b5056fea2646970667358221220de903853a44092e97d56ad3b39809eeb20167189f834139b7847d3eaa0565a7664736f6c63430008070033";

type ZetaConnectorBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaConnectorBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaConnectorBase__factory extends ContractFactory {
  constructor(...args: ZetaConnectorBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    zetaToken_: string,
    tssAddress_: string,
    tssAddressUpdater_: string,
    pauserAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZetaConnectorBase> {
    return super.deploy(
      zetaToken_,
      tssAddress_,
      tssAddressUpdater_,
      pauserAddress_,
      overrides || {}
    ) as Promise<ZetaConnectorBase>;
  }
  override getDeployTransaction(
    zetaToken_: string,
    tssAddress_: string,
    tssAddressUpdater_: string,
    pauserAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      zetaToken_,
      tssAddress_,
      tssAddressUpdater_,
      pauserAddress_,
      overrides || {}
    );
  }
  override attach(address: string): ZetaConnectorBase {
    return super.attach(address) as ZetaConnectorBase;
  }
  override connect(signer: Signer): ZetaConnectorBase__factory {
    return super.connect(signer) as ZetaConnectorBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaConnectorBaseInterface {
    return new utils.Interface(_abi) as ZetaConnectorBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaConnectorBase {
    return new Contract(address, _abi, signerOrProvider) as ZetaConnectorBase;
  }
}
