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
    sender?: string;
    privateKey?: string;
    nonce?: number;
}
interface ITransactionProps {
    metadata?: string;
    autobroadcast?: boolean;
    previousTX?: ITransaction | ITransaction[];
}
declare enum TransactionType {
    Transfer = 0,
    CreateAsset = 1,
    CreateValidator = 2,
    ConfigValidator = 3,
    Freeze = 4,
    Unfreeze = 5,
    Delegate = 6,
    Undelegate = 7,
    Withdraw = 8,
    Claim = 9,
    Unjail = 10,
    AssetTrigger = 11,
    SetAccountName = 12,
    Proposal = 13,
    Votes = 14,
    ConfigITO = 15,
    SetITOPrices = 16,
    BuyOrder = 17,
    SellOrder = 18,
    CancelMarketOrder = 19,
    CreateMarketplace = 20,
    ConfigMarketplace = 21,
    UpdateAccountPermission = 22
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
interface IURLs {
    api: string;
    node: string;
}

interface ITransfer {
    receiver: string;
    amount: number;
    kda?: string;
}
interface ICreateAsset {
    type?: number;
    name: string;
    ticker: string;
    ownerAddress: string;
    logo: string;
    uris: {
        [key: string]: string;
    };
    precision: number;
    initialSupply: number;
    maxSupply: number;
    royalties?: Royalties;
    properties?: Properties;
    attributes?: Attributes;
    staking?: Staking;
    roles?: Roles[];
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
interface Staking {
    apr: number;
    minEpochsToClaim: number;
    minEpochsToUnstake: number;
    minEpochsToWithdraw: number;
}
interface Roles {
    address: string;
    hasRoleMint: boolean;
    hasRoleSetITOPrices: boolean;
}
interface IAssetTrigger {
    triggerType: TriggerType;
    assetId: string;
    receiver?: string;
    amount?: number;
    mime?: string;
    logo?: string;
    uris?: {
        [key: string]: string;
    };
    role?: Roles;
    staking?: Staking;
}
interface IConfigValidator {
    blsPublicKey: string;
    rewardAddress: string;
    canDelegate: boolean;
    commission: number;
    maxDelegationAmount: number;
    logo?: string;
    name?: string;
    uris: {
        [key: string]: string;
    };
}
interface ICreateValidator extends IConfigValidator {
    ownerAddress: string;
}
interface IFreeze {
    amount: number;
    kda?: string;
}
interface IUnfreeze {
    bucketId: string;
    kda?: string;
}
interface IDelegate {
    receiver: string;
    bucketId: string;
}
interface IUndelegate {
    bucketId: string;
}
interface IWithdraw {
    kda: string;
}
interface IClaim {
    claimType: number;
    id: string;
}
interface IUnjail {
}
interface ISetAccountName {
    name: string;
}
interface IProposal {
    parameters: {
        [key: number]: string;
    };
    description: string;
    epochsDuration: number;
}
interface IVotes {
    type: number;
    proposalId: number;
    amount: number;
}
interface IConfigITO {
    kda: string;
    receiverAddress: string;
    status: number;
    maxAmount: number;
    packInfo: PackInfo[];
}
interface ISetITOPrices {
    kda: string;
    packInfo: PackInfo;
}
interface PackInfo {
    [key: string]: {
        packItems: Pack[];
    };
}
interface Pack {
    amount: number;
    price: number;
}
interface IBuyOrder {
    buyType: number;
    id: string;
    currencyId: string;
    amount: number;
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
interface ICancelMarketOrder {
    orderId: string;
}
interface ICreateMarketplace {
    name: string;
    referralAddress?: string;
    referralPercentage: number;
}
interface IConfigMarketplace {
    marketplaceId: string;
    name: string;
    referralAddress?: string;
    referralPercentage: number;
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

interface Contract {
    Type: number;
    Parameter: any;
}
interface IRawData {
    Version: number;
    ChainID: number;
    Nonce: number;
    Sender: string;
    Contract: Contract[];
    KAppFee: number;
    BandwidthFee: number;
}
interface ITransaction {
    RawData: IRawData;
    Signature?: string[];
}
interface IBroadcastResponse {
    txHash: string;
    txCount: number;
}
interface ISignatureResponse extends ITransaction {
    Signature: string[];
}
interface IVerifyResponse {
    valid: boolean;
}
interface IPemResponse {
    address: string;
    privateKey: string;
}

declare class Account {
    private address;
    private privateKey;
    private host;
    constructor(address: string, privateKey: string, host?: string);
    getAddress(): string;
    getBalance(): Promise<number>;
    getNonce(): Promise<number>;
    getBasePayload(): Promise<IBasePayload>;
    sendTransfer(payload: ITransfer, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendCreateMarketplace(payload: ICreateMarketplace, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendConfigMarketplace(payload: IConfigMarketplace, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendFreeze(payload: IFreeze, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendUnfreeze(payload: IUnfreeze, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendWithdraw(payload: IWithdraw, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendUndelegate(payload: IUndelegate, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendDelegate(payload: IDelegate, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    setAccountName(payload: ISetAccountName, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendVotes(payload: IVotes, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendClaim(payload: IClaim, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendUnjail(): Promise<ITransaction | IBroadcastResponse>;
    sendCancelMarketOrder(payload: ICancelMarketOrder, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendSellOrder(payload: ISellOrder, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendBuyOrder(payload: IBuyOrder, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendCreateAsset(payload: ICreateAsset, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendProposal(payload: IProposal, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendCreateValidator(payload: ICreateValidator, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendConfigValidator(payload: ICreateValidator, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendConfigITO(payload: IConfigITO, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendAssetTrigger(payload: IAssetTrigger, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendUpdateAccountPermission(payload: IUpdateAccountPermission, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
    sendSetITOPrices(payload: ISetITOPrices, props?: ITransactionProps): Promise<ITransaction | IBroadcastResponse>;
}

declare const core: {
    getAccountByPem: (pemData: string) => Promise<Account>;
    createAccount: () => Promise<IPemResponse>;
    isSDKLoaded: () => Promise<boolean>;
    broadcastTransaction: (transaction: ITransaction) => Promise<IBroadcastResponse>;
    setURLs: (url: IURLs) => Promise<void>;
    signMessage: (message: string, privateKey: string) => Promise<ISignatureResponse>;
    signTransaction: (tx: ITransaction) => Promise<ISignatureResponse>;
    verifySignature: (message: string, signature: string, publicKey: string) => Promise<IVerifyResponse>;
};

declare const sendTransaction: (type: TransactionType, payload: IBasePayload, props?: ITransactionProps | undefined) => Promise<ITransaction | IBroadcastResponse>;

export { Account, IAccount, IAssetTrigger, IBasePayload, IBuyOrder, ICancelMarketOrder, IClaim, IConfigITO, IConfigMarketplace, IConfigValidator, ICreateAsset, ICreateMarketplace, ICreateValidator, IDelegate, IFreeze, IPemResponse, IProposal, IRawData, ISellOrder, ISetAccountName, ISetITOPrices, ITransaction, ITransactionProps, ITransfer, IURLs, IUndelegate, IUnfreeze, IUnjail, IUpdateAccountPermission, IVotes, IWithdraw, TransactionType, TriggerType, core, sendTransaction };
