/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ZetaInteractorMock,
  ZetaInteractorMockInterface,
} from "../../../contracts/testing/ZetaInteractorMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "zetaConnectorAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidAddress",
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
    name: "InvalidCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDestinationChainId",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidZetaMessageCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidZetaRevertCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "connector",
    outputs: [
      {
        internalType: "contract ZetaConnector",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "interactorsByChainId",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
            name: "zetaValue",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
        ],
        internalType: "struct ZetaInterfaces.ZetaMessage",
        name: "zetaMessage",
        type: "tuple",
      },
    ],
    name: "onZetaMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
            name: "remainingZetaValue",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
        ],
        internalType: "struct ZetaInterfaces.ZetaRevert",
        name: "zetaRevert",
        type: "tuple",
      },
    ],
    name: "onZetaRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "contractAddress",
        type: "bytes",
      },
    ],
    name: "setInteractorByChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200131a3803806200131a833981810160405281019062000037919062000228565b80620000586200004c6200010760201b60201c565b6200010f60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000c0576040517fe6c4247b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b46608081815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250505050620002ad565b600033905090565b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556200014a816200014d60201b620007191760201c565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620002228162000293565b92915050565b6000602082840312156200024157620002406200028e565b5b6000620002518482850162000211565b91505092915050565b600062000267826200026e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6200029e816200025a565b8114620002aa57600080fd5b50565b60805160a05160601c61103d620002dd6000396000818161058301526107df01526000610369015261103d6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806379ba50971161006657806379ba50971461013157806383f3084f1461013b5780638da5cb5b14610159578063e30c397814610177578063f2fde38b146101955761009e565b80632618143f146100a35780633749c51a146100d35780633ff0693c146100ef5780634fd3f7d71461010b578063715018a614610127575b600080fd5b6100bd60048036038101906100b89190610ac8565b6101b1565b6040516100ca9190610ce1565b60405180910390f35b6100ed60048036038101906100e89190610a36565b610251565b005b61010960048036038101906101049190610a7f565b6102e7565b005b61012560048036038101906101209190610af5565b6103c8565b005b61012f61046c565b005b6101396104f4565b005b610143610581565b6040516101509190610d03565b60405180910390f35b6101616105a5565b60405161016e9190610cc6565b60405180910390f35b61017f6105ce565b60405161018c9190610cc6565b60405180910390f35b6101af60048036038101906101aa9190610a09565b6105f8565b005b600260205280600052604060002060009150905080546101d090610ec2565b80601f01602080910402602001604051908101604052809291908181526020018280546101fc90610ec2565b80156102495780601f1061021e57610100808354040283529160200191610249565b820191906000526020600020905b81548152906001019060200180831161022c57829003601f168201915b505050505081565b8061025a6107dd565b600260008260200135815260200190815260200160002060405161027e9190610caf565b60405180910390208180600001906102969190610d5e565b6040516102a4929190610c96565b6040518091039020146102e3576040517fb473eb0a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806102f06107dd565b3073ffffffffffffffffffffffffffffffffffffffff1681600001602081019061031a9190610a09565b73ffffffffffffffffffffffffffffffffffffffff1614610367576040517fc03e9c3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000008160200135146103c4576040517fc03e9c3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6103d061086f565b73ffffffffffffffffffffffffffffffffffffffff166103ee6105a5565b73ffffffffffffffffffffffffffffffffffffffff1614610444576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043b90610d3e565b60405180910390fd5b81816002600086815260200190815260200160002091906104669291906108a8565b50505050565b61047461086f565b73ffffffffffffffffffffffffffffffffffffffff166104926105a5565b73ffffffffffffffffffffffffffffffffffffffff16146104e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104df90610d3e565b60405180910390fd5b6104f26000610877565b565b60006104fe61086f565b90508073ffffffffffffffffffffffffffffffffffffffff1661051f6105ce565b73ffffffffffffffffffffffffffffffffffffffff1614610575576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056c90610d1e565b60405180910390fd5b61057e81610877565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61060061086f565b73ffffffffffffffffffffffffffffffffffffffff1661061e6105a5565b73ffffffffffffffffffffffffffffffffffffffff1614610674576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066b90610d3e565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff166106d46105a5565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461086d57336040517fcbd9d2e00000000000000000000000000000000000000000000000000000000081526004016108649190610cc6565b60405180910390fd5b565b600033905090565b600160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556108a581610719565b50565b8280546108b490610ec2565b90600052602060002090601f0160209004810192826108d6576000855561091d565b82601f106108ef57803560ff191683800117855561091d565b8280016001018555821561091d579182015b8281111561091c578235825591602001919060010190610901565b5b50905061092a919061092e565b5090565b5b8082111561094757600081600090555060010161092f565b5090565b60008135905061095a81610fd9565b92915050565b60008083601f84011261097657610975610f28565b5b8235905067ffffffffffffffff81111561099357610992610f23565b5b6020830191508360018202830111156109af576109ae610f3c565b5b9250929050565b600060a082840312156109cc576109cb610f32565b5b81905092915050565b600060c082840312156109eb576109ea610f32565b5b81905092915050565b600081359050610a0381610ff0565b92915050565b600060208284031215610a1f57610a1e610f4b565b5b6000610a2d8482850161094b565b91505092915050565b600060208284031215610a4c57610a4b610f4b565b5b600082013567ffffffffffffffff811115610a6a57610a69610f46565b5b610a76848285016109b6565b91505092915050565b600060208284031215610a9557610a94610f4b565b5b600082013567ffffffffffffffff811115610ab357610ab2610f46565b5b610abf848285016109d5565b91505092915050565b600060208284031215610ade57610add610f4b565b5b6000610aec848285016109f4565b91505092915050565b600080600060408486031215610b0e57610b0d610f4b565b5b6000610b1c868287016109f4565b935050602084013567ffffffffffffffff811115610b3d57610b3c610f46565b5b610b4986828701610960565b92509250509250925092565b610b5e81610e0e565b82525050565b6000610b708385610df2565b9350610b7d838584610e80565b82840190509392505050565b6000610b9482610dd6565b610b9e8185610de1565b9350610bae818560208601610e8f565b610bb781610f50565b840191505092915050565b60008154610bcf81610ec2565b610bd98186610df2565b94506001821660008114610bf45760018114610c0557610c38565b60ff19831686528186019350610c38565b610c0e85610dc1565b60005b83811015610c3057815481890152600182019150602081019050610c11565b838801955050505b50505092915050565b610c4a81610e4a565b82525050565b6000610c5d602983610dfd565b9150610c6882610f61565b604082019050919050565b6000610c80602083610dfd565b9150610c8b82610fb0565b602082019050919050565b6000610ca3828486610b64565b91508190509392505050565b6000610cbb8284610bc2565b915081905092915050565b6000602082019050610cdb6000830184610b55565b92915050565b60006020820190508181036000830152610cfb8184610b89565b905092915050565b6000602082019050610d186000830184610c41565b92915050565b60006020820190508181036000830152610d3781610c50565b9050919050565b60006020820190508181036000830152610d5781610c73565b9050919050565b60008083356001602003843603038112610d7b57610d7a610f37565b5b80840192508235915067ffffffffffffffff821115610d9d57610d9c610f2d565b5b602083019250600182023603831315610db957610db8610f41565b5b509250929050565b60008190508160005260206000209050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000610e1982610e20565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610e5582610e5c565b9050919050565b6000610e6782610e6e565b9050919050565b6000610e7982610e20565b9050919050565b82818337600083830152505050565b60005b83811015610ead578082015181840152602081019050610e92565b83811115610ebc576000848401525b50505050565b60006002820490506001821680610eda57607f821691505b60208210811415610eee57610eed610ef4565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060008201527f6e6577206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610fe281610e0e565b8114610fed57600080fd5b50565b610ff981610e40565b811461100457600080fd5b5056fea264697066735822122031dbc47d254d071d88a7ccc0c6e8c79ccd7fd28f9597f2524870fb4bf2785f8364736f6c63430008070033";

type ZetaInteractorMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZetaInteractorMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZetaInteractorMock__factory extends ContractFactory {
  constructor(...args: ZetaInteractorMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    zetaConnectorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ZetaInteractorMock> {
    return super.deploy(
      zetaConnectorAddress,
      overrides || {}
    ) as Promise<ZetaInteractorMock>;
  }
  override getDeployTransaction(
    zetaConnectorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(zetaConnectorAddress, overrides || {});
  }
  override attach(address: string): ZetaInteractorMock {
    return super.attach(address) as ZetaInteractorMock;
  }
  override connect(signer: Signer): ZetaInteractorMock__factory {
    return super.connect(signer) as ZetaInteractorMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZetaInteractorMockInterface {
    return new utils.Interface(_abi) as ZetaInteractorMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZetaInteractorMock {
    return new Contract(address, _abi, signerOrProvider) as ZetaInteractorMock;
  }
}
