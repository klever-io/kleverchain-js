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
    Signature?: string[];
}
interface IBroadcastResponse {
    txHashes: string[];
    txCount: number;
}
interface ISignatureResponse {
    signature: string;
}
interface IVerifyResponse {
    valid: boolean;
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
    privateKey?: string;
    nonce: number;
}
interface ITransactionProps {
    metadata?: string;
    autobroadcast?: boolean;
    previousTX?: ITransactionResponse | ITransactionResponse[];
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
    private host;
    constructor(address: string, privateKey: string, host?: string);
    getAddress(): string;
    getPrivateKey(): string;
    getBalance(): Promise<number>;
    getNonce(): Promise<number>;
    getBasePayload(): Promise<IBasePayload>;
    sendTransfer(payload: ITransfer, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendCreateMarketplace(payload: ICreateMarket, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendConfigMarketplace(payload: IConfigMarket, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendFreeze(payload: IFreeze, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendUnfreeze(payload: IUnfreeze, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendWithdraw(payload: IWithdraw, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendUndelegate(payload: IUndelegate, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendDelegate(payload: IDelegate, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    setAccountName(payload: ISetAccountName, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendVotes(payload: IVotes, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendClaim(payload: IClaim, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendUnjail(): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendCancelMarketOrder(payload: ICancelMarketOrder, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendSellOrder(payload: ISellOrder, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendBuyOrder(payload: IBuyOrder, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendCreateAsset(payload: ICreateAsset, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendProposal(payload: IProposal, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendCreateValidator(payload: ICreateValidator, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendConfigValidator(payload: ICreateValidator, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendConfigITO(payload: IConfigITO, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendAssetTrigger(payload: IAssetTrigger, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendUpdateAccountPermission(payload: IUpdateAccountPermission, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
    sendSetITOPrices(payload: ISetITOPrices, props?: ITransactionProps): Promise<IBroadcastResponse | ITransactionResponse[]>;
}

declare const core: {
    getAccountByPem: (pemData: string) => Promise<Account>;
    createAccount: () => Promise<IPemResponse>;
    isSDKLoaded: () => Promise<boolean>;
    broadcastTransaction: (transactions: ITransactionResponse | ITransactionResponse[]) => Promise<IBroadcastResponse>;
    setURLs: (url: IURLs) => Promise<void>;
    signMessage: (message: string, privateKey: string) => Promise<ISignatureResponse>;
    signTransaction: (tx: ITransactionResponse, privateKey: string) => Promise<ISignatureResponse>;
    verifySignature: (message: string, signature: string, publicKey: string) => Promise<IVerifyResponse>;
};

declare const sendTransaction: (type: TransactionType, payload: IBasePayload, props?: ITransactionProps | undefined) => Promise<ITransactionResponse[] | IBroadcastResponse>;

export { Account, IAccount, IAssetTrigger, IBasePayload, IBuyOrder, ICancelMarketOrder, IClaim, IConfigITO, IConfigMarket, ICreateAsset, ICreateMarket, ICreateValidator, IDelegate, IFreeze, IPemResponse, IProposal, ISellOrder, ISetAccountName, ISetITOPrices, ITransactionProps, ITransactionResponse, ITransfer, IURLs, IUndelegate, IUnfreeze, IUpdateAccountPermission, IVotes, IWithdraw, TransactionType, TriggerType, core, sendTransaction };
