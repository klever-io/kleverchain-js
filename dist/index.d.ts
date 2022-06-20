interface Contract {
    Type: number;
    Parameter: any;
}
interface ITransactionResponse {
    RawData: {
        Version: number;
        ChainID: number;
        Nonce: number;
        Sender: string;
        Contract: Contract[];
        KAppFee: number;
        BandwidthFee: number;
    };
    Signature: string[];
}
interface IBroadcastResponse {
    txHashes: string[];
    txCount: number;
}
interface IPemResponse {
    address: string;
    privateKey: string;
}

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
interface IBasePayload {
    sender: string;
    privateKey: string;
    nonce: number;
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
    ConfigITO = 19,
    AssetTrigger = 20,
    UpdateAccountPermission = 21,
    SetITOPrices = 22
}
declare enum TriggerType {
    Mint = 0,
    Burn = 1,
    Wipe = 2,
    Pause = 3,
    Resume = 4,
    ChangeOwner = 5,
    AddRole = 6,
    RemoveRole = 7,
    UpdateMetadata = 8,
    StopNFTMint = 9,
    UpdateLogo = 10,
    UpdateURIs = 11,
    ChangeRoyaltiesReceiver = 12,
    UpdateStaking = 13
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
    receiver: string;
    bucketID: string;
}
interface ISetAccountName {
    name: string;
}
interface IVotes {
    amount: number;
    proposalID: number;
    type: number;
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
    logo: string;
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
    hasRoleSetITOPrices: boolean;
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
    parameters: {
        [key: number]: string;
    };
    description: string;
    epochsDuration: number;
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
    [key: string]: {
        packItems: Pack[];
    };
}
interface IConfigITO {
    receiverAddress: string;
    assetID: string;
    maxAmount: number;
    status: number;
    packInfo: PackInfo[];
}
interface IAssetTrigger {
    triggerType: TriggerType;
    assetId: string;
    receiver?: string;
    amount?: number;
    uris?: {
        [key: string]: string;
    };
    logo?: string;
    mime?: string;
    role?: Roles;
    staking?: Staking;
}
declare enum AccPermissionType {
    OWNER = 0,
    USER = 1
}
interface AccKey {
    address: string;
    weight: number;
}
interface AccPermission {
    type: AccPermissionType;
    permissionName: string;
    threshold: number;
    operations: string;
    signers: AccKey[];
}
interface IUpdateAccountPermission {
    permissions: AccPermission[];
}
interface ISetITOPrices {
    assetID: string;
    packInfo: PackInfo;
}

declare class Account {
    private address;
    private privateKey;
    constructor(address: string, privateKey: string);
    getAddress(): string;
    getPrivateKey(): string;
    getBalance(): Promise<number>;
    getNonce(): Promise<number>;
    getBasePayload(): Promise<IBasePayload>;
    sendTransfer(payload: ITransfer, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendCreateMarketplace(payload: ICreateMarket, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendConfigMarketplace(payload: IConfigMarket, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendFreeze(payload: IFreeze, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendUnfreeze(payload: IUnfreeze, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendWithdraw(payload: IWithdraw, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendUndelegate(payload: IUndelegate, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendDelegate(payload: IDelegate, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    setAccountName(payload: ISetAccountName, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendVotes(payload: IVotes, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendClaim(payload: IClaim, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendUnjail(): Promise<ITransactionResponse | IBroadcastResponse>;
    sendCancelMarketOrder(payload: ICancelMarketOrder, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendSellOrder(payload: ISellOrder, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendBuyOrder(payload: IBuyOrder, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendCreateAsset(payload: ICreateAsset, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendProposal(payload: IProposal, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendCreateValidator(payload: ICreateValidator, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendConfigValidator(payload: ICreateValidator, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendConfigITO(payload: IConfigITO, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendAssetTrigger(payload: IAssetTrigger, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendUpdateAccountPermission(payload: IUpdateAccountPermission, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
    sendSetITOPrices(payload: ISetITOPrices, autobroadcast?: boolean): Promise<ITransactionResponse | IBroadcastResponse>;
}

declare const core: {
    getAccountByPem: (pemData: string) => Promise<Account>;
    createAccount: () => Promise<IPemResponse>;
    isSDKLoaded: () => Promise<boolean>;
};

declare const sendTransaction: (type: TransactionType, payload: IBasePayload, autobroadcast?: boolean) => Promise<ITransactionResponse | IBroadcastResponse>;

export { Account, IAccount, IAssetTrigger, IBasePayload, IBuyOrder, ICancelMarketOrder, IClaim, IConfigITO, IConfigMarket, ICreateAsset, ICreateMarket, ICreateValidator, IDelegate, IFreeze, IPemResponse, IProposal, ISellOrder, ISetAccountName, ISetITOPrices, ITransactionResponse, ITransfer, IUndelegate, IUnfreeze, IUpdateAccountPermission, IVotes, IWithdraw, TransactionType, TriggerType, core, sendTransaction };
