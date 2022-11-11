export { IAssetTrigger, IBuyOrder, ICancelMarketOrder, IClaim, IConfigITO, IConfigMarketplace, IConfigValidator, ICreateAsset, ICreateMarketplace, ICreateValidator, IDelegate, IFreeze, IProposal, ISellOrder, ISetAccountName, ISetITOPrices, ITransfer, IUndelegate, IUnfreeze, IUnjail, IUpdateAccountPermission, IVotes, IWithdraw } from '@klever/kleverweb/dist/types/contracts';
import { IContractRequest, ITxOptionsRequest, ITransaction, IBroadcastResponse, IProvider } from '@klever/kleverweb/dist/types/dtos';
export { IContract, IContractRequest, IProvider, ITransaction, ITxOptionsRequest } from '@klever/kleverweb/dist/types/dtos';
export { TransactionType, TriggerType } from '@klever/kleverweb/dist/types/enums';

interface IAccountInfo {
    address: string;
    nonce: number;
    rootHash: string;
    balance: number;
    allowance: number;
    timestamp: number;
}
interface IAccountResponse {
    data: {
        account: IAccountInfo;
    };
    error: string;
    code: string;
}

declare class Account {
    private privateKey;
    private address;
    private balance;
    private nonce;
    ready: Promise<void>;
    constructor(privateKey: string);
    private init;
    getBalance(): number;
    getNonce(): number;
    getAddress(): string;
    Sync(): Promise<void>;
    getInfo(): Promise<IAccountInfo>;
    buildTransaction: (contracts: IContractRequest[], txData?: string[] | undefined, options?: ITxOptionsRequest | undefined) => Promise<ITransaction>;
    signMessage: (message: string) => Promise<string>;
    signTransaction: (tx: ITransaction, autoSync?: boolean) => Promise<ITransaction>;
    quickSend: (contracts: IContractRequest[], txData?: string[] | undefined, options?: ITxOptionsRequest | undefined) => Promise<IBroadcastResponse>;
    downloadAsPem: (path?: string | undefined) => Promise<void>;
    broadcastTransactions: (txs: ITransaction[]) => Promise<IBroadcastResponse>;
}

declare const core: {
    getAddressFromPrivateKey: (privateKey: string) => Promise<string>;
    generateKeyPair: () => Promise<{
        privateKey: string;
        address: string;
    }>;
    getProviders: () => IProvider;
    setProviders: (providers: IProvider) => IProvider;
    broadcastTransactions: (txs: ITransaction[]) => Promise<IBroadcastResponse>;
};

declare const web: {
    isKleverWebLoaded: () => boolean;
    isKleverWebActive: () => boolean;
    broadcastTransactions: (transactions: ITransaction[]) => Promise<IBroadcastResponse>;
    signMessage: (message: string, privateKey: string) => Promise<string>;
    signTransaction: (tx: ITransaction) => Promise<ITransaction>;
    validateSignature: (message: string, signature: string, publicKey: string) => Promise<boolean>;
    buildTransaction: (contracts: IContractRequest[], txData?: string[] | undefined, options?: ITxOptionsRequest | undefined) => Promise<ITransaction>;
    initialize: () => Promise<void>;
    getWalletAddress: () => string;
    getProvider: () => IProvider;
    setProvider: (pvd: IProvider) => any;
};

export { Account, IAccountResponse, core, web };
