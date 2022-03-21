import React from 'react';

interface ITransactionResponse {
    txHashes: string[];
    txCount: number;
}
interface IPemResponse {
    address: string;
    privateKey: string;
}

interface IBasePayload {
    sender: string;
    privateKey: string;
}
interface ISdkContext {
    isLoaded(): boolean;
    getAccount(): Account | null;
    setAccount(account: Account): void;
}
declare enum TransactionType {
    Transfer = 0,
    CreateMarketplace = 1,
    ConfigMarketplace = 2,
    Freeze = 3,
    Unfreeze = 4,
    Withdraw = 5,
    Undelegate = 6,
    Delegate = 7,
    SetAccountName = 8,
    Votes = 9,
    Claim = 10,
    Unjail = 11,
    CancelMarketOrder = 12,
    SellOrder = 13,
    BuyOrder = 14,
    CreateAsset = 15,
    Proposal = 16,
    CreateValidator = 17,
    ConfigValidator = 18,
    ConfigICO = 19,
    AssetTrigger = 20
}

interface ITransfer {
    receiver: string;
    amount: number;
    asset?: string;
}
interface ICreateMarket {
    name: string;
    referralAddress?: string;
    referralPercentage: number;
}
interface IFreeze {
    amount: number;
    asset?: string;
}
interface IUnfreeze {
    bucketID: string;
    asset?: string;
}
interface IWithdraw {
    assetId: string;
}
interface IUndelegate {
    bucketID: string;
}
interface IDelegate {
    bucketID: string;
}
interface ISetAccountName {
    name: string;
}
interface IVotes {
    amount: number;
    proposalID: number;
}
interface IClaim {
    claimType: number;
    id: string;
}
interface ICancelMarketOrder {
    orderId: string;
}
interface ISellOrder {
    marketType: number;
    marketplaceId: string;
    assetId: string;
    currencyId: string;
    price: number;
    reservePrice: number;
    endTime: number;
}
interface IBuyOrder {
    buyType: number;
    id: string;
    currencyId: string;
    amount: number;
}
interface ICreateAsset {
    name: string;
    ticker: string;
    owner: string;
    precision: number;
    uris: string;
    initialSupply: number;
    circulatingSupply: number;
    maxSupply: number;
    type?: number;
    staking?: Staking;
    royalties?: Royalties;
    roles?: Roles[];
    properties?: Properties;
    attributes?: Attributes;
}
interface Staking {
    type: number;
    apr: number;
    minEpochsToClaim: number;
    minEpochsToUnstake: number;
    minEpochsToWithdraw: number;
}
interface Royalties {
    address?: string;
    transferPercentage?: RoyaltyInfo[];
    transferFixed?: number;
    marketPercentage?: number;
    marketFixed?: number;
}
interface RoyaltyInfo {
    amount?: number;
    percentage?: number;
}
interface Roles {
    address: string;
    hasRoleMint: boolean;
    hasRoleSetICOPrices: boolean;
}
interface Properties {
    canFreeze?: boolean;
    canWipe?: boolean;
    canPause?: boolean;
    canMint?: boolean;
    canBurn?: boolean;
    canChangeOwner?: boolean;
    canAddRoles?: boolean;
}
interface Attributes {
    isPaused?: boolean;
    isNFTMintStopped?: boolean;
}
interface IProposal {
    parameter: number;
    epochsDuration: number;
    value: string;
    description: string;
}
interface IConfigMarket {
    name: string;
    marketID: string;
    referralAddress?: string;
    referralPercentage: number;
}
interface ICreateValidator {
    name: string;
    address: string;
    rewardAddress: string;
    bls: string;
    canDelegate: boolean;
    maxDelegationAmount: number;
    comission: number;
    logo: string;
    uris: {
        [key: string]: string;
    };
}
interface Pack {
    amount: number;
    price: number;
}
interface PackInfo {
    [key: string]: Pack[];
}
interface IConfigICO {
    receiverAddress: string;
    assetID: string;
    maxAmount: number;
    status: number;
    packInfo: PackInfo[];
}

declare class Account {
    private address;
    private privateKey;
    constructor(address: string, privateKey: string);
    getAddress(): string;
    getPrivateKey(): string;
    getBalance(): Promise<number>;
    getBasePayload(): IBasePayload;
    sendTransfer(payload: ITransfer): Promise<ITransactionResponse>;
    sendCreateMarketplace(payload: ICreateMarket): Promise<ITransactionResponse>;
    sendConfigMarketplace(payload: IConfigMarket): Promise<ITransactionResponse>;
    sendFreeze(payload: IFreeze): Promise<ITransactionResponse>;
    sendUnfreeze(payload: IUnfreeze): Promise<ITransactionResponse>;
    sendWithdraw(payload: IWithdraw): Promise<ITransactionResponse>;
    sendUndelegate(payload: IUndelegate): Promise<ITransactionResponse>;
    sendDelegate(payload: IDelegate): Promise<ITransactionResponse>;
    setAccountName(payload: ISetAccountName): Promise<ITransactionResponse>;
    sendVotes(payload: IVotes): Promise<ITransactionResponse>;
    sendClaim(payload: IClaim): Promise<ITransactionResponse>;
    sendUnjail(payload: IClaim): Promise<ITransactionResponse>;
    sendCancelMarketOrder(payload: ICancelMarketOrder): Promise<ITransactionResponse>;
    sendSellOrder(payload: ISellOrder): Promise<ITransactionResponse>;
    sendBuyOrder(payload: IBuyOrder): Promise<ITransactionResponse>;
    sendCreateAsset(payload: ICreateAsset): Promise<ITransactionResponse>;
    sendProposal(payload: IProposal): Promise<ITransactionResponse>;
    sendCreateValidator(payload: ICreateValidator): Promise<ITransactionResponse>;
    sendConfigValidator(payload: ICreateValidator): Promise<ITransactionResponse>;
    sendConfigICO(payload: IConfigICO): Promise<ITransactionResponse>;
}

declare const core: {
    getAccountByPem: (pemData: string) => Promise<Account>;
    createAccount: () => Promise<IPemResponse>;
    handleLoad: () => void;
    isLoaded: () => boolean;
};

declare const sendTransaction: (type: TransactionType, payload: IBasePayload) => Promise<ITransactionResponse>;

declare const SdkContext: React.Context<ISdkContext>;
declare const SdkProvider: React.FC;
declare const useSdk: () => ISdkContext;

export { Account, SdkContext, SdkProvider, core, sendTransaction, useSdk };
