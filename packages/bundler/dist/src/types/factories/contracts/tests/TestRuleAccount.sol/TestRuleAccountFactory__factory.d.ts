import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { TestRuleAccountFactory, TestRuleAccountFactoryInterface } from "../../../../contracts/tests/TestRuleAccount.sol/TestRuleAccountFactory";
type TestRuleAccountFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestRuleAccountFactory__factory extends ContractFactory {
    constructor(...args: TestRuleAccountFactoryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TestRuleAccountFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TestRuleAccountFactory;
    connect(signer: Signer): TestRuleAccountFactory__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610a53806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b6a46b3b14610030575b600080fd5b61004361003e36600461012f565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b6000806000801b6040516100729061010c565b8190604051809103906000f5905080158015610092573d6000803e3d6000fd5b50604051630cd330fb60e41b81529091506001600160a01b0382169063cd330fb0906100c29086906004016101e0565b6020604051808303816000875af11580156100e1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101059190610235565b5092915050565b6107cf8061024f83390190565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561014157600080fd5b813567ffffffffffffffff8082111561015957600080fd5b818401915084601f83011261016d57600080fd5b81358181111561017f5761017f610119565b604051601f8201601f19908116603f011681019083821181831017156101a7576101a7610119565b816040528281528760208487010111156101c057600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b8181101561020d578581018301518582016040015282016101f1565b8181111561021f576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561024757600080fd5b505191905056fe608060405234801561001057600080fd5b506107af806100206000396000f3fe6080604052600436106100555760003560e01c8063107679041461005a5780633a871cdd1461006f578063a9a23409146100a2578063a9e966b7146100c3578063cd330fb0146100e3578063f465c77e14610103575b600080fd5b61006d61006836600461044b565b610131565b005b34801561007b57600080fd5b5061008f61008a36600461047b565b61018f565b6040519081526020015b60405180910390f35b3480156100ae57600080fd5b5061006d6100bd3660046104cf565b50505050565b3480156100cf57600080fd5b5061006d6100de36600461055e565b610239565b3480156100ef57600080fd5b5061008f6100fe36600461058d565b61027a565b34801561010f57600080fd5b5061012361011e36600461047b565b6103c9565b604051610099929190610696565b604051621cb65b60e51b8152600160048201526001600160a01b03821690630396cb609034906024016000604051808303818588803b15801561017357600080fd5b505af1158015610187573d6000803e3d6000fd5b505050505050565b600081156101e357604051600090339084908381818185875af1925050503d80600081146101d9576040519150601f19603f3d011682016040523d82523d6000602084013e6101de565b606091505b505050505b61022e6101f46101408601866106b8565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061027a92505050565b506000949350505050565b60005460408051918252602082018390527fe56f542cbdb0e18291d73ec9fd0b443112d0b4f547479e1303ffbc1007cc4f0f910160405180910390a1600055565b6040805160208082019092526000908190528251918301919091207fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470036102c357506000919050565b6040805180820190915260028152616f6b60f01b6020918201528251908301207f14502d3ab34ae28d404da8f6ec0501c6f295f66caa41e122cfa9b1291bc0f9e80361031157506000919050565b60408051808201909152600481526319985a5b60e21b6020918201528251908301207f3b2564d7e0fe091d49b4c20f4632191e4ed6986bf993849879abfef9465def25036103925760405162461bcd60e51b81526020600482015260096024820152686661696c2072756c6560b81b60448201526064015b60405180910390fd5b816040516020016103a39190610706565b60408051601f198184030181529082905262461bcd60e51b82526103899160040161073c565b60606000806103dc6101208701876106b8565b6103ea91601490829061074f565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061042d925083915061027a9050565b50506040805160208101909152600080825290969095509350505050565b60006020828403121561045d57600080fd5b81356001600160a01b038116811461047457600080fd5b9392505050565b60008060006060848603121561049057600080fd5b833567ffffffffffffffff8111156104a757600080fd5b840161016081870312156104ba57600080fd5b95602085013595506040909401359392505050565b600080600080606085870312156104e557600080fd5b8435600381106104f457600080fd5b9350602085013567ffffffffffffffff8082111561051157600080fd5b818701915087601f83011261052557600080fd5b81358181111561053457600080fd5b88602082850101111561054657600080fd5b95986020929092019750949560400135945092505050565b60006020828403121561057057600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561059f57600080fd5b813567ffffffffffffffff808211156105b757600080fd5b818401915084601f8301126105cb57600080fd5b8135818111156105dd576105dd610577565b604051601f8201601f19908116603f0116810190838211818310171561060557610605610577565b8160405282815287602084870101111561061e57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60005b83811015610659578181015183820152602001610641565b838111156100bd5750506000910152565b6000815180845261068281602086016020860161063e565b601f01601f19169290920160200192915050565b6040815260006106a9604083018561066a565b90508260208301529392505050565b6000808335601e198436030181126106cf57600080fd5b83018035915067ffffffffffffffff8211156106ea57600080fd5b6020019150368190038213156106ff57600080fd5b9250929050565b6d03ab735b737bbb710393ab6329d160951b81526000825161072f81600e85016020870161063e565b91909101600e0192915050565b602081526000610474602083018461066a565b6000808585111561075f57600080fd5b8386111561076c57600080fd5b505082019391909203915056fea26469706673582212201f1a57ebef8e579e259c979572806d03fd926b4959ab18775e5337c4aacede0d64736f6c634300080f0033a2646970667358221220e956a0f0dc3eb56f8829534875994393d15aec00c9acde534212462fc0bdd49164736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "rule";
            readonly type: "string";
        }];
        readonly name: "create";
        readonly outputs: readonly [{
            readonly internalType: "contract TestRuleAccount";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TestRuleAccountFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestRuleAccountFactory;
}
export {};
