export { IAssetTrigger, IBuyOrder, ICancelMarketOrder, IClaim, IConfigITO, IConfigMarketplace, IConfigValidator, ICreateAsset, ICreateMarketplace, ICreateValidator, IDelegate, IFreeze, IProposal, ISellOrder, ISetAccountName, ISetITOPrices, ITransfer, IUndelegate, IUnfreeze, IUnjail, IUpdateAccountPermission, IVotes, IWithdraw } from '@klever/kleverweb/dist/types/contracts';
import * as _klever_kleverweb_dist_types_dtos from '@klever/kleverweb/dist/types/dtos';
import { IContractRequest, ITxOptionsRequest, ITransaction, IBroadcastResponse, IProvider } from '@klever/kleverweb/dist/types/dtos';
export { IContract, IContractRequest, IProvider, ITransaction, ITxOptionsRequest } from '@klever/kleverweb/dist/types/dtos';
export { TransactionType, TriggerType } from '@klever/kleverweb/dist/types/enums';

declare class Account {
    constructor(address: string, nodeUrl?: string, apiUrl?: string, privateKey?: string);
    getAddress(): any;
    getAccount(): Promise<{
        Address: string;
        RootHash: string;
        Balance: number;
        Nonce: number;
        Allowance: number;
    } | 0>;
    getNonce(): Promise<{
        firstPendingNonce: number;
        nonce: number;
        txPending: number;
    }>;
    buildTransaction: (contracts: IContractRequest[], txData?: string[] | undefined, options?: ITxOptionsRequest | undefined) => Promise<ITransaction>;
    signTransaction: (tx: ITransaction) => Promise<ITransaction>;
    validateSignature: (message: string, signature: string, publicKey: string) => Promise<boolean>;
    signMessage: (message: string, privateKey: string) => Promise<string>;
    broadcastTransactions: (transactions: ITransaction[]) => Promise<_klever_kleverweb_dist_types_dtos.IBroadcastResponse>;
}

declare const core: {
    isKleverWebLoaded: () => boolean;
    broadcastTransactions: (transactions: ITransaction[]) => Promise<IBroadcastResponse>;
    setProvider: (provider: IProvider) => Promise<void>;
    signMessage: (message: string, privateKey: string) => Promise<string>;
    signTransaction: (tx: ITransaction) => Promise<ITransaction>;
    validateSignature: (message: string, signature: string, publicKey: string) => Promise<boolean>;
    buildTransaction: (contracts: IContractRequest[], txData?: string[] | undefined, options?: ITxOptionsRequest | undefined) => Promise<ITransaction>;
};

interface IAccount {
    data: {
        account: {
            address: string;
            nonce: number;
            rootHash: string;
            balance: number;
            allowance: number;
            timestamp: number;
        };
    };
    error: string;
    code: string;
}

export { Account, IAccount, core };
