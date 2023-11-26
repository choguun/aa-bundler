/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestRulesAccountFactory,
  TestRulesAccountFactoryInterface,
} from "../../../../contracts/tests/TestRulesAccount.sol/TestRulesAccountFactory";

const _abi = [
  {
    inputs: [],
    name: "coin",
    outputs: [
      {
        internalType: "contract TestCoin",
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
        internalType: "string",
        name: "rule",
        type: "string",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "contract TestRulesAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040526040516100109061004b565b604051809103906000f08015801561002c573d6000803e3d6000fd5b506001600160a01b031660805234801561004557600080fd5b50610058565b610419806114c483390190565b60805161144c610078600039600081816040015260d7015261144c6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806311df99951461003b578063b6a46b3b1461007e575b600080fd5b6100627f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b61006261008c3660046101ea565b6000806000801b60405161009f906101c7565b8190604051809103906000f59050801580156100bf573d6000803e3d6000fd5b506040516382e46b7560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152919250908216906382e46b75906024016020604051808303816000875af115801561012c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610150919061029b565b50604051630cd330fb60e41b81526001600160a01b0382169063cd330fb09061017d9086906004016102b4565b6020604051808303816000875af115801561019c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c0919061029b565b5092915050565b61110d8061030a83390190565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156101fc57600080fd5b813567ffffffffffffffff8082111561021457600080fd5b818401915084601f83011261022857600080fd5b81358181111561023a5761023a6101d4565b604051601f8201601f19908116603f01168101908382118183101715610262576102626101d4565b8160405282815287602084870101111561027b57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000602082840312156102ad57600080fd5b5051919050565b600060208083528351808285015260005b818110156102e1578581018301518582016040015282016102c5565b818111156102f3576000604083870101525b50601f01601f191692909201604001939250505056fe608060405234801561001057600080fd5b506110ed806100206000396000f3fe6080604052600436106100865760003560e01c8063a9a2340911610059578063a9a234091461014b578063a9e966b71461016c578063cd330fb01461018c578063e3480cb3146101ac578063f465c77e146101c157600080fd5b8063107679041461008b57806311df9995146100a05780633a871cdd146100dd57806382e46b751461010b575b600080fd5b61009e610099366004610c57565b6101ef565b005b3480156100ac57600080fd5b506001546100c0906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100e957600080fd5b506100fd6100f8366004610c74565b61024d565b6040519081526020016100d4565b34801561011757600080fd5b506100fd610126366004610c57565b600180546001600160a01b0319166001600160a01b0392909216919091179055600090565b34801561015757600080fd5b5061009e610166366004610cc8565b50505050565b34801561017857600080fd5b5061009e610187366004610d57565b610335565b34801561019857600080fd5b506100fd6101a7366004610d86565b610376565b3480156101b857600080fd5b5061009e610b86565b3480156101cd57600080fd5b506101e16101dc366004610c74565b610bb1565b6040516100d4929190610e8f565b604051621cb65b60e51b8152600160048201526001600160a01b03821690630396cb609034906024016000604051808303818588803b15801561023157600080fd5b505af1158015610245573d6000803e3d6000fd5b505050505050565b600081156102a157604051600090339084908381818185875af1925050503d8060008114610297576040519150601f19603f3d011682016040523d82523d6000602084013e61029c565b606091505b505050505b6102af610140850185610eb1565b90506004036102dd5760006102c8610140860186610eb1565b6102d191610eff565b60e01c915061032e9050565b6103286102ee610140860186610eb1565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061037692505050565b50600090505b9392505050565b60005460408051918252602082018390527fe56f542cbdb0e18291d73ec9fd0b443112d0b4f547479e1303ffbc1007cc4f0f910160405180910390a1600055565b6040805160208082019092526000908190528251918301919091207fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470036103bf57506000919050565b604080518082019091526006815265373ab6b132b960d11b6020918201528251908301207ff648814c67221440671fd7c2de979db4020a9320fb7985ff79ca8e7dced277f803610410575043919050565b604080518082019091526008815267636f696e6261736560c01b6020918201528251908301207f76ec948a9207fdea26dcba91086bcdd181920ff52a539b0d1eb28e73b4cd92af03610463575041919050565b6040805180820190915260098152680c4d8dec6d6d0c2e6d60bb1b6020918201528251908301207fd60ee5d9b1a312631632d0ab8816ca64259093d8ab0b4d29f35db6a6151b0f8d036104b857505060004090565b60408051808201909152600781526631b932b0ba329960c91b6020918201528251908301207f8fac3d089893f1e87120aee7f9c091bedb61facca5e493da02330bcb46f0949c0361059a5760405160019061051290610c33565b8190604051809103906000f5905080158015610532573d6000803e3d6000fd5b506001600160a01b0316633fa4f2456040518163ffffffff1660e01b8152600401602060405180830381865afa158015610570573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105949190610f2f565b92915050565b60408051808201909152600c81526b3130b630b731b296b9b2b63360a11b6020918201528251908301207fe1eb40348c4d42c6f93b840cbedec69afb249b96fd8af4bcbeed87fcef3815d803610633576001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a08231906024015b602060405180830381865afa158015610570573d6000803e3d6000fd5b60408051808201909152601081526f616c6c6f77616e63652d73656c662d3160801b6020918201528251908301207fcc3befdbd4c845f2f5f48ac59e621de2a47c26950d22d6092b4c2ffafdfc7f9f036106be5760018054604051636eb1769f60e11b815230600482015260248101929092526001600160a01b03169063dd62ed3e90604401610616565b60408051808201909152601081526f30b63637bbb0b731b2969896b9b2b63360811b6020918201528251908301207f46b549298973374f07ae868394b73f37c1cf6f25e976e36f99f1abbe6a5284e6036107495760018054604051636eb1769f60e11b815260048101929092523060248301526001600160a01b03169063dd62ed3e90604401610616565b60408051808201909152600981526836b4b73a16b9b2b63360b91b6020918201528251908301207f39509d2173ec8a4262a15fa569ebaeed05ddef813417dbd2877e415703355b6e036107e1576001546040516335313c2160e11b81523060048201526001600160a01b0390911690636a627842906024015b6020604051808303816000875af1158015610570573d6000803e3d6000fd5b60408051808201909152600981526862616c616e63652d3160b81b6020918201528251908301207f48bf62c98ebd199a8c4fa7e17d20fdbda06a014deb397741460366ff7e1e07550361085f57600180546040516370a0823160e01b815260048101929092526001600160a01b0316906370a0823190602401610616565b6040805180820190915260068152656d696e742d3160d01b6020918201528251908301207ff794573481a09002e3e46f42daa5499159620e2a2cc3f5bdd26c0a2669544d93036108da57600180546040516335313c2160e11b815260048101929092526001600160a01b031690636a627842906024016107c2565b60408051808201909152600b81526a39ba393ab1ba16b9b2b63360a91b6020918201528251908301207e05e75ff00cb9bce888bba342b06e4b9d4695ba7caf0afdef7ef8cf6735bb7d036109a45760015460405160016222a30f60e01b031981523060048201526001600160a01b039091169063ffdd5cf1906024015b6060604051808303816000875af1158015610976573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099a9190610f48565b6040015192915050565b6040805180820190915260088152677374727563742d3160c01b6020918201528251908301207f416c09f102f2ef6799166d01fa870b6995b38e93784afdbdda0c68b94ab7eadd03610a24576001805460405160016222a30f60e01b0319815260048101929092526001600160a01b03169063ffdd5cf190602401610957565b60408051808201909152600c81526b1a5b9b995c8b5c995d995c9d60a21b6020918201528251908301207fc78ed5b2fc828eecd2c4fb3d39653e18c93b7d1815a5571aa088439dec36211a03610ac957600160009054906101000a90046001600160a01b03166001600160a01b03166325d9185c6040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610570573d6000803e3d6000fd5b604080518082019091526008815267656d69742d6d736760c01b6020918201528251908301207f9b68a4beda047bbcff1923196e9af52348c30a06718efbeffa6d1dcc2c0a40fe03610b46576040517f9290a3722c5472b1809a59826d75e07853b4fb2f836d93a3adee7b819ab8eac390600090a1506000919050565b81604051602001610b579190610fa4565b60408051601f198184030181529082905262461bcd60e51b8252610b7d91600401610fda565b60405180910390fd5b6040517fd854278016dc3ac42aef8d423d936f9f37eea6f9a640f8a189f44247f1282c2c90600090a1565b6060600080610bc4610120870187610eb1565b610bd2916014908290610fed565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350610c1592508391506103769050565b50506040805160208101909152600080825290969095509350505050565b60a08061101883390190565b6001600160a01b0381168114610c5457600080fd5b50565b600060208284031215610c6957600080fd5b813561032e81610c3f565b600080600060608486031215610c8957600080fd5b833567ffffffffffffffff811115610ca057600080fd5b84016101608187031215610cb357600080fd5b95602085013595506040909401359392505050565b60008060008060608587031215610cde57600080fd5b843560038110610ced57600080fd5b9350602085013567ffffffffffffffff80821115610d0a57600080fd5b818701915087601f830112610d1e57600080fd5b813581811115610d2d57600080fd5b886020828501011115610d3f57600080fd5b95986020929092019750949560400135945092505050565b600060208284031215610d6957600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610d9857600080fd5b813567ffffffffffffffff80821115610db057600080fd5b818401915084601f830112610dc457600080fd5b813581811115610dd657610dd6610d70565b604051601f8201601f19908116603f01168101908382118183101715610dfe57610dfe610d70565b81604052828152876020848701011115610e1757600080fd5b826020860160208301376000928101602001929092525095945050505050565b60005b83811015610e52578181015183820152602001610e3a565b838111156101665750506000910152565b60008151808452610e7b816020860160208601610e37565b601f01601f19169290920160200192915050565b604081526000610ea26040830185610e63565b90508260208301529392505050565b6000808335601e19843603018112610ec857600080fd5b83018035915067ffffffffffffffff821115610ee357600080fd5b602001915036819003821315610ef857600080fd5b9250929050565b6001600160e01b03198135818116916004851015610f275780818660040360031b1b83161692505b505092915050565b600060208284031215610f4157600080fd5b5051919050565b600060608284031215610f5a57600080fd5b6040516060810181811067ffffffffffffffff82111715610f7d57610f7d610d70565b80604052508251815260208301516020820152604083015160408201528091505092915050565b6d03ab735b737bbb710393ab6329d160951b815260008251610fcd81600e850160208701610e37565b91909101600e0192915050565b60208152600061032e6020830184610e63565b60008085851115610ffd57600080fd5b8386111561100a57600080fd5b505082019391909203915056fe60806040526001600055348015601457600080fd5b50607d806100236000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633fa4f24514602d575b600080fd5b603560005481565b60405190815260200160405180910390f3fea2646970667358221220b77ea53a9a9bcbe47f84617775b87efd2486d2c872ea6932cddce711744246eb64736f6c634300080f0033a2646970667358221220197c1b7d1ce5b2b1442795ef13b3c55a9e4f14bf024469990d2952c5826c675264736f6c634300080f0033a26469706673582212207385924e3f5f42b4920b91ef2c41cb1c46344d776da68fbcff576f8dea99652564736f6c634300080f0033608060405234801561001057600080fd5b506103f9806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80636a6278421161005b5780636a627842146100ee57806370a0823114610101578063dd62ed3e1461012a578063ffdd5cf11461016357600080fd5b806325d9185c146100825780633b6a02f61461009d57806362a16020146100a5575b600080fd5b61008a610198565b6040519081526020015b60405180910390f35b61008a6101d6565b6100d36100b33660046102f0565b600260208190526000918252604090912080546001820154919092015483565b60408051938452602084019290925290820152606001610094565b61008a6100fc3660046102f0565b610237565b61008a61010f3660046102f0565b6001600160a01b031660009081526020819052604090205490565b61008a610138366004610312565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101766101713660046102f0565b61026e565b6040805182518152602080840151908201529181015190820152606001610094565b60405162461bcd60e51b815260206004820152600c60248201526b1a5b9b995c8b5c995d995c9d60a21b604482015260009060640160405180910390fd5b60408051808201909152601781527f737472696e6720746f206265206475706c69636174656400000000000000000060208201526000905b8081604051602001610221929190610380565b604051602081830303815290604052905061020e565b6001600160a01b0381166000908152602081905260408120805460649190839061026290849061039d565b91829055509392505050565b61029260405180606001604052806000815260200160008152602001600081525090565b506001600160a01b0316600090815260026020818152604092839020835160608101855281548152600182015492810192909252909101549181019190915290565b80356001600160a01b03811681146102eb57600080fd5b919050565b60006020828403121561030257600080fd5b61030b826102d4565b9392505050565b6000806040838503121561032557600080fd5b61032e836102d4565b915061033c602084016102d4565b90509250929050565b6000815160005b81811015610366576020818501810151868301520161034c565b81811115610375576000828601525b509290920192915050565b600061039561038f8386610345565b84610345565b949350505050565b600082198211156103be57634e487b7160e01b600052601160045260246000fd5b50019056fea264697066735822122047df9bd90b9065b796d7faf0610b4183e98967beab888847f9047b3e5973112764736f6c634300080f0033";

type TestRulesAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestRulesAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestRulesAccountFactory__factory extends ContractFactory {
  constructor(...args: TestRulesAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestRulesAccountFactory> {
    return super.deploy(overrides || {}) as Promise<TestRulesAccountFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestRulesAccountFactory {
    return super.attach(address) as TestRulesAccountFactory;
  }
  override connect(signer: Signer): TestRulesAccountFactory__factory {
    return super.connect(signer) as TestRulesAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRulesAccountFactoryInterface {
    return new utils.Interface(_abi) as TestRulesAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestRulesAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestRulesAccountFactory;
  }
}
