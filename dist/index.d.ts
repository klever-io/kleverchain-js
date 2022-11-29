export { IAssetTrigger, IBuyOrder, ICancelMarketOrder, IClaim, IConfigITO, IConfigMarketplace, IConfigValidator, ICreateAsset, ICreateMarketplace, ICreateValidator, IDelegate, IFreeze, IProposal, ISellOrder, ISetAccountName, ISetITOPrices, ITransfer, IUndelegate, IUnfreeze, IUnjail, IUpdateAccountPermission, IVotes, IWithdraw } from '@klever/kleverweb/dist/types/contracts';
import { IContractRequest, ITxOptionsRequest, ITransaction, IBroadcastResponse, IProvider } from '@klever/kleverweb/dist/types/dtos';
export { IContract, IContractRequest, IProvider, ITransaction, ITxOptionsRequest } from '@klever/kleverweb/dist/types/dtos';
import { TransactionType } from '@klever/kleverweb/dist/types/enums';
export { TransactionType, TriggerType } from '@klever/kleverweb/dist/types/enums';
import _m0 from 'protobufjs/minimal';
import { FileDescriptorProto } from 'ts-proto-descriptors';

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
interface ITransactionContract {
    type: TransactionType;
    typeString: string;
    parameter: any;
}
interface IDecodedTransaction {
    data: {
        tx: {
            hash: string;
            sender: string;
            nonce: number;
            data: string[];
            kAppFee: number;
            bandwidthFee: number;
            status: string;
            version: number;
            chainID: string;
            searchOrder: number;
            contract: ITransactionContract[];
        };
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
    constructor(privateKey?: string);
    private init;
    getBalance(): number;
    getNonce(): number;
    getAddress(): string;
    sync(): Promise<void>;
    getInfo(): Promise<IAccountInfo>;
    buildTransaction: (contracts: IContractRequest[], txData?: string[] | undefined, options?: ITxOptionsRequest | undefined) => Promise<ITransaction>;
    signMessage: (message: string) => Promise<string>;
    signTransaction: (tx: ITransaction) => Promise<ITransaction>;
    quickSend: (contracts: IContractRequest[], txData?: string[] | undefined, options?: ITxOptionsRequest | undefined) => Promise<IBroadcastResponse>;
    downloadAsPem: (path?: string | undefined) => Promise<void>;
    validateSignature: (message: string, signature: string) => Promise<boolean>;
    broadcastTransactions: (txs: string[] | ITransaction[]) => Promise<IBroadcastResponse>;
}

declare const utils: {
    getAddressFromPrivateKey: (privateKey: string) => Promise<string>;
    generateKeyPair: () => Promise<{
        privateKey: string;
        address: string;
    }>;
    getProviders: () => IProvider;
    setProviders: (providers: IProvider) => void;
    broadcastTransactions: (txs: ITransaction[] | string[]) => Promise<IBroadcastResponse>;
    decodeTransaction: (tx: ITransaction) => Promise<IDecodedTransaction>;
    transactionsProcessed: (txs: Promise<IBroadcastResponse>[], tries?: number) => Promise<IDecodedTransaction[]>;
    accountsReady: (accounts: Account[]) => Promise<void>;
    decodeAddress: (address: string) => Promise<Uint8Array>;
    encodeAddress: (address: Uint8Array) => string;
    toHex: (data: Uint8Array) => string;
    validateSignature: (message: string, signature: string, address: string) => Promise<boolean>;
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
    setProvider: (pvd: IProvider) => void;
};

declare const protobufPackage$1 = "proto";
declare enum CreateAssetContract_EnumAssetType {
    Fungible = 0,
    NonFungible = 1,
    UNRECOGNIZED = -1
}
declare function createAssetContract_EnumAssetTypeFromJSON(object: any): CreateAssetContract_EnumAssetType;
declare function createAssetContract_EnumAssetTypeToJSON(object: CreateAssetContract_EnumAssetType): number;
declare enum StakingInfo_InterestType {
    APRI = 0,
    FPRI = 1,
    UNRECOGNIZED = -1
}
declare function stakingInfo_InterestTypeFromJSON(object: any): StakingInfo_InterestType;
declare function stakingInfo_InterestTypeToJSON(object: StakingInfo_InterestType): number;
declare enum AssetTriggerContract_EnumTriggerType {
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
    UpdateStaking = 13,
    UNRECOGNIZED = -1
}
declare function assetTriggerContract_EnumTriggerTypeFromJSON(object: any): AssetTriggerContract_EnumTriggerType;
declare function assetTriggerContract_EnumTriggerTypeToJSON(object: AssetTriggerContract_EnumTriggerType): number;
declare enum ClaimContract_EnumClaimType {
    StakingClaim = 0,
    AllowanceClaim = 1,
    MarketClaim = 2,
    UNRECOGNIZED = -1
}
declare function claimContract_EnumClaimTypeFromJSON(object: any): ClaimContract_EnumClaimType;
declare function claimContract_EnumClaimTypeToJSON(object: ClaimContract_EnumClaimType): number;
declare enum VoteContract_EnumVoteType {
    Yes = 0,
    No = 1,
    UNRECOGNIZED = -1
}
declare function voteContract_EnumVoteTypeFromJSON(object: any): VoteContract_EnumVoteType;
declare function voteContract_EnumVoteTypeToJSON(object: VoteContract_EnumVoteType): number;
declare enum ConfigITOContract_EnumITOStatus {
    DefaultITO = 0,
    ActiveITO = 1,
    PausedITO = 2,
    UNRECOGNIZED = -1
}
declare function configITOContract_EnumITOStatusFromJSON(object: any): ConfigITOContract_EnumITOStatus;
declare function configITOContract_EnumITOStatusToJSON(object: ConfigITOContract_EnumITOStatus): number;
declare enum BuyContract_EnumBuyType {
    ITOBuy = 0,
    MarketBuy = 1,
    UNRECOGNIZED = -1
}
declare function buyContract_EnumBuyTypeFromJSON(object: any): BuyContract_EnumBuyType;
declare function buyContract_EnumBuyTypeToJSON(object: BuyContract_EnumBuyType): number;
declare enum SellContract_EnumMarketType {
    BuyItNowMarket = 0,
    AuctionMarket = 1,
    UNRECOGNIZED = -1
}
declare function sellContract_EnumMarketTypeFromJSON(object: any): SellContract_EnumMarketType;
declare function sellContract_EnumMarketTypeToJSON(object: SellContract_EnumMarketType): number;
declare enum AccPermission_AccPermissionType {
    Owner = 0,
    User = 1,
    UNRECOGNIZED = -1
}
declare function accPermission_AccPermissionTypeFromJSON(object: any): AccPermission_AccPermissionType;
declare function accPermission_AccPermissionTypeToJSON(object: AccPermission_AccPermissionType): number;
/** TXContract available */
interface TransferContract {
    ToAddress?: Uint8Array;
    AssetID?: Uint8Array;
    Amount?: number;
}
declare const TransferContract: {
    encode(message: TransferContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TransferContract;
    fromJSON(object: any): TransferContract;
    toJSON(message: TransferContract): unknown;
    fromPartial<I extends {
        ToAddress?: Uint8Array | undefined;
        AssetID?: Uint8Array | undefined;
        Amount?: number | undefined;
    } & {
        ToAddress?: Uint8Array | undefined;
        AssetID?: Uint8Array | undefined;
        Amount?: number | undefined;
    } & { [K in Exclude<keyof I, keyof TransferContract>]: never; }>(object: I): TransferContract;
};
/** CreateAssetContract holds the data for a Klever digital asset */
interface CreateAssetContract {
    Type?: CreateAssetContract_EnumAssetType;
    Name?: Uint8Array;
    Ticker?: Uint8Array;
    OwnerAddress?: Uint8Array;
    Logo?: string;
    URIs?: {
        [key: string]: string;
    };
    Precision?: number;
    InitialSupply?: number;
    MaxSupply?: number;
    Royalties?: RoyaltiesInfo;
    Properties?: PropertiesInfo;
    Attributes?: AttributesInfo;
    Staking?: StakingInfo;
    Roles?: RolesInfo[];
}
declare const CreateAssetContract: {
    encode(message: CreateAssetContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAssetContract;
    fromJSON(object: any): CreateAssetContract;
    toJSON(message: CreateAssetContract): unknown;
    fromPartial<I extends {
        Type?: CreateAssetContract_EnumAssetType | undefined;
        Name?: Uint8Array | undefined;
        Ticker?: Uint8Array | undefined;
        OwnerAddress?: Uint8Array | undefined;
        Logo?: string | undefined;
        URIs?: {
            [x: string]: string | undefined;
        } | undefined;
        Precision?: number | undefined;
        InitialSupply?: number | undefined;
        MaxSupply?: number | undefined;
        Royalties?: {
            Address?: Uint8Array | undefined;
            TransferPercentage?: {
                Amount?: number | undefined;
                Percentage?: number | undefined;
            }[] | undefined;
            TransferFixed?: number | undefined;
            MarketPercentage?: number | undefined;
            MarketFixed?: number | undefined;
        } | undefined;
        Properties?: {
            CanFreeze?: boolean | undefined;
            CanWipe?: boolean | undefined;
            CanPause?: boolean | undefined;
            CanMint?: boolean | undefined;
            CanBurn?: boolean | undefined;
            CanChangeOwner?: boolean | undefined;
            CanAddRoles?: boolean | undefined;
        } | undefined;
        Attributes?: {
            IsPaused?: boolean | undefined;
            IsNFTMintStopped?: boolean | undefined;
        } | undefined;
        Staking?: {
            Type?: StakingInfo_InterestType | undefined;
            APR?: number | undefined;
            MinEpochsToClaim?: number | undefined;
            MinEpochsToUnstake?: number | undefined;
            MinEpochsToWithdraw?: number | undefined;
        } | undefined;
        Roles?: {
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        }[] | undefined;
    } & {
        Type?: CreateAssetContract_EnumAssetType | undefined;
        Name?: Uint8Array | undefined;
        Ticker?: Uint8Array | undefined;
        OwnerAddress?: Uint8Array | undefined;
        Logo?: string | undefined;
        URIs?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K in Exclude<keyof I["URIs"], string | number>]: never; }) | undefined;
        Precision?: number | undefined;
        InitialSupply?: number | undefined;
        MaxSupply?: number | undefined;
        Royalties?: ({
            Address?: Uint8Array | undefined;
            TransferPercentage?: {
                Amount?: number | undefined;
                Percentage?: number | undefined;
            }[] | undefined;
            TransferFixed?: number | undefined;
            MarketPercentage?: number | undefined;
            MarketFixed?: number | undefined;
        } & {
            Address?: Uint8Array | undefined;
            TransferPercentage?: ({
                Amount?: number | undefined;
                Percentage?: number | undefined;
            }[] & ({
                Amount?: number | undefined;
                Percentage?: number | undefined;
            } & {
                Amount?: number | undefined;
                Percentage?: number | undefined;
            } & { [K_1 in Exclude<keyof I["Royalties"]["TransferPercentage"][number], keyof RoyaltyInfo>]: never; })[] & { [K_2 in Exclude<keyof I["Royalties"]["TransferPercentage"], keyof {
                Amount?: number | undefined;
                Percentage?: number | undefined;
            }[]>]: never; }) | undefined;
            TransferFixed?: number | undefined;
            MarketPercentage?: number | undefined;
            MarketFixed?: number | undefined;
        } & { [K_3 in Exclude<keyof I["Royalties"], keyof RoyaltiesInfo>]: never; }) | undefined;
        Properties?: ({
            CanFreeze?: boolean | undefined;
            CanWipe?: boolean | undefined;
            CanPause?: boolean | undefined;
            CanMint?: boolean | undefined;
            CanBurn?: boolean | undefined;
            CanChangeOwner?: boolean | undefined;
            CanAddRoles?: boolean | undefined;
        } & {
            CanFreeze?: boolean | undefined;
            CanWipe?: boolean | undefined;
            CanPause?: boolean | undefined;
            CanMint?: boolean | undefined;
            CanBurn?: boolean | undefined;
            CanChangeOwner?: boolean | undefined;
            CanAddRoles?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I["Properties"], keyof PropertiesInfo>]: never; }) | undefined;
        Attributes?: ({
            IsPaused?: boolean | undefined;
            IsNFTMintStopped?: boolean | undefined;
        } & {
            IsPaused?: boolean | undefined;
            IsNFTMintStopped?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I["Attributes"], keyof AttributesInfo>]: never; }) | undefined;
        Staking?: ({
            Type?: StakingInfo_InterestType | undefined;
            APR?: number | undefined;
            MinEpochsToClaim?: number | undefined;
            MinEpochsToUnstake?: number | undefined;
            MinEpochsToWithdraw?: number | undefined;
        } & {
            Type?: StakingInfo_InterestType | undefined;
            APR?: number | undefined;
            MinEpochsToClaim?: number | undefined;
            MinEpochsToUnstake?: number | undefined;
            MinEpochsToWithdraw?: number | undefined;
        } & { [K_6 in Exclude<keyof I["Staking"], keyof StakingInfo>]: never; }) | undefined;
        Roles?: ({
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        }[] & ({
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        } & {
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        } & { [K_7 in Exclude<keyof I["Roles"][number], keyof RolesInfo>]: never; })[] & { [K_8 in Exclude<keyof I["Roles"], keyof {
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof CreateAssetContract>]: never; }>(object: I): CreateAssetContract;
};
interface CreateAssetContract_URIsEntry {
    key: string;
    value: string;
}
declare const CreateAssetContract_URIsEntry: {
    encode(message: CreateAssetContract_URIsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAssetContract_URIsEntry;
    fromJSON(object: any): CreateAssetContract_URIsEntry;
    toJSON(message: CreateAssetContract_URIsEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CreateAssetContract_URIsEntry>]: never; }>(object: I): CreateAssetContract_URIsEntry;
};
/** PropertiesInfo hold the properties structure for the KDA asset */
interface PropertiesInfo {
    CanFreeze?: boolean;
    CanWipe?: boolean;
    CanPause?: boolean;
    CanMint?: boolean;
    CanBurn?: boolean;
    CanChangeOwner?: boolean;
    CanAddRoles?: boolean;
}
declare const PropertiesInfo: {
    encode(message: PropertiesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PropertiesInfo;
    fromJSON(object: any): PropertiesInfo;
    toJSON(message: PropertiesInfo): unknown;
    fromPartial<I extends {
        CanFreeze?: boolean | undefined;
        CanWipe?: boolean | undefined;
        CanPause?: boolean | undefined;
        CanMint?: boolean | undefined;
        CanBurn?: boolean | undefined;
        CanChangeOwner?: boolean | undefined;
        CanAddRoles?: boolean | undefined;
    } & {
        CanFreeze?: boolean | undefined;
        CanWipe?: boolean | undefined;
        CanPause?: boolean | undefined;
        CanMint?: boolean | undefined;
        CanBurn?: boolean | undefined;
        CanChangeOwner?: boolean | undefined;
        CanAddRoles?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof PropertiesInfo>]: never; }>(object: I): PropertiesInfo;
};
/** AttributesInfo hold the attributes structure for the KDA asset */
interface AttributesInfo {
    IsPaused?: boolean;
    IsNFTMintStopped?: boolean;
}
declare const AttributesInfo: {
    encode(message: AttributesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AttributesInfo;
    fromJSON(object: any): AttributesInfo;
    toJSON(message: AttributesInfo): unknown;
    fromPartial<I extends {
        IsPaused?: boolean | undefined;
        IsNFTMintStopped?: boolean | undefined;
    } & {
        IsPaused?: boolean | undefined;
        IsNFTMintStopped?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof AttributesInfo>]: never; }>(object: I): AttributesInfo;
};
/** StakingInfo hold the staking structure for the KDA asset */
interface StakingInfo {
    Type?: StakingInfo_InterestType;
    APR?: number;
    MinEpochsToClaim?: number;
    MinEpochsToUnstake?: number;
    MinEpochsToWithdraw?: number;
}
declare const StakingInfo: {
    encode(message: StakingInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StakingInfo;
    fromJSON(object: any): StakingInfo;
    toJSON(message: StakingInfo): unknown;
    fromPartial<I extends {
        Type?: StakingInfo_InterestType | undefined;
        APR?: number | undefined;
        MinEpochsToClaim?: number | undefined;
        MinEpochsToUnstake?: number | undefined;
        MinEpochsToWithdraw?: number | undefined;
    } & {
        Type?: StakingInfo_InterestType | undefined;
        APR?: number | undefined;
        MinEpochsToClaim?: number | undefined;
        MinEpochsToUnstake?: number | undefined;
        MinEpochsToWithdraw?: number | undefined;
    } & { [K in Exclude<keyof I, keyof StakingInfo>]: never; }>(object: I): StakingInfo;
};
/** RolesInfo holds the roles for a given asset and the given address */
interface RolesInfo {
    Address?: Uint8Array;
    HasRoleMint?: boolean;
    HasRoleSetITOPrices?: boolean;
}
declare const RolesInfo: {
    encode(message: RolesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RolesInfo;
    fromJSON(object: any): RolesInfo;
    toJSON(message: RolesInfo): unknown;
    fromPartial<I extends {
        Address?: Uint8Array | undefined;
        HasRoleMint?: boolean | undefined;
        HasRoleSetITOPrices?: boolean | undefined;
    } & {
        Address?: Uint8Array | undefined;
        HasRoleMint?: boolean | undefined;
        HasRoleSetITOPrices?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof RolesInfo>]: never; }>(object: I): RolesInfo;
};
/** RoyaltiesInfo holds the royalties for a given asset */
interface RoyaltiesInfo {
    Address?: Uint8Array;
    TransferPercentage?: RoyaltyInfo[];
    TransferFixed?: number;
    MarketPercentage?: number;
    MarketFixed?: number;
}
declare const RoyaltiesInfo: {
    encode(message: RoyaltiesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoyaltiesInfo;
    fromJSON(object: any): RoyaltiesInfo;
    toJSON(message: RoyaltiesInfo): unknown;
    fromPartial<I extends {
        Address?: Uint8Array | undefined;
        TransferPercentage?: {
            Amount?: number | undefined;
            Percentage?: number | undefined;
        }[] | undefined;
        TransferFixed?: number | undefined;
        MarketPercentage?: number | undefined;
        MarketFixed?: number | undefined;
    } & {
        Address?: Uint8Array | undefined;
        TransferPercentage?: ({
            Amount?: number | undefined;
            Percentage?: number | undefined;
        }[] & ({
            Amount?: number | undefined;
            Percentage?: number | undefined;
        } & {
            Amount?: number | undefined;
            Percentage?: number | undefined;
        } & { [K in Exclude<keyof I["TransferPercentage"][number], keyof RoyaltyInfo>]: never; })[] & { [K_1 in Exclude<keyof I["TransferPercentage"], keyof {
            Amount?: number | undefined;
            Percentage?: number | undefined;
        }[]>]: never; }) | undefined;
        TransferFixed?: number | undefined;
        MarketPercentage?: number | undefined;
        MarketFixed?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof RoyaltiesInfo>]: never; }>(object: I): RoyaltiesInfo;
};
/** RoyaltyInfo holds the royalty threshold */
interface RoyaltyInfo {
    Amount?: number;
    Percentage?: number;
}
declare const RoyaltyInfo: {
    encode(message: RoyaltyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RoyaltyInfo;
    fromJSON(object: any): RoyaltyInfo;
    toJSON(message: RoyaltyInfo): unknown;
    fromPartial<I extends {
        Amount?: number | undefined;
        Percentage?: number | undefined;
    } & {
        Amount?: number | undefined;
        Percentage?: number | undefined;
    } & { [K in Exclude<keyof I, keyof RoyaltyInfo>]: never; }>(object: I): RoyaltyInfo;
};
/** AssetTriggerContract triggers assets functions */
interface AssetTriggerContract {
    TriggerType?: AssetTriggerContract_EnumTriggerType;
    AssetID?: Uint8Array;
    ToAddress?: Uint8Array;
    Amount?: number;
    MIME?: Uint8Array;
    Logo?: string;
    URIs?: {
        [key: string]: string;
    };
    Role?: RolesInfo;
    Staking?: StakingInfo;
}
declare const AssetTriggerContract: {
    encode(message: AssetTriggerContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetTriggerContract;
    fromJSON(object: any): AssetTriggerContract;
    toJSON(message: AssetTriggerContract): unknown;
    fromPartial<I extends {
        TriggerType?: AssetTriggerContract_EnumTriggerType | undefined;
        AssetID?: Uint8Array | undefined;
        ToAddress?: Uint8Array | undefined;
        Amount?: number | undefined;
        MIME?: Uint8Array | undefined;
        Logo?: string | undefined;
        URIs?: {
            [x: string]: string | undefined;
        } | undefined;
        Role?: {
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        } | undefined;
        Staking?: {
            Type?: StakingInfo_InterestType | undefined;
            APR?: number | undefined;
            MinEpochsToClaim?: number | undefined;
            MinEpochsToUnstake?: number | undefined;
            MinEpochsToWithdraw?: number | undefined;
        } | undefined;
    } & {
        TriggerType?: AssetTriggerContract_EnumTriggerType | undefined;
        AssetID?: Uint8Array | undefined;
        ToAddress?: Uint8Array | undefined;
        Amount?: number | undefined;
        MIME?: Uint8Array | undefined;
        Logo?: string | undefined;
        URIs?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K in Exclude<keyof I["URIs"], string | number>]: never; }) | undefined;
        Role?: ({
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        } & {
            Address?: Uint8Array | undefined;
            HasRoleMint?: boolean | undefined;
            HasRoleSetITOPrices?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["Role"], keyof RolesInfo>]: never; }) | undefined;
        Staking?: ({
            Type?: StakingInfo_InterestType | undefined;
            APR?: number | undefined;
            MinEpochsToClaim?: number | undefined;
            MinEpochsToUnstake?: number | undefined;
            MinEpochsToWithdraw?: number | undefined;
        } & {
            Type?: StakingInfo_InterestType | undefined;
            APR?: number | undefined;
            MinEpochsToClaim?: number | undefined;
            MinEpochsToUnstake?: number | undefined;
            MinEpochsToWithdraw?: number | undefined;
        } & { [K_2 in Exclude<keyof I["Staking"], keyof StakingInfo>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof AssetTriggerContract>]: never; }>(object: I): AssetTriggerContract;
};
interface AssetTriggerContract_URIsEntry {
    key: string;
    value: string;
}
declare const AssetTriggerContract_URIsEntry: {
    encode(message: AssetTriggerContract_URIsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AssetTriggerContract_URIsEntry;
    fromJSON(object: any): AssetTriggerContract_URIsEntry;
    toJSON(message: AssetTriggerContract_URIsEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AssetTriggerContract_URIsEntry>]: never; }>(object: I): AssetTriggerContract_URIsEntry;
};
/** ValidatorConfig holds the data for a validator configuration */
interface ValidatorConfig {
    BLSPublicKey?: Uint8Array;
    RewardAddress?: Uint8Array;
    CanDelegate?: boolean;
    Commission?: number;
    MaxDelegationAmount?: number;
    Logo?: string;
    URIs?: {
        [key: string]: string;
    };
    Name?: string;
}
declare const ValidatorConfig: {
    encode(message: ValidatorConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorConfig;
    fromJSON(object: any): ValidatorConfig;
    toJSON(message: ValidatorConfig): unknown;
    fromPartial<I extends {
        BLSPublicKey?: Uint8Array | undefined;
        RewardAddress?: Uint8Array | undefined;
        CanDelegate?: boolean | undefined;
        Commission?: number | undefined;
        MaxDelegationAmount?: number | undefined;
        Logo?: string | undefined;
        URIs?: {
            [x: string]: string | undefined;
        } | undefined;
        Name?: string | undefined;
    } & {
        BLSPublicKey?: Uint8Array | undefined;
        RewardAddress?: Uint8Array | undefined;
        CanDelegate?: boolean | undefined;
        Commission?: number | undefined;
        MaxDelegationAmount?: number | undefined;
        Logo?: string | undefined;
        URIs?: ({
            [x: string]: string | undefined;
        } & {
            [x: string]: string | undefined;
        } & { [K in Exclude<keyof I["URIs"], string | number>]: never; }) | undefined;
        Name?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ValidatorConfig>]: never; }>(object: I): ValidatorConfig;
};
interface ValidatorConfig_URIsEntry {
    key: string;
    value: string;
}
declare const ValidatorConfig_URIsEntry: {
    encode(message: ValidatorConfig_URIsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorConfig_URIsEntry;
    fromJSON(object: any): ValidatorConfig_URIsEntry;
    toJSON(message: ValidatorConfig_URIsEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ValidatorConfig_URIsEntry>]: never; }>(object: I): ValidatorConfig_URIsEntry;
};
/** CreateValidatorContract holds the data for create a validator */
interface CreateValidatorContract {
    OwnerAddress?: Uint8Array;
    Config?: ValidatorConfig;
}
declare const CreateValidatorContract: {
    encode(message: CreateValidatorContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateValidatorContract;
    fromJSON(object: any): CreateValidatorContract;
    toJSON(message: CreateValidatorContract): unknown;
    fromPartial<I extends {
        OwnerAddress?: Uint8Array | undefined;
        Config?: {
            BLSPublicKey?: Uint8Array | undefined;
            RewardAddress?: Uint8Array | undefined;
            CanDelegate?: boolean | undefined;
            Commission?: number | undefined;
            MaxDelegationAmount?: number | undefined;
            Logo?: string | undefined;
            URIs?: {
                [x: string]: string | undefined;
            } | undefined;
            Name?: string | undefined;
        } | undefined;
    } & {
        OwnerAddress?: Uint8Array | undefined;
        Config?: ({
            BLSPublicKey?: Uint8Array | undefined;
            RewardAddress?: Uint8Array | undefined;
            CanDelegate?: boolean | undefined;
            Commission?: number | undefined;
            MaxDelegationAmount?: number | undefined;
            Logo?: string | undefined;
            URIs?: {
                [x: string]: string | undefined;
            } | undefined;
            Name?: string | undefined;
        } & {
            BLSPublicKey?: Uint8Array | undefined;
            RewardAddress?: Uint8Array | undefined;
            CanDelegate?: boolean | undefined;
            Commission?: number | undefined;
            MaxDelegationAmount?: number | undefined;
            Logo?: string | undefined;
            URIs?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K in Exclude<keyof I["Config"]["URIs"], string | number>]: never; }) | undefined;
            Name?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Config"], keyof ValidatorConfig>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof CreateValidatorContract>]: never; }>(object: I): CreateValidatorContract;
};
/** ValidatorConfigContract holds the data for a validator configuration transaction */
interface ValidatorConfigContract {
    Config?: ValidatorConfig;
}
declare const ValidatorConfigContract: {
    encode(message: ValidatorConfigContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorConfigContract;
    fromJSON(object: any): ValidatorConfigContract;
    toJSON(message: ValidatorConfigContract): unknown;
    fromPartial<I extends {
        Config?: {
            BLSPublicKey?: Uint8Array | undefined;
            RewardAddress?: Uint8Array | undefined;
            CanDelegate?: boolean | undefined;
            Commission?: number | undefined;
            MaxDelegationAmount?: number | undefined;
            Logo?: string | undefined;
            URIs?: {
                [x: string]: string | undefined;
            } | undefined;
            Name?: string | undefined;
        } | undefined;
    } & {
        Config?: ({
            BLSPublicKey?: Uint8Array | undefined;
            RewardAddress?: Uint8Array | undefined;
            CanDelegate?: boolean | undefined;
            Commission?: number | undefined;
            MaxDelegationAmount?: number | undefined;
            Logo?: string | undefined;
            URIs?: {
                [x: string]: string | undefined;
            } | undefined;
            Name?: string | undefined;
        } & {
            BLSPublicKey?: Uint8Array | undefined;
            RewardAddress?: Uint8Array | undefined;
            CanDelegate?: boolean | undefined;
            Commission?: number | undefined;
            MaxDelegationAmount?: number | undefined;
            Logo?: string | undefined;
            URIs?: ({
                [x: string]: string | undefined;
            } & {
                [x: string]: string | undefined;
            } & { [K in Exclude<keyof I["Config"]["URIs"], string | number>]: never; }) | undefined;
            Name?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Config"], keyof ValidatorConfig>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "Config">]: never; }>(object: I): ValidatorConfigContract;
};
/** FreezeContract holds the data for a freeze transaction */
interface FreezeContract {
    AssetID?: Uint8Array;
    Amount?: number;
}
declare const FreezeContract: {
    encode(message: FreezeContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FreezeContract;
    fromJSON(object: any): FreezeContract;
    toJSON(message: FreezeContract): unknown;
    fromPartial<I extends {
        AssetID?: Uint8Array | undefined;
        Amount?: number | undefined;
    } & {
        AssetID?: Uint8Array | undefined;
        Amount?: number | undefined;
    } & { [K in Exclude<keyof I, keyof FreezeContract>]: never; }>(object: I): FreezeContract;
};
/** UnfreezeContract holds the data for a unfreeze transaction */
interface UnfreezeContract {
    AssetID?: Uint8Array;
    BucketID?: Uint8Array;
}
declare const UnfreezeContract: {
    encode(message: UnfreezeContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnfreezeContract;
    fromJSON(object: any): UnfreezeContract;
    toJSON(message: UnfreezeContract): unknown;
    fromPartial<I extends {
        AssetID?: Uint8Array | undefined;
        BucketID?: Uint8Array | undefined;
    } & {
        AssetID?: Uint8Array | undefined;
        BucketID?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof UnfreezeContract>]: never; }>(object: I): UnfreezeContract;
};
/** DelegateContract holds the data for a delegate transaction */
interface DelegateContract {
    ToAddress?: Uint8Array;
    BucketID?: Uint8Array;
}
declare const DelegateContract: {
    encode(message: DelegateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DelegateContract;
    fromJSON(object: any): DelegateContract;
    toJSON(message: DelegateContract): unknown;
    fromPartial<I extends {
        ToAddress?: Uint8Array | undefined;
        BucketID?: Uint8Array | undefined;
    } & {
        ToAddress?: Uint8Array | undefined;
        BucketID?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof DelegateContract>]: never; }>(object: I): DelegateContract;
};
/** UndelegateContract holds the data for a undelegate transaction */
interface UndelegateContract {
    BucketID?: Uint8Array;
}
declare const UndelegateContract: {
    encode(message: UndelegateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UndelegateContract;
    fromJSON(object: any): UndelegateContract;
    toJSON(message: UndelegateContract): unknown;
    fromPartial<I extends {
        BucketID?: Uint8Array | undefined;
    } & {
        BucketID?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "BucketID">]: never; }>(object: I): UndelegateContract;
};
/** WithdrawContract holds the data for a withdraw transaction */
interface WithdrawContract {
    AssetID?: Uint8Array;
}
declare const WithdrawContract: {
    encode(message: WithdrawContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WithdrawContract;
    fromJSON(object: any): WithdrawContract;
    toJSON(message: WithdrawContract): unknown;
    fromPartial<I extends {
        AssetID?: Uint8Array | undefined;
    } & {
        AssetID?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "AssetID">]: never; }>(object: I): WithdrawContract;
};
/** ClaimContract holds the data for a claim transaction */
interface ClaimContract {
    ClaimType?: ClaimContract_EnumClaimType;
    ID?: Uint8Array;
}
declare const ClaimContract: {
    encode(message: ClaimContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClaimContract;
    fromJSON(object: any): ClaimContract;
    toJSON(message: ClaimContract): unknown;
    fromPartial<I extends {
        ClaimType?: ClaimContract_EnumClaimType | undefined;
        ID?: Uint8Array | undefined;
    } & {
        ClaimType?: ClaimContract_EnumClaimType | undefined;
        ID?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof ClaimContract>]: never; }>(object: I): ClaimContract;
};
/** UnjailContract holds the data for a unjail transaction */
interface UnjailContract {
}
declare const UnjailContract: {
    encode(_: UnjailContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnjailContract;
    fromJSON(_: any): UnjailContract;
    toJSON(_: UnjailContract): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): UnjailContract;
};
/** SetAccountNameContract holds the data for a setAccountName transaction */
interface SetAccountNameContract {
    Name?: Uint8Array;
}
declare const SetAccountNameContract: {
    encode(message: SetAccountNameContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetAccountNameContract;
    fromJSON(object: any): SetAccountNameContract;
    toJSON(message: SetAccountNameContract): unknown;
    fromPartial<I extends {
        Name?: Uint8Array | undefined;
    } & {
        Name?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "Name">]: never; }>(object: I): SetAccountNameContract;
};
/** ProposalContract holds the data for a proposal transaction */
interface ProposalContract {
    Parameters?: {
        [key: number]: Uint8Array;
    };
    Description?: Uint8Array;
    EpochsDuration?: number;
}
declare const ProposalContract: {
    encode(message: ProposalContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProposalContract;
    fromJSON(object: any): ProposalContract;
    toJSON(message: ProposalContract): unknown;
    fromPartial<I extends {
        Parameters?: {
            [x: number]: Uint8Array | undefined;
        } | undefined;
        Description?: Uint8Array | undefined;
        EpochsDuration?: number | undefined;
    } & {
        Parameters?: ({
            [x: number]: Uint8Array | undefined;
        } & {
            [x: number]: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["Parameters"], number>]: never; }) | undefined;
        Description?: Uint8Array | undefined;
        EpochsDuration?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ProposalContract>]: never; }>(object: I): ProposalContract;
};
interface ProposalContract_ParametersEntry {
    key: number;
    value: Uint8Array;
}
declare const ProposalContract_ParametersEntry: {
    encode(message: ProposalContract_ParametersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProposalContract_ParametersEntry;
    fromJSON(object: any): ProposalContract_ParametersEntry;
    toJSON(message: ProposalContract_ParametersEntry): unknown;
    fromPartial<I extends {
        key?: number | undefined;
        value?: Uint8Array | undefined;
    } & {
        key?: number | undefined;
        value?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof ProposalContract_ParametersEntry>]: never; }>(object: I): ProposalContract_ParametersEntry;
};
/** VoteContract holds the data for a vote transaction */
interface VoteContract {
    ProposalID?: number;
    Amount?: number;
    Type?: VoteContract_EnumVoteType;
}
declare const VoteContract: {
    encode(message: VoteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteContract;
    fromJSON(object: any): VoteContract;
    toJSON(message: VoteContract): unknown;
    fromPartial<I extends {
        ProposalID?: number | undefined;
        Amount?: number | undefined;
        Type?: VoteContract_EnumVoteType | undefined;
    } & {
        ProposalID?: number | undefined;
        Amount?: number | undefined;
        Type?: VoteContract_EnumVoteType | undefined;
    } & { [K in Exclude<keyof I, keyof VoteContract>]: never; }>(object: I): VoteContract;
};
/** ConfigITOContract holds the data for a ConfigITO transaction */
interface ConfigITOContract {
    AssetID?: Uint8Array;
    ReceiverAddress?: Uint8Array;
    Status?: ConfigITOContract_EnumITOStatus;
    MaxAmount?: number;
    PackInfo?: {
        [key: string]: PackInfo;
    };
}
declare const ConfigITOContract: {
    encode(message: ConfigITOContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigITOContract;
    fromJSON(object: any): ConfigITOContract;
    toJSON(message: ConfigITOContract): unknown;
    fromPartial<I extends {
        AssetID?: Uint8Array | undefined;
        ReceiverAddress?: Uint8Array | undefined;
        Status?: ConfigITOContract_EnumITOStatus | undefined;
        MaxAmount?: number | undefined;
        PackInfo?: {
            [x: string]: {
                Packs?: {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        AssetID?: Uint8Array | undefined;
        ReceiverAddress?: Uint8Array | undefined;
        Status?: ConfigITOContract_EnumITOStatus | undefined;
        MaxAmount?: number | undefined;
        PackInfo?: ({
            [x: string]: {
                Packs?: {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                Packs?: {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] | undefined;
            } & {
                Packs?: ({
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] & ({
                    Amount?: number | undefined;
                    Price?: number | undefined;
                } & {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                } & { [K in Exclude<keyof I["PackInfo"][string]["Packs"][number], keyof PackItem>]: never; })[] & { [K_1 in Exclude<keyof I["PackInfo"][string]["Packs"], keyof {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["PackInfo"][string], "Packs">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["PackInfo"], string | number>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ConfigITOContract>]: never; }>(object: I): ConfigITOContract;
};
interface ConfigITOContract_PackInfoEntry {
    key: string;
    value?: PackInfo;
}
declare const ConfigITOContract_PackInfoEntry: {
    encode(message: ConfigITOContract_PackInfoEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigITOContract_PackInfoEntry;
    fromJSON(object: any): ConfigITOContract_PackInfoEntry;
    toJSON(message: ConfigITOContract_PackInfoEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: {
            Packs?: {
                Amount?: number | undefined;
                Price?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            Packs?: {
                Amount?: number | undefined;
                Price?: number | undefined;
            }[] | undefined;
        } & {
            Packs?: ({
                Amount?: number | undefined;
                Price?: number | undefined;
            }[] & ({
                Amount?: number | undefined;
                Price?: number | undefined;
            } & {
                Amount?: number | undefined;
                Price?: number | undefined;
            } & { [K in Exclude<keyof I["value"]["Packs"][number], keyof PackItem>]: never; })[] & { [K_1 in Exclude<keyof I["value"]["Packs"], keyof {
                Amount?: number | undefined;
                Price?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["value"], "Packs">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof ConfigITOContract_PackInfoEntry>]: never; }>(object: I): ConfigITOContract_PackInfoEntry;
};
/** SetITOPrices holds the data for a ConfigITO transaction */
interface SetITOPricesContract {
    AssetID?: Uint8Array;
    PackInfo?: {
        [key: string]: PackInfo;
    };
}
declare const SetITOPricesContract: {
    encode(message: SetITOPricesContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetITOPricesContract;
    fromJSON(object: any): SetITOPricesContract;
    toJSON(message: SetITOPricesContract): unknown;
    fromPartial<I extends {
        AssetID?: Uint8Array | undefined;
        PackInfo?: {
            [x: string]: {
                Packs?: {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        AssetID?: Uint8Array | undefined;
        PackInfo?: ({
            [x: string]: {
                Packs?: {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                Packs?: {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] | undefined;
            } & {
                Packs?: ({
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[] & ({
                    Amount?: number | undefined;
                    Price?: number | undefined;
                } & {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                } & { [K in Exclude<keyof I["PackInfo"][string]["Packs"][number], keyof PackItem>]: never; })[] & { [K_1 in Exclude<keyof I["PackInfo"][string]["Packs"], keyof {
                    Amount?: number | undefined;
                    Price?: number | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["PackInfo"][string], "Packs">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["PackInfo"], string | number>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof SetITOPricesContract>]: never; }>(object: I): SetITOPricesContract;
};
interface SetITOPricesContract_PackInfoEntry {
    key: string;
    value?: PackInfo;
}
declare const SetITOPricesContract_PackInfoEntry: {
    encode(message: SetITOPricesContract_PackInfoEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetITOPricesContract_PackInfoEntry;
    fromJSON(object: any): SetITOPricesContract_PackInfoEntry;
    toJSON(message: SetITOPricesContract_PackInfoEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: {
            Packs?: {
                Amount?: number | undefined;
                Price?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            Packs?: {
                Amount?: number | undefined;
                Price?: number | undefined;
            }[] | undefined;
        } & {
            Packs?: ({
                Amount?: number | undefined;
                Price?: number | undefined;
            }[] & ({
                Amount?: number | undefined;
                Price?: number | undefined;
            } & {
                Amount?: number | undefined;
                Price?: number | undefined;
            } & { [K in Exclude<keyof I["value"]["Packs"][number], keyof PackItem>]: never; })[] & { [K_1 in Exclude<keyof I["value"]["Packs"], keyof {
                Amount?: number | undefined;
                Price?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["value"], "Packs">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SetITOPricesContract_PackInfoEntry>]: never; }>(object: I): SetITOPricesContract_PackInfoEntry;
};
/** PackInfo holds the pack list structure for the ITO contract */
interface PackInfo {
    Packs?: PackItem[];
}
declare const PackInfo: {
    encode(message: PackInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PackInfo;
    fromJSON(object: any): PackInfo;
    toJSON(message: PackInfo): unknown;
    fromPartial<I extends {
        Packs?: {
            Amount?: number | undefined;
            Price?: number | undefined;
        }[] | undefined;
    } & {
        Packs?: ({
            Amount?: number | undefined;
            Price?: number | undefined;
        }[] & ({
            Amount?: number | undefined;
            Price?: number | undefined;
        } & {
            Amount?: number | undefined;
            Price?: number | undefined;
        } & { [K in Exclude<keyof I["Packs"][number], keyof PackItem>]: never; })[] & { [K_1 in Exclude<keyof I["Packs"], keyof {
            Amount?: number | undefined;
            Price?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "Packs">]: never; }>(object: I): PackInfo;
};
/** PackItem hold the pack structure for the ITO contract */
interface PackItem {
    Amount?: number;
    Price?: number;
}
declare const PackItem: {
    encode(message: PackItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PackItem;
    fromJSON(object: any): PackItem;
    toJSON(message: PackItem): unknown;
    fromPartial<I extends {
        Amount?: number | undefined;
        Price?: number | undefined;
    } & {
        Amount?: number | undefined;
        Price?: number | undefined;
    } & { [K in Exclude<keyof I, keyof PackItem>]: never; }>(object: I): PackItem;
};
/** BuyContract holds the data for a buy transaction */
interface BuyContract {
    BuyType?: BuyContract_EnumBuyType;
    ID?: Uint8Array;
    CurrencyID?: Uint8Array;
    Amount?: number;
}
declare const BuyContract: {
    encode(message: BuyContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BuyContract;
    fromJSON(object: any): BuyContract;
    toJSON(message: BuyContract): unknown;
    fromPartial<I extends {
        BuyType?: BuyContract_EnumBuyType | undefined;
        ID?: Uint8Array | undefined;
        CurrencyID?: Uint8Array | undefined;
        Amount?: number | undefined;
    } & {
        BuyType?: BuyContract_EnumBuyType | undefined;
        ID?: Uint8Array | undefined;
        CurrencyID?: Uint8Array | undefined;
        Amount?: number | undefined;
    } & { [K in Exclude<keyof I, keyof BuyContract>]: never; }>(object: I): BuyContract;
};
/** SellContract holds the data for a sell transaction */
interface SellContract {
    MarketType?: SellContract_EnumMarketType;
    MarketplaceID?: Uint8Array;
    AssetID?: Uint8Array;
    CurrencyID?: Uint8Array;
    Price?: number;
    ReservePrice?: number;
    EndTime?: number;
}
declare const SellContract: {
    encode(message: SellContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SellContract;
    fromJSON(object: any): SellContract;
    toJSON(message: SellContract): unknown;
    fromPartial<I extends {
        MarketType?: SellContract_EnumMarketType | undefined;
        MarketplaceID?: Uint8Array | undefined;
        AssetID?: Uint8Array | undefined;
        CurrencyID?: Uint8Array | undefined;
        Price?: number | undefined;
        ReservePrice?: number | undefined;
        EndTime?: number | undefined;
    } & {
        MarketType?: SellContract_EnumMarketType | undefined;
        MarketplaceID?: Uint8Array | undefined;
        AssetID?: Uint8Array | undefined;
        CurrencyID?: Uint8Array | undefined;
        Price?: number | undefined;
        ReservePrice?: number | undefined;
        EndTime?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SellContract>]: never; }>(object: I): SellContract;
};
/** CancelMarketOrderContract holds the data for a cancel market transaction */
interface CancelMarketOrderContract {
    OrderID?: Uint8Array;
}
declare const CancelMarketOrderContract: {
    encode(message: CancelMarketOrderContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelMarketOrderContract;
    fromJSON(object: any): CancelMarketOrderContract;
    toJSON(message: CancelMarketOrderContract): unknown;
    fromPartial<I extends {
        OrderID?: Uint8Array | undefined;
    } & {
        OrderID?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "OrderID">]: never; }>(object: I): CancelMarketOrderContract;
};
/** CreateMarketplaceContract holds the data for a create marketplace transaction */
interface CreateMarketplaceContract {
    Name?: Uint8Array;
    ReferralAddress?: Uint8Array;
    ReferralPercentage?: number;
}
declare const CreateMarketplaceContract: {
    encode(message: CreateMarketplaceContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateMarketplaceContract;
    fromJSON(object: any): CreateMarketplaceContract;
    toJSON(message: CreateMarketplaceContract): unknown;
    fromPartial<I extends {
        Name?: Uint8Array | undefined;
        ReferralAddress?: Uint8Array | undefined;
        ReferralPercentage?: number | undefined;
    } & {
        Name?: Uint8Array | undefined;
        ReferralAddress?: Uint8Array | undefined;
        ReferralPercentage?: number | undefined;
    } & { [K in Exclude<keyof I, keyof CreateMarketplaceContract>]: never; }>(object: I): CreateMarketplaceContract;
};
/** ConfigMarketplaceContract holds the data for a config marketplace transaction */
interface ConfigMarketplaceContract {
    MarketplaceID?: Uint8Array;
    Name?: Uint8Array;
    ReferralAddress?: Uint8Array;
    ReferralPercentage?: number;
}
declare const ConfigMarketplaceContract: {
    encode(message: ConfigMarketplaceContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigMarketplaceContract;
    fromJSON(object: any): ConfigMarketplaceContract;
    toJSON(message: ConfigMarketplaceContract): unknown;
    fromPartial<I extends {
        MarketplaceID?: Uint8Array | undefined;
        Name?: Uint8Array | undefined;
        ReferralAddress?: Uint8Array | undefined;
        ReferralPercentage?: number | undefined;
    } & {
        MarketplaceID?: Uint8Array | undefined;
        Name?: Uint8Array | undefined;
        ReferralAddress?: Uint8Array | undefined;
        ReferralPercentage?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ConfigMarketplaceContract>]: never; }>(object: I): ConfigMarketplaceContract;
};
/** TODO: Reuse from account */
interface AccKey {
    address?: Uint8Array;
    weight?: number;
}
declare const AccKey: {
    encode(message: AccKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccKey;
    fromJSON(object: any): AccKey;
    toJSON(message: AccKey): unknown;
    fromPartial<I extends {
        address?: Uint8Array | undefined;
        weight?: number | undefined;
    } & {
        address?: Uint8Array | undefined;
        weight?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AccKey>]: never; }>(object: I): AccKey;
};
interface AccPermission {
    Type?: AccPermission_AccPermissionType;
    PermissionName?: string;
    Threshold?: number;
    Operations?: Uint8Array;
    Signers?: AccKey[];
}
declare const AccPermission: {
    encode(message: AccPermission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccPermission;
    fromJSON(object: any): AccPermission;
    toJSON(message: AccPermission): unknown;
    fromPartial<I extends {
        Type?: AccPermission_AccPermissionType | undefined;
        PermissionName?: string | undefined;
        Threshold?: number | undefined;
        Operations?: Uint8Array | undefined;
        Signers?: {
            address?: Uint8Array | undefined;
            weight?: number | undefined;
        }[] | undefined;
    } & {
        Type?: AccPermission_AccPermissionType | undefined;
        PermissionName?: string | undefined;
        Threshold?: number | undefined;
        Operations?: Uint8Array | undefined;
        Signers?: ({
            address?: Uint8Array | undefined;
            weight?: number | undefined;
        }[] & ({
            address?: Uint8Array | undefined;
            weight?: number | undefined;
        } & {
            address?: Uint8Array | undefined;
            weight?: number | undefined;
        } & { [K in Exclude<keyof I["Signers"][number], keyof AccKey>]: never; })[] & { [K_1 in Exclude<keyof I["Signers"], keyof {
            address?: Uint8Array | undefined;
            weight?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof AccPermission>]: never; }>(object: I): AccPermission;
};
/** UpdateAccountPermissionContract holds the data for update account permission transaction */
interface UpdateAccountPermissionContract {
    Permissions?: AccPermission[];
}
declare const UpdateAccountPermissionContract: {
    encode(message: UpdateAccountPermissionContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateAccountPermissionContract;
    fromJSON(object: any): UpdateAccountPermissionContract;
    toJSON(message: UpdateAccountPermissionContract): unknown;
    fromPartial<I extends {
        Permissions?: {
            Type?: AccPermission_AccPermissionType | undefined;
            PermissionName?: string | undefined;
            Threshold?: number | undefined;
            Operations?: Uint8Array | undefined;
            Signers?: {
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        Permissions?: ({
            Type?: AccPermission_AccPermissionType | undefined;
            PermissionName?: string | undefined;
            Threshold?: number | undefined;
            Operations?: Uint8Array | undefined;
            Signers?: {
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            }[] | undefined;
        }[] & ({
            Type?: AccPermission_AccPermissionType | undefined;
            PermissionName?: string | undefined;
            Threshold?: number | undefined;
            Operations?: Uint8Array | undefined;
            Signers?: {
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            }[] | undefined;
        } & {
            Type?: AccPermission_AccPermissionType | undefined;
            PermissionName?: string | undefined;
            Threshold?: number | undefined;
            Operations?: Uint8Array | undefined;
            Signers?: ({
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            }[] & ({
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            } & {
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            } & { [K in Exclude<keyof I["Permissions"][number]["Signers"][number], keyof AccKey>]: never; })[] & { [K_1 in Exclude<keyof I["Permissions"][number]["Signers"], keyof {
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["Permissions"][number], keyof AccPermission>]: never; })[] & { [K_3 in Exclude<keyof I["Permissions"], keyof {
            Type?: AccPermission_AccPermissionType | undefined;
            PermissionName?: string | undefined;
            Threshold?: number | undefined;
            Operations?: Uint8Array | undefined;
            Signers?: {
                address?: Uint8Array | undefined;
                weight?: number | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "Permissions">]: never; }>(object: I): UpdateAccountPermissionContract;
};
declare type ProtoMetaMessageOptions$1 = {
    options?: {
        [key: string]: any;
    };
    fields?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    oneof?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    nested?: {
        [key: string]: ProtoMetaMessageOptions$1;
    };
};
interface ProtoMetadata$1 {
    fileDescriptor: FileDescriptorProto;
    references: {
        [key: string]: any;
    };
    dependencies?: ProtoMetadata$1[];
    options?: {
        options?: {
            [key: string]: any;
        };
        services?: {
            [key: string]: {
                options?: {
                    [key: string]: any;
                };
                methods?: {
                    [key: string]: {
                        [key: string]: any;
                    };
                };
            };
        };
        messages?: {
            [key: string]: ProtoMetaMessageOptions$1;
        };
        enums?: {
            [key: string]: {
                options?: {
                    [key: string]: any;
                };
                values?: {
                    [key: string]: {
                        [key: string]: any;
                    };
                };
            };
        };
    };
}
declare const protoMetadata$1: ProtoMetadata$1;
declare type Builtin$1 = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial$1<T> = T extends Builtin$1 ? T : T extends Array<infer U> ? Array<DeepPartial$1<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial$1<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial$1<T[K]>;
} : Partial<T>;
declare type KeysOfUnion$1<T> = T extends T ? keyof T : never;
declare type Exact$1<P, I extends P> = P extends Builtin$1 ? P : P & {
    [K in keyof P]: Exact$1<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion$1<P>>]: never;
};

declare const contracts_d_TransferContract: typeof TransferContract;
declare const contracts_d_CreateAssetContract: typeof CreateAssetContract;
type contracts_d_CreateAssetContract_EnumAssetType = CreateAssetContract_EnumAssetType;
declare const contracts_d_CreateAssetContract_EnumAssetType: typeof CreateAssetContract_EnumAssetType;
declare const contracts_d_createAssetContract_EnumAssetTypeFromJSON: typeof createAssetContract_EnumAssetTypeFromJSON;
declare const contracts_d_createAssetContract_EnumAssetTypeToJSON: typeof createAssetContract_EnumAssetTypeToJSON;
declare const contracts_d_CreateAssetContract_URIsEntry: typeof CreateAssetContract_URIsEntry;
declare const contracts_d_PropertiesInfo: typeof PropertiesInfo;
declare const contracts_d_AttributesInfo: typeof AttributesInfo;
declare const contracts_d_StakingInfo: typeof StakingInfo;
type contracts_d_StakingInfo_InterestType = StakingInfo_InterestType;
declare const contracts_d_StakingInfo_InterestType: typeof StakingInfo_InterestType;
declare const contracts_d_stakingInfo_InterestTypeFromJSON: typeof stakingInfo_InterestTypeFromJSON;
declare const contracts_d_stakingInfo_InterestTypeToJSON: typeof stakingInfo_InterestTypeToJSON;
declare const contracts_d_RolesInfo: typeof RolesInfo;
declare const contracts_d_RoyaltiesInfo: typeof RoyaltiesInfo;
declare const contracts_d_RoyaltyInfo: typeof RoyaltyInfo;
declare const contracts_d_AssetTriggerContract: typeof AssetTriggerContract;
type contracts_d_AssetTriggerContract_EnumTriggerType = AssetTriggerContract_EnumTriggerType;
declare const contracts_d_AssetTriggerContract_EnumTriggerType: typeof AssetTriggerContract_EnumTriggerType;
declare const contracts_d_assetTriggerContract_EnumTriggerTypeFromJSON: typeof assetTriggerContract_EnumTriggerTypeFromJSON;
declare const contracts_d_assetTriggerContract_EnumTriggerTypeToJSON: typeof assetTriggerContract_EnumTriggerTypeToJSON;
declare const contracts_d_AssetTriggerContract_URIsEntry: typeof AssetTriggerContract_URIsEntry;
declare const contracts_d_ValidatorConfig: typeof ValidatorConfig;
declare const contracts_d_ValidatorConfig_URIsEntry: typeof ValidatorConfig_URIsEntry;
declare const contracts_d_CreateValidatorContract: typeof CreateValidatorContract;
declare const contracts_d_ValidatorConfigContract: typeof ValidatorConfigContract;
declare const contracts_d_FreezeContract: typeof FreezeContract;
declare const contracts_d_UnfreezeContract: typeof UnfreezeContract;
declare const contracts_d_DelegateContract: typeof DelegateContract;
declare const contracts_d_UndelegateContract: typeof UndelegateContract;
declare const contracts_d_WithdrawContract: typeof WithdrawContract;
declare const contracts_d_ClaimContract: typeof ClaimContract;
type contracts_d_ClaimContract_EnumClaimType = ClaimContract_EnumClaimType;
declare const contracts_d_ClaimContract_EnumClaimType: typeof ClaimContract_EnumClaimType;
declare const contracts_d_claimContract_EnumClaimTypeFromJSON: typeof claimContract_EnumClaimTypeFromJSON;
declare const contracts_d_claimContract_EnumClaimTypeToJSON: typeof claimContract_EnumClaimTypeToJSON;
declare const contracts_d_UnjailContract: typeof UnjailContract;
declare const contracts_d_SetAccountNameContract: typeof SetAccountNameContract;
declare const contracts_d_ProposalContract: typeof ProposalContract;
declare const contracts_d_ProposalContract_ParametersEntry: typeof ProposalContract_ParametersEntry;
declare const contracts_d_VoteContract: typeof VoteContract;
type contracts_d_VoteContract_EnumVoteType = VoteContract_EnumVoteType;
declare const contracts_d_VoteContract_EnumVoteType: typeof VoteContract_EnumVoteType;
declare const contracts_d_voteContract_EnumVoteTypeFromJSON: typeof voteContract_EnumVoteTypeFromJSON;
declare const contracts_d_voteContract_EnumVoteTypeToJSON: typeof voteContract_EnumVoteTypeToJSON;
declare const contracts_d_ConfigITOContract: typeof ConfigITOContract;
type contracts_d_ConfigITOContract_EnumITOStatus = ConfigITOContract_EnumITOStatus;
declare const contracts_d_ConfigITOContract_EnumITOStatus: typeof ConfigITOContract_EnumITOStatus;
declare const contracts_d_configITOContract_EnumITOStatusFromJSON: typeof configITOContract_EnumITOStatusFromJSON;
declare const contracts_d_configITOContract_EnumITOStatusToJSON: typeof configITOContract_EnumITOStatusToJSON;
declare const contracts_d_ConfigITOContract_PackInfoEntry: typeof ConfigITOContract_PackInfoEntry;
declare const contracts_d_SetITOPricesContract: typeof SetITOPricesContract;
declare const contracts_d_SetITOPricesContract_PackInfoEntry: typeof SetITOPricesContract_PackInfoEntry;
declare const contracts_d_PackInfo: typeof PackInfo;
declare const contracts_d_PackItem: typeof PackItem;
declare const contracts_d_BuyContract: typeof BuyContract;
type contracts_d_BuyContract_EnumBuyType = BuyContract_EnumBuyType;
declare const contracts_d_BuyContract_EnumBuyType: typeof BuyContract_EnumBuyType;
declare const contracts_d_buyContract_EnumBuyTypeFromJSON: typeof buyContract_EnumBuyTypeFromJSON;
declare const contracts_d_buyContract_EnumBuyTypeToJSON: typeof buyContract_EnumBuyTypeToJSON;
declare const contracts_d_SellContract: typeof SellContract;
type contracts_d_SellContract_EnumMarketType = SellContract_EnumMarketType;
declare const contracts_d_SellContract_EnumMarketType: typeof SellContract_EnumMarketType;
declare const contracts_d_sellContract_EnumMarketTypeFromJSON: typeof sellContract_EnumMarketTypeFromJSON;
declare const contracts_d_sellContract_EnumMarketTypeToJSON: typeof sellContract_EnumMarketTypeToJSON;
declare const contracts_d_CancelMarketOrderContract: typeof CancelMarketOrderContract;
declare const contracts_d_CreateMarketplaceContract: typeof CreateMarketplaceContract;
declare const contracts_d_ConfigMarketplaceContract: typeof ConfigMarketplaceContract;
declare const contracts_d_AccKey: typeof AccKey;
declare const contracts_d_AccPermission: typeof AccPermission;
type contracts_d_AccPermission_AccPermissionType = AccPermission_AccPermissionType;
declare const contracts_d_AccPermission_AccPermissionType: typeof AccPermission_AccPermissionType;
declare const contracts_d_accPermission_AccPermissionTypeFromJSON: typeof accPermission_AccPermissionTypeFromJSON;
declare const contracts_d_accPermission_AccPermissionTypeToJSON: typeof accPermission_AccPermissionTypeToJSON;
declare const contracts_d_UpdateAccountPermissionContract: typeof UpdateAccountPermissionContract;
declare namespace contracts_d {
  export {
    protobufPackage$1 as protobufPackage,
    contracts_d_TransferContract as TransferContract,
    contracts_d_CreateAssetContract as CreateAssetContract,
    contracts_d_CreateAssetContract_EnumAssetType as CreateAssetContract_EnumAssetType,
    contracts_d_createAssetContract_EnumAssetTypeFromJSON as createAssetContract_EnumAssetTypeFromJSON,
    contracts_d_createAssetContract_EnumAssetTypeToJSON as createAssetContract_EnumAssetTypeToJSON,
    contracts_d_CreateAssetContract_URIsEntry as CreateAssetContract_URIsEntry,
    contracts_d_PropertiesInfo as PropertiesInfo,
    contracts_d_AttributesInfo as AttributesInfo,
    contracts_d_StakingInfo as StakingInfo,
    contracts_d_StakingInfo_InterestType as StakingInfo_InterestType,
    contracts_d_stakingInfo_InterestTypeFromJSON as stakingInfo_InterestTypeFromJSON,
    contracts_d_stakingInfo_InterestTypeToJSON as stakingInfo_InterestTypeToJSON,
    contracts_d_RolesInfo as RolesInfo,
    contracts_d_RoyaltiesInfo as RoyaltiesInfo,
    contracts_d_RoyaltyInfo as RoyaltyInfo,
    contracts_d_AssetTriggerContract as AssetTriggerContract,
    contracts_d_AssetTriggerContract_EnumTriggerType as AssetTriggerContract_EnumTriggerType,
    contracts_d_assetTriggerContract_EnumTriggerTypeFromJSON as assetTriggerContract_EnumTriggerTypeFromJSON,
    contracts_d_assetTriggerContract_EnumTriggerTypeToJSON as assetTriggerContract_EnumTriggerTypeToJSON,
    contracts_d_AssetTriggerContract_URIsEntry as AssetTriggerContract_URIsEntry,
    contracts_d_ValidatorConfig as ValidatorConfig,
    contracts_d_ValidatorConfig_URIsEntry as ValidatorConfig_URIsEntry,
    contracts_d_CreateValidatorContract as CreateValidatorContract,
    contracts_d_ValidatorConfigContract as ValidatorConfigContract,
    contracts_d_FreezeContract as FreezeContract,
    contracts_d_UnfreezeContract as UnfreezeContract,
    contracts_d_DelegateContract as DelegateContract,
    contracts_d_UndelegateContract as UndelegateContract,
    contracts_d_WithdrawContract as WithdrawContract,
    contracts_d_ClaimContract as ClaimContract,
    contracts_d_ClaimContract_EnumClaimType as ClaimContract_EnumClaimType,
    contracts_d_claimContract_EnumClaimTypeFromJSON as claimContract_EnumClaimTypeFromJSON,
    contracts_d_claimContract_EnumClaimTypeToJSON as claimContract_EnumClaimTypeToJSON,
    contracts_d_UnjailContract as UnjailContract,
    contracts_d_SetAccountNameContract as SetAccountNameContract,
    contracts_d_ProposalContract as ProposalContract,
    contracts_d_ProposalContract_ParametersEntry as ProposalContract_ParametersEntry,
    contracts_d_VoteContract as VoteContract,
    contracts_d_VoteContract_EnumVoteType as VoteContract_EnumVoteType,
    contracts_d_voteContract_EnumVoteTypeFromJSON as voteContract_EnumVoteTypeFromJSON,
    contracts_d_voteContract_EnumVoteTypeToJSON as voteContract_EnumVoteTypeToJSON,
    contracts_d_ConfigITOContract as ConfigITOContract,
    contracts_d_ConfigITOContract_EnumITOStatus as ConfigITOContract_EnumITOStatus,
    contracts_d_configITOContract_EnumITOStatusFromJSON as configITOContract_EnumITOStatusFromJSON,
    contracts_d_configITOContract_EnumITOStatusToJSON as configITOContract_EnumITOStatusToJSON,
    contracts_d_ConfigITOContract_PackInfoEntry as ConfigITOContract_PackInfoEntry,
    contracts_d_SetITOPricesContract as SetITOPricesContract,
    contracts_d_SetITOPricesContract_PackInfoEntry as SetITOPricesContract_PackInfoEntry,
    contracts_d_PackInfo as PackInfo,
    contracts_d_PackItem as PackItem,
    contracts_d_BuyContract as BuyContract,
    contracts_d_BuyContract_EnumBuyType as BuyContract_EnumBuyType,
    contracts_d_buyContract_EnumBuyTypeFromJSON as buyContract_EnumBuyTypeFromJSON,
    contracts_d_buyContract_EnumBuyTypeToJSON as buyContract_EnumBuyTypeToJSON,
    contracts_d_SellContract as SellContract,
    contracts_d_SellContract_EnumMarketType as SellContract_EnumMarketType,
    contracts_d_sellContract_EnumMarketTypeFromJSON as sellContract_EnumMarketTypeFromJSON,
    contracts_d_sellContract_EnumMarketTypeToJSON as sellContract_EnumMarketTypeToJSON,
    contracts_d_CancelMarketOrderContract as CancelMarketOrderContract,
    contracts_d_CreateMarketplaceContract as CreateMarketplaceContract,
    contracts_d_ConfigMarketplaceContract as ConfigMarketplaceContract,
    contracts_d_AccKey as AccKey,
    contracts_d_AccPermission as AccPermission,
    contracts_d_AccPermission_AccPermissionType as AccPermission_AccPermissionType,
    contracts_d_accPermission_AccPermissionTypeFromJSON as accPermission_AccPermissionTypeFromJSON,
    contracts_d_accPermission_AccPermissionTypeToJSON as accPermission_AccPermissionTypeToJSON,
    contracts_d_UpdateAccountPermissionContract as UpdateAccountPermissionContract,
    ProtoMetadata$1 as ProtoMetadata,
    protoMetadata$1 as protoMetadata,
    DeepPartial$1 as DeepPartial,
    Exact$1 as Exact,
  };
}

declare const protobufPackage = "google.protobuf";
/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *
 *  Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 *  Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := anypb.New(foo)
 *      if err != nil {
 *        ...
 *      }
 *      ...
 *      foo := &pb.Foo{}
 *      if err := any.UnmarshalTo(foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */
interface Any {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    type_url?: string;
    /** Must be a valid serialized protocol buffer of the above specified type. */
    value?: Uint8Array;
}
declare const Any: {
    encode(message: Any, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Any;
    fromJSON(object: any): Any;
    toJSON(message: Any): unknown;
    fromPartial<I extends {
        type_url?: string | undefined;
        value?: Uint8Array | undefined;
    } & {
        type_url?: string | undefined;
        value?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof Any>]: never; }>(object: I): Any;
};
declare type ProtoMetaMessageOptions = {
    options?: {
        [key: string]: any;
    };
    fields?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    oneof?: {
        [key: string]: {
            [key: string]: any;
        };
    };
    nested?: {
        [key: string]: ProtoMetaMessageOptions;
    };
};
interface ProtoMetadata {
    fileDescriptor: FileDescriptorProto;
    references: {
        [key: string]: any;
    };
    dependencies?: ProtoMetadata[];
    options?: {
        options?: {
            [key: string]: any;
        };
        services?: {
            [key: string]: {
                options?: {
                    [key: string]: any;
                };
                methods?: {
                    [key: string]: {
                        [key: string]: any;
                    };
                };
            };
        };
        messages?: {
            [key: string]: ProtoMetaMessageOptions;
        };
        enums?: {
            [key: string]: {
                options?: {
                    [key: string]: any;
                };
                values?: {
                    [key: string]: {
                        [key: string]: any;
                    };
                };
            };
        };
    };
}
declare const protoMetadata: ProtoMetadata;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};

declare const any_d_protobufPackage: typeof protobufPackage;
declare const any_d_Any: typeof Any;
type any_d_ProtoMetadata = ProtoMetadata;
declare const any_d_protoMetadata: typeof protoMetadata;
type any_d_DeepPartial<T> = DeepPartial<T>;
type any_d_Exact<P, I extends P> = Exact<P, I>;
declare namespace any_d {
  export {
    any_d_protobufPackage as protobufPackage,
    any_d_Any as Any,
    any_d_ProtoMetadata as ProtoMetadata,
    any_d_protoMetadata as protoMetadata,
    any_d_DeepPartial as DeepPartial,
    any_d_Exact as Exact,
  };
}

declare enum TXContract_ContractType {
    TransferContractType = 0,
    CreateAssetContractType = 1,
    CreateValidatorContractType = 2,
    ValidatorConfigContractType = 3,
    FreezeContractType = 4,
    UnfreezeContractType = 5,
    DelegateContractType = 6,
    UndelegateContractType = 7,
    WithdrawContractType = 8,
    ClaimContractType = 9,
    UnjailContractType = 10,
    AssetTriggerContractType = 11,
    SetAccountNameContractType = 12,
    ProposalContractType = 13,
    VoteContractType = 14,
    ConfigITOContractType = 15,
    SetITOPricesContractType = 16,
    BuyContractType = 17,
    SellContractType = 18,
    CancelMarketOrderContractType = 19,
    CreateMarketplaceContractType = 20,
    ConfigMarketplaceContractType = 21,
    UpdateAccountPermissionContractType = 22,
    UNRECOGNIZED = -1
}
declare enum Transaction_TXResult {
    SUCCESS = 0,
    FAILED = 1,
    UNRECOGNIZED = -1
}
declare enum Transaction_TXResultCode {
    Ok = 0,
    OutOfFunds = 1,
    AccountError = 2,
    AssetError = 3,
    ContractInvalid = 4,
    ContractNotFound = 5,
    FeeInvalid = 6,
    ParameterInvalid = 7,
    APRInvalid = 8,
    AssetIDInvalid = 9,
    AssetTypeInvalid = 10,
    AssetCantBeMinted = 11,
    AssetCantBeBurned = 12,
    AssetCantBePaused = 13,
    AssetCantBeDelegated = 14,
    AssetOwnerCantBeChanged = 15,
    AccountNotOwner = 16,
    CommissionTooHigh = 17,
    DelegationAmountInvalid = 18,
    ProposalNotActive = 19,
    ValueInvalid = 20,
    AmountInvalid = 21,
    BucketIDInvalid = 22,
    KeyConflict = 23,
    MaxDelegationAmount = 24,
    InvalidPeerKey = 25,
    MinKFIStakedUnreached = 26,
    MaxSupplyExeeced = 27,
    SaveAccountError = 28,
    LoadAccountError = 29,
    SameAccountError = 30,
    AssetPaused = 31,
    DeletegateError = 32,
    WithdrawNotAvailable = 33,
    ErrOverflow = 34,
    SetStakingErr = 35,
    SetMarketOrderErr = 36,
    BalanceError = 37,
    KAPPError = 38,
    UnfreezeError = 39,
    UndeletegateError = 40,
    WithdrawError = 41,
    ClaimError = 42,
    BucketsExceded = 43,
    AssetCantBeWiped = 44,
    AssetCantAddRoles = 45,
    FreezeError = 46,
    Fail = 99,
    UNRECOGNIZED = -1
}
/** TXContract available */
interface TXContract {
    Type?: TXContract_ContractType;
    Parameter?: Any;
}
declare const TXContract: {
    encode(message: TXContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TXContract;
    fromJSON(object: any): TXContract;
    toJSON(message: TXContract): unknown;
    fromPartial<I extends {
        Type?: TXContract_ContractType | undefined;
        Parameter?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        Type?: TXContract_ContractType | undefined;
        Parameter?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["Parameter"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof TXContract>]: never; }>(object: I): TXContract;
};
/** Transaction holds all the data needed for a value transfer */
interface Transaction$1 {
    RawData?: Transaction_Raw;
    Signature?: Uint8Array[];
    Result?: Transaction_TXResult;
    ResultCode?: Transaction_TXResultCode;
    Receipts?: Transaction_Receipt[];
    Block?: number;
}
declare const Transaction$1: {
    encode(message: Transaction$1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Transaction$1;
    fromJSON(object: any): Transaction$1;
    toJSON(message: Transaction$1): unknown;
    fromPartial<I extends {
        RawData?: {
            Nonce?: number | undefined;
            Sender?: Uint8Array | undefined;
            Contract?: {
                Type?: TXContract_ContractType | undefined;
                Parameter?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            PermissionID?: number | undefined;
            Data?: Uint8Array[] | undefined;
            KAppFee?: number | undefined;
            BandwidthFee?: number | undefined;
            Version?: number | undefined;
            ChainID?: Uint8Array | undefined;
        } | undefined;
        Signature?: Uint8Array[] | undefined;
        Result?: Transaction_TXResult | undefined;
        ResultCode?: Transaction_TXResultCode | undefined;
        Receipts?: {
            Data?: Uint8Array[] | undefined;
        }[] | undefined;
        Block?: number | undefined;
    } & {
        RawData?: ({
            Nonce?: number | undefined;
            Sender?: Uint8Array | undefined;
            Contract?: {
                Type?: TXContract_ContractType | undefined;
                Parameter?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            PermissionID?: number | undefined;
            Data?: Uint8Array[] | undefined;
            KAppFee?: number | undefined;
            BandwidthFee?: number | undefined;
            Version?: number | undefined;
            ChainID?: Uint8Array | undefined;
        } & {
            Nonce?: number | undefined;
            Sender?: Uint8Array | undefined;
            Contract?: ({
                Type?: TXContract_ContractType | undefined;
                Parameter?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                Type?: TXContract_ContractType | undefined;
                Parameter?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                Type?: TXContract_ContractType | undefined;
                Parameter?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["RawData"]["Contract"][number]["Parameter"], keyof Any>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["RawData"]["Contract"][number], keyof TXContract>]: never; })[] & { [K_2 in Exclude<keyof I["RawData"]["Contract"], keyof {
                Type?: TXContract_ContractType | undefined;
                Parameter?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            PermissionID?: number | undefined;
            Data?: (Uint8Array[] & Uint8Array[] & { [K_3 in Exclude<keyof I["RawData"]["Data"], keyof Uint8Array[]>]: never; }) | undefined;
            KAppFee?: number | undefined;
            BandwidthFee?: number | undefined;
            Version?: number | undefined;
            ChainID?: Uint8Array | undefined;
        } & { [K_4 in Exclude<keyof I["RawData"], keyof Transaction_Raw>]: never; }) | undefined;
        Signature?: (Uint8Array[] & Uint8Array[] & { [K_5 in Exclude<keyof I["Signature"], keyof Uint8Array[]>]: never; }) | undefined;
        Result?: Transaction_TXResult | undefined;
        ResultCode?: Transaction_TXResultCode | undefined;
        Receipts?: ({
            Data?: Uint8Array[] | undefined;
        }[] & ({
            Data?: Uint8Array[] | undefined;
        } & {
            Data?: (Uint8Array[] & Uint8Array[] & { [K_6 in Exclude<keyof I["Receipts"][number]["Data"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["Receipts"][number], "Data">]: never; })[] & { [K_8 in Exclude<keyof I["Receipts"], keyof {
            Data?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
        Block?: number | undefined;
    } & { [K_9 in Exclude<keyof I, keyof Transaction$1>]: never; }>(object: I): Transaction$1;
};
interface Transaction_Raw {
    Nonce?: number;
    Sender?: Uint8Array;
    Contract?: TXContract[];
    PermissionID?: number;
    Data?: Uint8Array[];
    KAppFee?: number;
    BandwidthFee?: number;
    Version?: number;
    ChainID?: Uint8Array;
}
declare const Transaction_Raw: {
    encode(message: Transaction_Raw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Transaction_Raw;
    fromJSON(object: any): Transaction_Raw;
    toJSON(message: Transaction_Raw): unknown;
    fromPartial<I extends {
        Nonce?: number | undefined;
        Sender?: Uint8Array | undefined;
        Contract?: {
            Type?: TXContract_ContractType | undefined;
            Parameter?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        PermissionID?: number | undefined;
        Data?: Uint8Array[] | undefined;
        KAppFee?: number | undefined;
        BandwidthFee?: number | undefined;
        Version?: number | undefined;
        ChainID?: Uint8Array | undefined;
    } & {
        Nonce?: number | undefined;
        Sender?: Uint8Array | undefined;
        Contract?: ({
            Type?: TXContract_ContractType | undefined;
            Parameter?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            Type?: TXContract_ContractType | undefined;
            Parameter?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            Type?: TXContract_ContractType | undefined;
            Parameter?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["Contract"][number]["Parameter"], keyof Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["Contract"][number], keyof TXContract>]: never; })[] & { [K_2 in Exclude<keyof I["Contract"], keyof {
            Type?: TXContract_ContractType | undefined;
            Parameter?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        PermissionID?: number | undefined;
        Data?: (Uint8Array[] & Uint8Array[] & { [K_3 in Exclude<keyof I["Data"], keyof Uint8Array[]>]: never; }) | undefined;
        KAppFee?: number | undefined;
        BandwidthFee?: number | undefined;
        Version?: number | undefined;
        ChainID?: Uint8Array | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Transaction_Raw>]: never; }>(object: I): Transaction_Raw;
};
interface Transaction_Receipt {
    Data?: Uint8Array[];
}
declare const Transaction_Receipt: {
    encode(message: Transaction_Receipt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Transaction_Receipt;
    fromJSON(object: any): Transaction_Receipt;
    toJSON(message: Transaction_Receipt): unknown;
    fromPartial<I extends {
        Data?: Uint8Array[] | undefined;
    } & {
        Data?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["Data"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "Data">]: never; }>(object: I): Transaction_Receipt;
};

declare class Transaction {
    data: Transaction$1;
    constructor(data?: any[] | {
        Nonce?: number;
        Sender?: Uint8Array;
        Contract?: TXContract[];
        PermissionID?: number;
        Data?: Uint8Array[];
        KAppFee?: number;
        BandwidthFee?: number;
        Version?: number;
        ChainID?: Uint8Array;
    });
    addContract: (type: TXContract_ContractType, contract: any) => Promise<void>;
    signMessage: (message: string, privateKey: string) => Promise<Uint8Array>;
    computeHash: () => string;
    sign: (privateKey: string) => Promise<Boolean>;
    hex: () => string;
    toJSON: () => string;
    decode: () => string;
    toBroadcast: () => any;
}

export { Account, contracts_d as Contracts, IAccountResponse, TXContract_ContractType, Transaction, any_d as proto, utils, web };
