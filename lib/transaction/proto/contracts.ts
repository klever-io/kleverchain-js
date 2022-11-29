/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";

export const protobufPackage = "proto";

/** TXContract available */
export interface TransferContract {
  ToAddress?: Uint8Array;
  AssetID?: Uint8Array;
  Amount?: number;
}

/** CreateAssetContract holds the data for a Klever digital asset */
export interface CreateAssetContract {
  Type?: CreateAssetContract_EnumAssetType;
  Name?: Uint8Array;
  Ticker?: Uint8Array;
  OwnerAddress?: Uint8Array;
  Logo?: string;
  URIs?: { [key: string]: string };
  Precision?: number;
  InitialSupply?: number;
  MaxSupply?: number;
  Royalties?: RoyaltiesInfo;
  Properties?: PropertiesInfo;
  Attributes?: AttributesInfo;
  Staking?: StakingInfo;
  Roles?: RolesInfo[];
}

export enum CreateAssetContract_EnumAssetType {
  Fungible = 0,
  NonFungible = 1,
  UNRECOGNIZED = -1,
}

export function createAssetContract_EnumAssetTypeFromJSON(object: any): CreateAssetContract_EnumAssetType {
  switch (object) {
    case 0:
    case "Fungible":
      return CreateAssetContract_EnumAssetType.Fungible;
    case 1:
    case "NonFungible":
      return CreateAssetContract_EnumAssetType.NonFungible;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CreateAssetContract_EnumAssetType.UNRECOGNIZED;
  }
}

export function createAssetContract_EnumAssetTypeToJSON(object: CreateAssetContract_EnumAssetType): number {
  switch (object) {
    case CreateAssetContract_EnumAssetType.Fungible:
      return 0;
    case CreateAssetContract_EnumAssetType.NonFungible:
      return 1;
    case CreateAssetContract_EnumAssetType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CreateAssetContract_URIsEntry {
  key: string;
  value: string;
}

/** PropertiesInfo hold the properties structure for the KDA asset */
export interface PropertiesInfo {
  CanFreeze?: boolean;
  CanWipe?: boolean;
  CanPause?: boolean;
  CanMint?: boolean;
  CanBurn?: boolean;
  CanChangeOwner?: boolean;
  CanAddRoles?: boolean;
}

/** AttributesInfo hold the attributes structure for the KDA asset */
export interface AttributesInfo {
  IsPaused?: boolean;
  IsNFTMintStopped?: boolean;
}

/** StakingInfo hold the staking structure for the KDA asset */
export interface StakingInfo {
  Type?: StakingInfo_InterestType;
  APR?: number;
  MinEpochsToClaim?: number;
  MinEpochsToUnstake?: number;
  MinEpochsToWithdraw?: number;
}

export enum StakingInfo_InterestType {
  APRI = 0,
  FPRI = 1,
  UNRECOGNIZED = -1,
}

export function stakingInfo_InterestTypeFromJSON(object: any): StakingInfo_InterestType {
  switch (object) {
    case 0:
    case "APRI":
      return StakingInfo_InterestType.APRI;
    case 1:
    case "FPRI":
      return StakingInfo_InterestType.FPRI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakingInfo_InterestType.UNRECOGNIZED;
  }
}

export function stakingInfo_InterestTypeToJSON(object: StakingInfo_InterestType): number {
  switch (object) {
    case StakingInfo_InterestType.APRI:
      return 0;
    case StakingInfo_InterestType.FPRI:
      return 1;
    case StakingInfo_InterestType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** RolesInfo holds the roles for a given asset and the given address */
export interface RolesInfo {
  Address?: Uint8Array;
  HasRoleMint?: boolean;
  HasRoleSetITOPrices?: boolean;
}

/** RoyaltiesInfo holds the royalties for a given asset */
export interface RoyaltiesInfo {
  Address?: Uint8Array;
  TransferPercentage?: RoyaltyInfo[];
  TransferFixed?: number;
  MarketPercentage?: number;
  MarketFixed?: number;
}

/** RoyaltyInfo holds the royalty threshold */
export interface RoyaltyInfo {
  Amount?: number;
  Percentage?: number;
}

/** AssetTriggerContract triggers assets functions */
export interface AssetTriggerContract {
  TriggerType?: AssetTriggerContract_EnumTriggerType;
  AssetID?: Uint8Array;
  ToAddress?: Uint8Array;
  Amount?: number;
  MIME?: Uint8Array;
  Logo?: string;
  URIs?: { [key: string]: string };
  Role?: RolesInfo;
  Staking?: StakingInfo;
}

export enum AssetTriggerContract_EnumTriggerType {
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
  UNRECOGNIZED = -1,
}

export function assetTriggerContract_EnumTriggerTypeFromJSON(object: any): AssetTriggerContract_EnumTriggerType {
  switch (object) {
    case 0:
    case "Mint":
      return AssetTriggerContract_EnumTriggerType.Mint;
    case 1:
    case "Burn":
      return AssetTriggerContract_EnumTriggerType.Burn;
    case 2:
    case "Wipe":
      return AssetTriggerContract_EnumTriggerType.Wipe;
    case 3:
    case "Pause":
      return AssetTriggerContract_EnumTriggerType.Pause;
    case 4:
    case "Resume":
      return AssetTriggerContract_EnumTriggerType.Resume;
    case 5:
    case "ChangeOwner":
      return AssetTriggerContract_EnumTriggerType.ChangeOwner;
    case 6:
    case "AddRole":
      return AssetTriggerContract_EnumTriggerType.AddRole;
    case 7:
    case "RemoveRole":
      return AssetTriggerContract_EnumTriggerType.RemoveRole;
    case 8:
    case "UpdateMetadata":
      return AssetTriggerContract_EnumTriggerType.UpdateMetadata;
    case 9:
    case "StopNFTMint":
      return AssetTriggerContract_EnumTriggerType.StopNFTMint;
    case 10:
    case "UpdateLogo":
      return AssetTriggerContract_EnumTriggerType.UpdateLogo;
    case 11:
    case "UpdateURIs":
      return AssetTriggerContract_EnumTriggerType.UpdateURIs;
    case 12:
    case "ChangeRoyaltiesReceiver":
      return AssetTriggerContract_EnumTriggerType.ChangeRoyaltiesReceiver;
    case 13:
    case "UpdateStaking":
      return AssetTriggerContract_EnumTriggerType.UpdateStaking;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetTriggerContract_EnumTriggerType.UNRECOGNIZED;
  }
}

export function assetTriggerContract_EnumTriggerTypeToJSON(object: AssetTriggerContract_EnumTriggerType): number {
  switch (object) {
    case AssetTriggerContract_EnumTriggerType.Mint:
      return 0;
    case AssetTriggerContract_EnumTriggerType.Burn:
      return 1;
    case AssetTriggerContract_EnumTriggerType.Wipe:
      return 2;
    case AssetTriggerContract_EnumTriggerType.Pause:
      return 3;
    case AssetTriggerContract_EnumTriggerType.Resume:
      return 4;
    case AssetTriggerContract_EnumTriggerType.ChangeOwner:
      return 5;
    case AssetTriggerContract_EnumTriggerType.AddRole:
      return 6;
    case AssetTriggerContract_EnumTriggerType.RemoveRole:
      return 7;
    case AssetTriggerContract_EnumTriggerType.UpdateMetadata:
      return 8;
    case AssetTriggerContract_EnumTriggerType.StopNFTMint:
      return 9;
    case AssetTriggerContract_EnumTriggerType.UpdateLogo:
      return 10;
    case AssetTriggerContract_EnumTriggerType.UpdateURIs:
      return 11;
    case AssetTriggerContract_EnumTriggerType.ChangeRoyaltiesReceiver:
      return 12;
    case AssetTriggerContract_EnumTriggerType.UpdateStaking:
      return 13;
    case AssetTriggerContract_EnumTriggerType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface AssetTriggerContract_URIsEntry {
  key: string;
  value: string;
}

/** ValidatorConfig holds the data for a validator configuration */
export interface ValidatorConfig {
  BLSPublicKey?: Uint8Array;
  RewardAddress?: Uint8Array;
  CanDelegate?: boolean;
  Commission?: number;
  MaxDelegationAmount?: number;
  Logo?: string;
  URIs?: { [key: string]: string };
  Name?: string;
}

export interface ValidatorConfig_URIsEntry {
  key: string;
  value: string;
}

/** CreateValidatorContract holds the data for create a validator */
export interface CreateValidatorContract {
  OwnerAddress?: Uint8Array;
  Config?: ValidatorConfig;
}

/** ValidatorConfigContract holds the data for a validator configuration transaction */
export interface ValidatorConfigContract {
  Config?: ValidatorConfig;
}

/** FreezeContract holds the data for a freeze transaction */
export interface FreezeContract {
  AssetID?: Uint8Array;
  Amount?: number;
}

/** UnfreezeContract holds the data for a unfreeze transaction */
export interface UnfreezeContract {
  AssetID?: Uint8Array;
  BucketID?: Uint8Array;
}

/** DelegateContract holds the data for a delegate transaction */
export interface DelegateContract {
  ToAddress?: Uint8Array;
  BucketID?: Uint8Array;
}

/** UndelegateContract holds the data for a undelegate transaction */
export interface UndelegateContract {
  BucketID?: Uint8Array;
}

/** WithdrawContract holds the data for a withdraw transaction */
export interface WithdrawContract {
  AssetID?: Uint8Array;
}

/** ClaimContract holds the data for a claim transaction */
export interface ClaimContract {
  ClaimType?: ClaimContract_EnumClaimType;
  ID?: Uint8Array;
}

export enum ClaimContract_EnumClaimType {
  StakingClaim = 0,
  AllowanceClaim = 1,
  MarketClaim = 2,
  UNRECOGNIZED = -1,
}

export function claimContract_EnumClaimTypeFromJSON(object: any): ClaimContract_EnumClaimType {
  switch (object) {
    case 0:
    case "StakingClaim":
      return ClaimContract_EnumClaimType.StakingClaim;
    case 1:
    case "AllowanceClaim":
      return ClaimContract_EnumClaimType.AllowanceClaim;
    case 2:
    case "MarketClaim":
      return ClaimContract_EnumClaimType.MarketClaim;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimContract_EnumClaimType.UNRECOGNIZED;
  }
}

export function claimContract_EnumClaimTypeToJSON(object: ClaimContract_EnumClaimType): number {
  switch (object) {
    case ClaimContract_EnumClaimType.StakingClaim:
      return 0;
    case ClaimContract_EnumClaimType.AllowanceClaim:
      return 1;
    case ClaimContract_EnumClaimType.MarketClaim:
      return 2;
    case ClaimContract_EnumClaimType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** UnjailContract holds the data for a unjail transaction */
export interface UnjailContract {
}

/** SetAccountNameContract holds the data for a setAccountName transaction */
export interface SetAccountNameContract {
  Name?: Uint8Array;
}

/** ProposalContract holds the data for a proposal transaction */
export interface ProposalContract {
  Parameters?: { [key: number]: Uint8Array };
  Description?: Uint8Array;
  EpochsDuration?: number;
}

export interface ProposalContract_ParametersEntry {
  key: number;
  value: Uint8Array;
}

/** VoteContract holds the data for a vote transaction */
export interface VoteContract {
  ProposalID?: number;
  Amount?: number;
  Type?: VoteContract_EnumVoteType;
}

export enum VoteContract_EnumVoteType {
  Yes = 0,
  No = 1,
  UNRECOGNIZED = -1,
}

export function voteContract_EnumVoteTypeFromJSON(object: any): VoteContract_EnumVoteType {
  switch (object) {
    case 0:
    case "Yes":
      return VoteContract_EnumVoteType.Yes;
    case 1:
    case "No":
      return VoteContract_EnumVoteType.No;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteContract_EnumVoteType.UNRECOGNIZED;
  }
}

export function voteContract_EnumVoteTypeToJSON(object: VoteContract_EnumVoteType): number {
  switch (object) {
    case VoteContract_EnumVoteType.Yes:
      return 0;
    case VoteContract_EnumVoteType.No:
      return 1;
    case VoteContract_EnumVoteType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** ConfigITOContract holds the data for a ConfigITO transaction */
export interface ConfigITOContract {
  AssetID?: Uint8Array;
  ReceiverAddress?: Uint8Array;
  Status?: ConfigITOContract_EnumITOStatus;
  MaxAmount?: number;
  PackInfo?: { [key: string]: PackInfo };
}

export enum ConfigITOContract_EnumITOStatus {
  DefaultITO = 0,
  ActiveITO = 1,
  PausedITO = 2,
  UNRECOGNIZED = -1,
}

export function configITOContract_EnumITOStatusFromJSON(object: any): ConfigITOContract_EnumITOStatus {
  switch (object) {
    case 0:
    case "DefaultITO":
      return ConfigITOContract_EnumITOStatus.DefaultITO;
    case 1:
    case "ActiveITO":
      return ConfigITOContract_EnumITOStatus.ActiveITO;
    case 2:
    case "PausedITO":
      return ConfigITOContract_EnumITOStatus.PausedITO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConfigITOContract_EnumITOStatus.UNRECOGNIZED;
  }
}

export function configITOContract_EnumITOStatusToJSON(object: ConfigITOContract_EnumITOStatus): number {
  switch (object) {
    case ConfigITOContract_EnumITOStatus.DefaultITO:
      return 0;
    case ConfigITOContract_EnumITOStatus.ActiveITO:
      return 1;
    case ConfigITOContract_EnumITOStatus.PausedITO:
      return 2;
    case ConfigITOContract_EnumITOStatus.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface ConfigITOContract_PackInfoEntry {
  key: string;
  value?: PackInfo;
}

/** SetITOPrices holds the data for a ConfigITO transaction */
export interface SetITOPricesContract {
  AssetID?: Uint8Array;
  PackInfo?: { [key: string]: PackInfo };
}

export interface SetITOPricesContract_PackInfoEntry {
  key: string;
  value?: PackInfo;
}

/** PackInfo holds the pack list structure for the ITO contract */
export interface PackInfo {
  Packs?: PackItem[];
}

/** PackItem hold the pack structure for the ITO contract */
export interface PackItem {
  Amount?: number;
  Price?: number;
}

/** BuyContract holds the data for a buy transaction */
export interface BuyContract {
  BuyType?: BuyContract_EnumBuyType;
  ID?: Uint8Array;
  CurrencyID?: Uint8Array;
  Amount?: number;
}

export enum BuyContract_EnumBuyType {
  ITOBuy = 0,
  MarketBuy = 1,
  UNRECOGNIZED = -1,
}

export function buyContract_EnumBuyTypeFromJSON(object: any): BuyContract_EnumBuyType {
  switch (object) {
    case 0:
    case "ITOBuy":
      return BuyContract_EnumBuyType.ITOBuy;
    case 1:
    case "MarketBuy":
      return BuyContract_EnumBuyType.MarketBuy;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BuyContract_EnumBuyType.UNRECOGNIZED;
  }
}

export function buyContract_EnumBuyTypeToJSON(object: BuyContract_EnumBuyType): number {
  switch (object) {
    case BuyContract_EnumBuyType.ITOBuy:
      return 0;
    case BuyContract_EnumBuyType.MarketBuy:
      return 1;
    case BuyContract_EnumBuyType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** SellContract holds the data for a sell transaction */
export interface SellContract {
  MarketType?: SellContract_EnumMarketType;
  MarketplaceID?: Uint8Array;
  AssetID?: Uint8Array;
  CurrencyID?: Uint8Array;
  Price?: number;
  ReservePrice?: number;
  EndTime?: number;
}

export enum SellContract_EnumMarketType {
  BuyItNowMarket = 0,
  AuctionMarket = 1,
  UNRECOGNIZED = -1,
}

export function sellContract_EnumMarketTypeFromJSON(object: any): SellContract_EnumMarketType {
  switch (object) {
    case 0:
    case "BuyItNowMarket":
      return SellContract_EnumMarketType.BuyItNowMarket;
    case 1:
    case "AuctionMarket":
      return SellContract_EnumMarketType.AuctionMarket;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SellContract_EnumMarketType.UNRECOGNIZED;
  }
}

export function sellContract_EnumMarketTypeToJSON(object: SellContract_EnumMarketType): number {
  switch (object) {
    case SellContract_EnumMarketType.BuyItNowMarket:
      return 0;
    case SellContract_EnumMarketType.AuctionMarket:
      return 1;
    case SellContract_EnumMarketType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** CancelMarketOrderContract holds the data for a cancel market transaction */
export interface CancelMarketOrderContract {
  OrderID?: Uint8Array;
}

/** CreateMarketplaceContract holds the data for a create marketplace transaction */
export interface CreateMarketplaceContract {
  Name?: Uint8Array;
  ReferralAddress?: Uint8Array;
  ReferralPercentage?: number;
}

/** ConfigMarketplaceContract holds the data for a config marketplace transaction */
export interface ConfigMarketplaceContract {
  MarketplaceID?: Uint8Array;
  Name?: Uint8Array;
  ReferralAddress?: Uint8Array;
  ReferralPercentage?: number;
}

/** TODO: Reuse from account */
export interface AccKey {
  address?: Uint8Array;
  weight?: number;
}

export interface AccPermission {
  Type?: AccPermission_AccPermissionType;
  PermissionName?: string;
  Threshold?: number;
  Operations?: Uint8Array;
  Signers?: AccKey[];
}

export enum AccPermission_AccPermissionType {
  Owner = 0,
  User = 1,
  UNRECOGNIZED = -1,
}

export function accPermission_AccPermissionTypeFromJSON(object: any): AccPermission_AccPermissionType {
  switch (object) {
    case 0:
    case "Owner":
      return AccPermission_AccPermissionType.Owner;
    case 1:
    case "User":
      return AccPermission_AccPermissionType.User;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccPermission_AccPermissionType.UNRECOGNIZED;
  }
}

export function accPermission_AccPermissionTypeToJSON(object: AccPermission_AccPermissionType): number {
  switch (object) {
    case AccPermission_AccPermissionType.Owner:
      return 0;
    case AccPermission_AccPermissionType.User:
      return 1;
    case AccPermission_AccPermissionType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** UpdateAccountPermissionContract holds the data for update account permission transaction */
export interface UpdateAccountPermissionContract {
  Permissions?: AccPermission[];
}

function createBaseTransferContract(): TransferContract {
  return { ToAddress: new Uint8Array(), AssetID: new Uint8Array(), Amount: 0 };
}

export const TransferContract = {
  encode(message: TransferContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ToAddress !== undefined && message.ToAddress.length !== 0) {
      writer.uint32(10).bytes(message.ToAddress);
    }
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(18).bytes(message.AssetID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(24).int64(message.Amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ToAddress = reader.bytes();
          break;
        case 2:
          message.AssetID = reader.bytes();
          break;
        case 3:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferContract {
    return {
      ToAddress: isSet(object.ToAddress) ? bytesFromBase64(object.ToAddress) : new Uint8Array(),
      AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array(),
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
    };
  },

  toJSON(message: TransferContract): unknown {
    const obj: any = {};
    message.ToAddress !== undefined &&
      (obj.ToAddress = base64FromBytes(message.ToAddress !== undefined ? message.ToAddress : new Uint8Array()));
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferContract>, I>>(object: I): TransferContract {
    const message = createBaseTransferContract();
    message.ToAddress = object.ToAddress ?? new Uint8Array();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    return message;
  },
};

function createBaseCreateAssetContract(): CreateAssetContract {
  return {
    Type: 0,
    Name: new Uint8Array(),
    Ticker: new Uint8Array(),
    OwnerAddress: new Uint8Array(),
    Logo: "",
    URIs: {},
    Precision: 0,
    InitialSupply: 0,
    MaxSupply: 0,
    Royalties: undefined,
    Properties: undefined,
    Attributes: undefined,
    Staking: undefined,
    Roles: [],
  };
}

export const CreateAssetContract = {
  encode(message: CreateAssetContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(18).bytes(message.Name);
    }
    if (message.Ticker !== undefined && message.Ticker.length !== 0) {
      writer.uint32(26).bytes(message.Ticker);
    }
    if (message.OwnerAddress !== undefined && message.OwnerAddress.length !== 0) {
      writer.uint32(34).bytes(message.OwnerAddress);
    }
    if (message.Logo !== undefined && message.Logo !== "") {
      writer.uint32(42).string(message.Logo);
    }
    Object.entries(message.URIs || {}).forEach(([key, value]) => {
      CreateAssetContract_URIsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.Precision !== undefined && message.Precision !== 0) {
      writer.uint32(56).uint32(message.Precision);
    }
    if (message.InitialSupply !== undefined && message.InitialSupply !== 0) {
      writer.uint32(64).int64(message.InitialSupply);
    }
    if (message.MaxSupply !== undefined && message.MaxSupply !== 0) {
      writer.uint32(72).int64(message.MaxSupply);
    }
    if (message.Royalties !== undefined) {
      RoyaltiesInfo.encode(message.Royalties, writer.uint32(82).fork()).ldelim();
    }
    if (message.Properties !== undefined) {
      PropertiesInfo.encode(message.Properties, writer.uint32(90).fork()).ldelim();
    }
    if (message.Attributes !== undefined) {
      AttributesInfo.encode(message.Attributes, writer.uint32(98).fork()).ldelim();
    }
    if (message.Staking !== undefined) {
      StakingInfo.encode(message.Staking, writer.uint32(106).fork()).ldelim();
    }
    if (message.Roles !== undefined && message.Roles.length !== 0) {
      for (const v of message.Roles) {
        RolesInfo.encode(v!, writer.uint32(114).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAssetContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAssetContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.Name = reader.bytes();
          break;
        case 3:
          message.Ticker = reader.bytes();
          break;
        case 4:
          message.OwnerAddress = reader.bytes();
          break;
        case 5:
          message.Logo = reader.string();
          break;
        case 6:
          const entry6 = CreateAssetContract_URIsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.URIs![entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.Precision = reader.uint32();
          break;
        case 8:
          message.InitialSupply = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.MaxSupply = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.Royalties = RoyaltiesInfo.decode(reader, reader.uint32());
          break;
        case 11:
          message.Properties = PropertiesInfo.decode(reader, reader.uint32());
          break;
        case 12:
          message.Attributes = AttributesInfo.decode(reader, reader.uint32());
          break;
        case 13:
          message.Staking = StakingInfo.decode(reader, reader.uint32());
          break;
        case 14:
          message.Roles!.push(RolesInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAssetContract {
    return {
      Type: isSet(object.Type) ? createAssetContract_EnumAssetTypeFromJSON(object.Type) : 0,
      Name: isSet(object.Name) ? bytesFromBase64(object.Name) : new Uint8Array(),
      Ticker: isSet(object.Ticker) ? bytesFromBase64(object.Ticker) : new Uint8Array(),
      OwnerAddress: isSet(object.OwnerAddress) ? bytesFromBase64(object.OwnerAddress) : new Uint8Array(),
      Logo: isSet(object.Logo) ? String(object.Logo) : "",
      URIs: isObject(object.URIs)
        ? Object.entries(object.URIs).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Precision: isSet(object.Precision) ? Number(object.Precision) : 0,
      InitialSupply: isSet(object.InitialSupply) ? Number(object.InitialSupply) : 0,
      MaxSupply: isSet(object.MaxSupply) ? Number(object.MaxSupply) : 0,
      Royalties: isSet(object.Royalties) ? RoyaltiesInfo.fromJSON(object.Royalties) : undefined,
      Properties: isSet(object.Properties) ? PropertiesInfo.fromJSON(object.Properties) : undefined,
      Attributes: isSet(object.Attributes) ? AttributesInfo.fromJSON(object.Attributes) : undefined,
      Staking: isSet(object.Staking) ? StakingInfo.fromJSON(object.Staking) : undefined,
      Roles: Array.isArray(object?.Roles) ? object.Roles.map((e: any) => RolesInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: CreateAssetContract): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = createAssetContract_EnumAssetTypeToJSON(message.Type));
    message.Name !== undefined &&
      (obj.Name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    message.Ticker !== undefined &&
      (obj.Ticker = base64FromBytes(message.Ticker !== undefined ? message.Ticker : new Uint8Array()));
    message.OwnerAddress !== undefined &&
      (obj.OwnerAddress = base64FromBytes(
        message.OwnerAddress !== undefined ? message.OwnerAddress : new Uint8Array(),
      ));
    message.Logo !== undefined && (obj.Logo = message.Logo);
    obj.URIs = {};
    if (message.URIs) {
      Object.entries(message.URIs).forEach(([k, v]) => {
        obj.URIs[k] = v;
      });
    }
    message.Precision !== undefined && (obj.Precision = Math.round(message.Precision));
    message.InitialSupply !== undefined && (obj.InitialSupply = Math.round(message.InitialSupply));
    message.MaxSupply !== undefined && (obj.MaxSupply = Math.round(message.MaxSupply));
    message.Royalties !== undefined &&
      (obj.Royalties = message.Royalties ? RoyaltiesInfo.toJSON(message.Royalties) : undefined);
    message.Properties !== undefined &&
      (obj.Properties = message.Properties ? PropertiesInfo.toJSON(message.Properties) : undefined);
    message.Attributes !== undefined &&
      (obj.Attributes = message.Attributes ? AttributesInfo.toJSON(message.Attributes) : undefined);
    message.Staking !== undefined && (obj.Staking = message.Staking ? StakingInfo.toJSON(message.Staking) : undefined);
    if (message.Roles) {
      obj.Roles = message.Roles.map((e) => e ? RolesInfo.toJSON(e) : undefined);
    } else {
      obj.Roles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAssetContract>, I>>(object: I): CreateAssetContract {
    const message = createBaseCreateAssetContract();
    message.Type = object.Type ?? 0;
    message.Name = object.Name ?? new Uint8Array();
    message.Ticker = object.Ticker ?? new Uint8Array();
    message.OwnerAddress = object.OwnerAddress ?? new Uint8Array();
    message.Logo = object.Logo ?? "";
    message.URIs = Object.entries(object.URIs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Precision = object.Precision ?? 0;
    message.InitialSupply = object.InitialSupply ?? 0;
    message.MaxSupply = object.MaxSupply ?? 0;
    message.Royalties = (object.Royalties !== undefined && object.Royalties !== null)
      ? RoyaltiesInfo.fromPartial(object.Royalties)
      : undefined;
    message.Properties = (object.Properties !== undefined && object.Properties !== null)
      ? PropertiesInfo.fromPartial(object.Properties)
      : undefined;
    message.Attributes = (object.Attributes !== undefined && object.Attributes !== null)
      ? AttributesInfo.fromPartial(object.Attributes)
      : undefined;
    message.Staking = (object.Staking !== undefined && object.Staking !== null)
      ? StakingInfo.fromPartial(object.Staking)
      : undefined;
    message.Roles = object.Roles?.map((e) => RolesInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateAssetContract_URIsEntry(): CreateAssetContract_URIsEntry {
  return { key: "", value: "" };
}

export const CreateAssetContract_URIsEntry = {
  encode(message: CreateAssetContract_URIsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAssetContract_URIsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAssetContract_URIsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAssetContract_URIsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateAssetContract_URIsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAssetContract_URIsEntry>, I>>(
    object: I,
  ): CreateAssetContract_URIsEntry {
    const message = createBaseCreateAssetContract_URIsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePropertiesInfo(): PropertiesInfo {
  return {
    CanFreeze: false,
    CanWipe: false,
    CanPause: false,
    CanMint: false,
    CanBurn: false,
    CanChangeOwner: false,
    CanAddRoles: false,
  };
}

export const PropertiesInfo = {
  encode(message: PropertiesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CanFreeze === true) {
      writer.uint32(8).bool(message.CanFreeze);
    }
    if (message.CanWipe === true) {
      writer.uint32(16).bool(message.CanWipe);
    }
    if (message.CanPause === true) {
      writer.uint32(24).bool(message.CanPause);
    }
    if (message.CanMint === true) {
      writer.uint32(32).bool(message.CanMint);
    }
    if (message.CanBurn === true) {
      writer.uint32(40).bool(message.CanBurn);
    }
    if (message.CanChangeOwner === true) {
      writer.uint32(48).bool(message.CanChangeOwner);
    }
    if (message.CanAddRoles === true) {
      writer.uint32(56).bool(message.CanAddRoles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PropertiesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertiesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CanFreeze = reader.bool();
          break;
        case 2:
          message.CanWipe = reader.bool();
          break;
        case 3:
          message.CanPause = reader.bool();
          break;
        case 4:
          message.CanMint = reader.bool();
          break;
        case 5:
          message.CanBurn = reader.bool();
          break;
        case 6:
          message.CanChangeOwner = reader.bool();
          break;
        case 7:
          message.CanAddRoles = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PropertiesInfo {
    return {
      CanFreeze: isSet(object.CanFreeze) ? Boolean(object.CanFreeze) : false,
      CanWipe: isSet(object.CanWipe) ? Boolean(object.CanWipe) : false,
      CanPause: isSet(object.CanPause) ? Boolean(object.CanPause) : false,
      CanMint: isSet(object.CanMint) ? Boolean(object.CanMint) : false,
      CanBurn: isSet(object.CanBurn) ? Boolean(object.CanBurn) : false,
      CanChangeOwner: isSet(object.CanChangeOwner) ? Boolean(object.CanChangeOwner) : false,
      CanAddRoles: isSet(object.CanAddRoles) ? Boolean(object.CanAddRoles) : false,
    };
  },

  toJSON(message: PropertiesInfo): unknown {
    const obj: any = {};
    message.CanFreeze !== undefined && (obj.CanFreeze = message.CanFreeze);
    message.CanWipe !== undefined && (obj.CanWipe = message.CanWipe);
    message.CanPause !== undefined && (obj.CanPause = message.CanPause);
    message.CanMint !== undefined && (obj.CanMint = message.CanMint);
    message.CanBurn !== undefined && (obj.CanBurn = message.CanBurn);
    message.CanChangeOwner !== undefined && (obj.CanChangeOwner = message.CanChangeOwner);
    message.CanAddRoles !== undefined && (obj.CanAddRoles = message.CanAddRoles);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PropertiesInfo>, I>>(object: I): PropertiesInfo {
    const message = createBasePropertiesInfo();
    message.CanFreeze = object.CanFreeze ?? false;
    message.CanWipe = object.CanWipe ?? false;
    message.CanPause = object.CanPause ?? false;
    message.CanMint = object.CanMint ?? false;
    message.CanBurn = object.CanBurn ?? false;
    message.CanChangeOwner = object.CanChangeOwner ?? false;
    message.CanAddRoles = object.CanAddRoles ?? false;
    return message;
  },
};

function createBaseAttributesInfo(): AttributesInfo {
  return { IsPaused: false, IsNFTMintStopped: false };
}

export const AttributesInfo = {
  encode(message: AttributesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.IsPaused === true) {
      writer.uint32(8).bool(message.IsPaused);
    }
    if (message.IsNFTMintStopped === true) {
      writer.uint32(16).bool(message.IsNFTMintStopped);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IsPaused = reader.bool();
          break;
        case 2:
          message.IsNFTMintStopped = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AttributesInfo {
    return {
      IsPaused: isSet(object.IsPaused) ? Boolean(object.IsPaused) : false,
      IsNFTMintStopped: isSet(object.IsNFTMintStopped) ? Boolean(object.IsNFTMintStopped) : false,
    };
  },

  toJSON(message: AttributesInfo): unknown {
    const obj: any = {};
    message.IsPaused !== undefined && (obj.IsPaused = message.IsPaused);
    message.IsNFTMintStopped !== undefined && (obj.IsNFTMintStopped = message.IsNFTMintStopped);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttributesInfo>, I>>(object: I): AttributesInfo {
    const message = createBaseAttributesInfo();
    message.IsPaused = object.IsPaused ?? false;
    message.IsNFTMintStopped = object.IsNFTMintStopped ?? false;
    return message;
  },
};

function createBaseStakingInfo(): StakingInfo {
  return { Type: 0, APR: 0, MinEpochsToClaim: 0, MinEpochsToUnstake: 0, MinEpochsToWithdraw: 0 };
}

export const StakingInfo = {
  encode(message: StakingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.APR !== undefined && message.APR !== 0) {
      writer.uint32(16).uint32(message.APR);
    }
    if (message.MinEpochsToClaim !== undefined && message.MinEpochsToClaim !== 0) {
      writer.uint32(24).uint32(message.MinEpochsToClaim);
    }
    if (message.MinEpochsToUnstake !== undefined && message.MinEpochsToUnstake !== 0) {
      writer.uint32(32).uint32(message.MinEpochsToUnstake);
    }
    if (message.MinEpochsToWithdraw !== undefined && message.MinEpochsToWithdraw !== 0) {
      writer.uint32(40).uint32(message.MinEpochsToWithdraw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.APR = reader.uint32();
          break;
        case 3:
          message.MinEpochsToClaim = reader.uint32();
          break;
        case 4:
          message.MinEpochsToUnstake = reader.uint32();
          break;
        case 5:
          message.MinEpochsToWithdraw = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakingInfo {
    return {
      Type: isSet(object.Type) ? stakingInfo_InterestTypeFromJSON(object.Type) : 0,
      APR: isSet(object.APR) ? Number(object.APR) : 0,
      MinEpochsToClaim: isSet(object.MinEpochsToClaim) ? Number(object.MinEpochsToClaim) : 0,
      MinEpochsToUnstake: isSet(object.MinEpochsToUnstake) ? Number(object.MinEpochsToUnstake) : 0,
      MinEpochsToWithdraw: isSet(object.MinEpochsToWithdraw) ? Number(object.MinEpochsToWithdraw) : 0,
    };
  },

  toJSON(message: StakingInfo): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = stakingInfo_InterestTypeToJSON(message.Type));
    message.APR !== undefined && (obj.APR = Math.round(message.APR));
    message.MinEpochsToClaim !== undefined && (obj.MinEpochsToClaim = Math.round(message.MinEpochsToClaim));
    message.MinEpochsToUnstake !== undefined && (obj.MinEpochsToUnstake = Math.round(message.MinEpochsToUnstake));
    message.MinEpochsToWithdraw !== undefined && (obj.MinEpochsToWithdraw = Math.round(message.MinEpochsToWithdraw));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakingInfo>, I>>(object: I): StakingInfo {
    const message = createBaseStakingInfo();
    message.Type = object.Type ?? 0;
    message.APR = object.APR ?? 0;
    message.MinEpochsToClaim = object.MinEpochsToClaim ?? 0;
    message.MinEpochsToUnstake = object.MinEpochsToUnstake ?? 0;
    message.MinEpochsToWithdraw = object.MinEpochsToWithdraw ?? 0;
    return message;
  },
};

function createBaseRolesInfo(): RolesInfo {
  return { Address: new Uint8Array(), HasRoleMint: false, HasRoleSetITOPrices: false };
}

export const RolesInfo = {
  encode(message: RolesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== undefined && message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.HasRoleMint === true) {
      writer.uint32(16).bool(message.HasRoleMint);
    }
    if (message.HasRoleSetITOPrices === true) {
      writer.uint32(24).bool(message.HasRoleSetITOPrices);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RolesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRolesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Address = reader.bytes();
          break;
        case 2:
          message.HasRoleMint = reader.bool();
          break;
        case 3:
          message.HasRoleSetITOPrices = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RolesInfo {
    return {
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      HasRoleMint: isSet(object.HasRoleMint) ? Boolean(object.HasRoleMint) : false,
      HasRoleSetITOPrices: isSet(object.HasRoleSetITOPrices) ? Boolean(object.HasRoleSetITOPrices) : false,
    };
  },

  toJSON(message: RolesInfo): unknown {
    const obj: any = {};
    message.Address !== undefined &&
      (obj.Address = base64FromBytes(message.Address !== undefined ? message.Address : new Uint8Array()));
    message.HasRoleMint !== undefined && (obj.HasRoleMint = message.HasRoleMint);
    message.HasRoleSetITOPrices !== undefined && (obj.HasRoleSetITOPrices = message.HasRoleSetITOPrices);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RolesInfo>, I>>(object: I): RolesInfo {
    const message = createBaseRolesInfo();
    message.Address = object.Address ?? new Uint8Array();
    message.HasRoleMint = object.HasRoleMint ?? false;
    message.HasRoleSetITOPrices = object.HasRoleSetITOPrices ?? false;
    return message;
  },
};

function createBaseRoyaltiesInfo(): RoyaltiesInfo {
  return { Address: new Uint8Array(), TransferPercentage: [], TransferFixed: 0, MarketPercentage: 0, MarketFixed: 0 };
}

export const RoyaltiesInfo = {
  encode(message: RoyaltiesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Address !== undefined && message.Address.length !== 0) {
      writer.uint32(10).bytes(message.Address);
    }
    if (message.TransferPercentage !== undefined && message.TransferPercentage.length !== 0) {
      for (const v of message.TransferPercentage) {
        RoyaltyInfo.encode(v!, writer.uint32(18).fork()).ldelim();
      }
    }
    if (message.TransferFixed !== undefined && message.TransferFixed !== 0) {
      writer.uint32(24).int64(message.TransferFixed);
    }
    if (message.MarketPercentage !== undefined && message.MarketPercentage !== 0) {
      writer.uint32(32).uint32(message.MarketPercentage);
    }
    if (message.MarketFixed !== undefined && message.MarketFixed !== 0) {
      writer.uint32(40).int64(message.MarketFixed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltiesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltiesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Address = reader.bytes();
          break;
        case 2:
          message.TransferPercentage!.push(RoyaltyInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.TransferFixed = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.MarketPercentage = reader.uint32();
          break;
        case 5:
          message.MarketFixed = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltiesInfo {
    return {
      Address: isSet(object.Address) ? bytesFromBase64(object.Address) : new Uint8Array(),
      TransferPercentage: Array.isArray(object?.TransferPercentage)
        ? object.TransferPercentage.map((e: any) => RoyaltyInfo.fromJSON(e))
        : [],
      TransferFixed: isSet(object.TransferFixed) ? Number(object.TransferFixed) : 0,
      MarketPercentage: isSet(object.MarketPercentage) ? Number(object.MarketPercentage) : 0,
      MarketFixed: isSet(object.MarketFixed) ? Number(object.MarketFixed) : 0,
    };
  },

  toJSON(message: RoyaltiesInfo): unknown {
    const obj: any = {};
    message.Address !== undefined &&
      (obj.Address = base64FromBytes(message.Address !== undefined ? message.Address : new Uint8Array()));
    if (message.TransferPercentage) {
      obj.TransferPercentage = message.TransferPercentage.map((e) => e ? RoyaltyInfo.toJSON(e) : undefined);
    } else {
      obj.TransferPercentage = [];
    }
    message.TransferFixed !== undefined && (obj.TransferFixed = Math.round(message.TransferFixed));
    message.MarketPercentage !== undefined && (obj.MarketPercentage = Math.round(message.MarketPercentage));
    message.MarketFixed !== undefined && (obj.MarketFixed = Math.round(message.MarketFixed));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoyaltiesInfo>, I>>(object: I): RoyaltiesInfo {
    const message = createBaseRoyaltiesInfo();
    message.Address = object.Address ?? new Uint8Array();
    message.TransferPercentage = object.TransferPercentage?.map((e) => RoyaltyInfo.fromPartial(e)) || [];
    message.TransferFixed = object.TransferFixed ?? 0;
    message.MarketPercentage = object.MarketPercentage ?? 0;
    message.MarketFixed = object.MarketFixed ?? 0;
    return message;
  },
};

function createBaseRoyaltyInfo(): RoyaltyInfo {
  return { Amount: 0, Percentage: 0 };
}

export const RoyaltyInfo = {
  encode(message: RoyaltyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(8).int64(message.Amount);
    }
    if (message.Percentage !== undefined && message.Percentage !== 0) {
      writer.uint32(16).uint32(message.Percentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoyaltyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Percentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoyaltyInfo {
    return {
      Amount: isSet(object.amount) ? Number(object.amount) : 0,
      Percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
    };
  },

  toJSON(message: RoyaltyInfo): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.amount = Math.round(message.Amount));
    message.Percentage !== undefined && (obj.percentage = Math.round(message.Percentage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RoyaltyInfo>, I>>(object: I): RoyaltyInfo {
    const message = createBaseRoyaltyInfo();
    message.Amount = object.Amount ?? 0;
    message.Percentage = object.Percentage ?? 0;
    return message;
  },
};

function createBaseAssetTriggerContract(): AssetTriggerContract {
  return {
    TriggerType: 0,
    AssetID: new Uint8Array(),
    ToAddress: new Uint8Array(),
    Amount: 0,
    MIME: new Uint8Array(),
    Logo: "",
    URIs: {},
    Role: undefined,
    Staking: undefined,
  };
}

export const AssetTriggerContract = {
  encode(message: AssetTriggerContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TriggerType !== undefined && message.TriggerType !== 0) {
      writer.uint32(8).int32(message.TriggerType);
    }
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(18).bytes(message.AssetID);
    }
    if (message.ToAddress !== undefined && message.ToAddress.length !== 0) {
      writer.uint32(26).bytes(message.ToAddress);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(32).int64(message.Amount);
    }
    if (message.MIME !== undefined && message.MIME.length !== 0) {
      writer.uint32(42).bytes(message.MIME);
    }
    if (message.Logo !== undefined && message.Logo !== "") {
      writer.uint32(50).string(message.Logo);
    }
    Object.entries(message.URIs || {}).forEach(([key, value]) => {
      AssetTriggerContract_URIsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    if (message.Role !== undefined) {
      RolesInfo.encode(message.Role, writer.uint32(66).fork()).ldelim();
    }
    if (message.Staking !== undefined) {
      StakingInfo.encode(message.Staking, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTriggerContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTriggerContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TriggerType = reader.int32() as any;
          break;
        case 2:
          message.AssetID = reader.bytes();
          break;
        case 3:
          message.ToAddress = reader.bytes();
          break;
        case 4:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.MIME = reader.bytes();
          break;
        case 6:
          message.Logo = reader.string();
          break;
        case 7:
          const entry7 = AssetTriggerContract_URIsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.URIs![entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.Role = RolesInfo.decode(reader, reader.uint32());
          break;
        case 9:
          message.Staking = StakingInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTriggerContract {
    return {
      TriggerType: isSet(object.TriggerType) ? assetTriggerContract_EnumTriggerTypeFromJSON(object.TriggerType) : 0,
      AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array(),
      ToAddress: isSet(object.ToAddress) ? bytesFromBase64(object.ToAddress) : new Uint8Array(),
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
      MIME: isSet(object.MIME) ? bytesFromBase64(object.MIME) : new Uint8Array(),
      Logo: isSet(object.Logo) ? String(object.Logo) : "",
      URIs: isObject(object.URIs)
        ? Object.entries(object.URIs).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Role: isSet(object.Role) ? RolesInfo.fromJSON(object.Role) : undefined,
      Staking: isSet(object.Staking) ? StakingInfo.fromJSON(object.Staking) : undefined,
    };
  },

  toJSON(message: AssetTriggerContract): unknown {
    const obj: any = {};
    message.TriggerType !== undefined &&
      (obj.TriggerType = assetTriggerContract_EnumTriggerTypeToJSON(message.TriggerType));
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.ToAddress !== undefined &&
      (obj.ToAddress = base64FromBytes(message.ToAddress !== undefined ? message.ToAddress : new Uint8Array()));
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    message.MIME !== undefined &&
      (obj.MIME = base64FromBytes(message.MIME !== undefined ? message.MIME : new Uint8Array()));
    message.Logo !== undefined && (obj.Logo = message.Logo);
    obj.URIs = {};
    if (message.URIs) {
      Object.entries(message.URIs).forEach(([k, v]) => {
        obj.URIs[k] = v;
      });
    }
    message.Role !== undefined && (obj.Role = message.Role ? RolesInfo.toJSON(message.Role) : undefined);
    message.Staking !== undefined && (obj.Staking = message.Staking ? StakingInfo.toJSON(message.Staking) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTriggerContract>, I>>(object: I): AssetTriggerContract {
    const message = createBaseAssetTriggerContract();
    message.TriggerType = object.TriggerType ?? 0;
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.ToAddress = object.ToAddress ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    message.MIME = object.MIME ?? new Uint8Array();
    message.Logo = object.Logo ?? "";
    message.URIs = Object.entries(object.URIs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Role = (object.Role !== undefined && object.Role !== null) ? RolesInfo.fromPartial(object.Role) : undefined;
    message.Staking = (object.Staking !== undefined && object.Staking !== null)
      ? StakingInfo.fromPartial(object.Staking)
      : undefined;
    return message;
  },
};

function createBaseAssetTriggerContract_URIsEntry(): AssetTriggerContract_URIsEntry {
  return { key: "", value: "" };
}

export const AssetTriggerContract_URIsEntry = {
  encode(message: AssetTriggerContract_URIsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetTriggerContract_URIsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetTriggerContract_URIsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetTriggerContract_URIsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: AssetTriggerContract_URIsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetTriggerContract_URIsEntry>, I>>(
    object: I,
  ): AssetTriggerContract_URIsEntry {
    const message = createBaseAssetTriggerContract_URIsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseValidatorConfig(): ValidatorConfig {
  return {
    BLSPublicKey: new Uint8Array(),
    RewardAddress: new Uint8Array(),
    CanDelegate: false,
    Commission: 0,
    MaxDelegationAmount: 0,
    Logo: "",
    URIs: {},
    Name: "",
  };
}

export const ValidatorConfig = {
  encode(message: ValidatorConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BLSPublicKey !== undefined && message.BLSPublicKey.length !== 0) {
      writer.uint32(10).bytes(message.BLSPublicKey);
    }
    if (message.RewardAddress !== undefined && message.RewardAddress.length !== 0) {
      writer.uint32(18).bytes(message.RewardAddress);
    }
    if (message.CanDelegate === true) {
      writer.uint32(24).bool(message.CanDelegate);
    }
    if (message.Commission !== undefined && message.Commission !== 0) {
      writer.uint32(32).uint32(message.Commission);
    }
    if (message.MaxDelegationAmount !== undefined && message.MaxDelegationAmount !== 0) {
      writer.uint32(40).int64(message.MaxDelegationAmount);
    }
    if (message.Logo !== undefined && message.Logo !== "") {
      writer.uint32(50).string(message.Logo);
    }
    Object.entries(message.URIs || {}).forEach(([key, value]) => {
      ValidatorConfig_URIsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    if (message.Name !== undefined && message.Name !== "") {
      writer.uint32(66).string(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BLSPublicKey = reader.bytes();
          break;
        case 2:
          message.RewardAddress = reader.bytes();
          break;
        case 3:
          message.CanDelegate = reader.bool();
          break;
        case 4:
          message.Commission = reader.uint32();
          break;
        case 5:
          message.MaxDelegationAmount = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.Logo = reader.string();
          break;
        case 7:
          const entry7 = ValidatorConfig_URIsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.URIs![entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.Name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorConfig {
    return {
      BLSPublicKey: isSet(object.BLSPublicKey) ? bytesFromBase64(object.BLSPublicKey) : new Uint8Array(),
      RewardAddress: isSet(object.RewardAddress) ? bytesFromBase64(object.RewardAddress) : new Uint8Array(),
      CanDelegate: isSet(object.CanDelegate) ? Boolean(object.CanDelegate) : false,
      Commission: isSet(object.Commission) ? Number(object.Commission) : 0,
      MaxDelegationAmount: isSet(object.MaxDelegationAmount) ? Number(object.MaxDelegationAmount) : 0,
      Logo: isSet(object.Logo) ? String(object.Logo) : "",
      URIs: isObject(object.URIs)
        ? Object.entries(object.URIs).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      Name: isSet(object.Name) ? String(object.Name) : "",
    };
  },

  toJSON(message: ValidatorConfig): unknown {
    const obj: any = {};
    message.BLSPublicKey !== undefined &&
      (obj.BLSPublicKey = base64FromBytes(
        message.BLSPublicKey !== undefined ? message.BLSPublicKey : new Uint8Array(),
      ));
    message.RewardAddress !== undefined &&
      (obj.RewardAddress = base64FromBytes(
        message.RewardAddress !== undefined ? message.RewardAddress : new Uint8Array(),
      ));
    message.CanDelegate !== undefined && (obj.CanDelegate = message.CanDelegate);
    message.Commission !== undefined && (obj.Commission = Math.round(message.Commission));
    message.MaxDelegationAmount !== undefined && (obj.MaxDelegationAmount = Math.round(message.MaxDelegationAmount));
    message.Logo !== undefined && (obj.Logo = message.Logo);
    obj.URIs = {};
    if (message.URIs) {
      Object.entries(message.URIs).forEach(([k, v]) => {
        obj.URIs[k] = v;
      });
    }
    message.Name !== undefined && (obj.Name = message.Name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorConfig>, I>>(object: I): ValidatorConfig {
    const message = createBaseValidatorConfig();
    message.BLSPublicKey = object.BLSPublicKey ?? new Uint8Array();
    message.RewardAddress = object.RewardAddress ?? new Uint8Array();
    message.CanDelegate = object.CanDelegate ?? false;
    message.Commission = object.Commission ?? 0;
    message.MaxDelegationAmount = object.MaxDelegationAmount ?? 0;
    message.Logo = object.Logo ?? "";
    message.URIs = Object.entries(object.URIs ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.Name = object.Name ?? "";
    return message;
  },
};

function createBaseValidatorConfig_URIsEntry(): ValidatorConfig_URIsEntry {
  return { key: "", value: "" };
}

export const ValidatorConfig_URIsEntry = {
  encode(message: ValidatorConfig_URIsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorConfig_URIsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorConfig_URIsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorConfig_URIsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ValidatorConfig_URIsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorConfig_URIsEntry>, I>>(object: I): ValidatorConfig_URIsEntry {
    const message = createBaseValidatorConfig_URIsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCreateValidatorContract(): CreateValidatorContract {
  return { OwnerAddress: new Uint8Array(), Config: undefined };
}

export const CreateValidatorContract = {
  encode(message: CreateValidatorContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.OwnerAddress !== undefined && message.OwnerAddress.length !== 0) {
      writer.uint32(10).bytes(message.OwnerAddress);
    }
    if (message.Config !== undefined) {
      ValidatorConfig.encode(message.Config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateValidatorContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateValidatorContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OwnerAddress = reader.bytes();
          break;
        case 2:
          message.Config = ValidatorConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateValidatorContract {
    return {
      OwnerAddress: isSet(object.OwnerAddress) ? bytesFromBase64(object.OwnerAddress) : new Uint8Array(),
      Config: isSet(object.Config) ? ValidatorConfig.fromJSON(object.Config) : undefined,
    };
  },

  toJSON(message: CreateValidatorContract): unknown {
    const obj: any = {};
    message.OwnerAddress !== undefined &&
      (obj.OwnerAddress = base64FromBytes(
        message.OwnerAddress !== undefined ? message.OwnerAddress : new Uint8Array(),
      ));
    message.Config !== undefined && (obj.Config = message.Config ? ValidatorConfig.toJSON(message.Config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateValidatorContract>, I>>(object: I): CreateValidatorContract {
    const message = createBaseCreateValidatorContract();
    message.OwnerAddress = object.OwnerAddress ?? new Uint8Array();
    message.Config = (object.Config !== undefined && object.Config !== null)
      ? ValidatorConfig.fromPartial(object.Config)
      : undefined;
    return message;
  },
};

function createBaseValidatorConfigContract(): ValidatorConfigContract {
  return { Config: undefined };
}

export const ValidatorConfigContract = {
  encode(message: ValidatorConfigContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Config !== undefined) {
      ValidatorConfig.encode(message.Config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorConfigContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorConfigContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Config = ValidatorConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorConfigContract {
    return { Config: isSet(object.Config) ? ValidatorConfig.fromJSON(object.Config) : undefined };
  },

  toJSON(message: ValidatorConfigContract): unknown {
    const obj: any = {};
    message.Config !== undefined && (obj.Config = message.Config ? ValidatorConfig.toJSON(message.Config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorConfigContract>, I>>(object: I): ValidatorConfigContract {
    const message = createBaseValidatorConfigContract();
    message.Config = (object.Config !== undefined && object.Config !== null)
      ? ValidatorConfig.fromPartial(object.Config)
      : undefined;
    return message;
  },
};

function createBaseFreezeContract(): FreezeContract {
  return { AssetID: new Uint8Array(), Amount: 0 };
}

export const FreezeContract = {
  encode(message: FreezeContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(16).int64(message.Amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FreezeContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFreezeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FreezeContract {
    return {
      AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array(),
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
    };
  },

  toJSON(message: FreezeContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FreezeContract>, I>>(object: I): FreezeContract {
    const message = createBaseFreezeContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    return message;
  },
};

function createBaseUnfreezeContract(): UnfreezeContract {
  return { AssetID: new Uint8Array(), BucketID: new Uint8Array() };
}

export const UnfreezeContract = {
  encode(message: UnfreezeContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    if (message.BucketID !== undefined && message.BucketID.length !== 0) {
      writer.uint32(18).bytes(message.BucketID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnfreezeContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnfreezeContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          message.BucketID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnfreezeContract {
    return {
      AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array(),
      BucketID: isSet(object.BucketID) ? bytesFromBase64(object.BucketID) : new Uint8Array(),
    };
  },

  toJSON(message: UnfreezeContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.BucketID !== undefined &&
      (obj.BucketID = base64FromBytes(message.BucketID !== undefined ? message.BucketID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnfreezeContract>, I>>(object: I): UnfreezeContract {
    const message = createBaseUnfreezeContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.BucketID = object.BucketID ?? new Uint8Array();
    return message;
  },
};

function createBaseDelegateContract(): DelegateContract {
  return { ToAddress: new Uint8Array(), BucketID: new Uint8Array() };
}

export const DelegateContract = {
  encode(message: DelegateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ToAddress !== undefined && message.ToAddress.length !== 0) {
      writer.uint32(10).bytes(message.ToAddress);
    }
    if (message.BucketID !== undefined && message.BucketID.length !== 0) {
      writer.uint32(18).bytes(message.BucketID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ToAddress = reader.bytes();
          break;
        case 2:
          message.BucketID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegateContract {
    return {
      ToAddress: isSet(object.ToAddress) ? bytesFromBase64(object.ToAddress) : new Uint8Array(),
      BucketID: isSet(object.BucketID) ? bytesFromBase64(object.BucketID) : new Uint8Array(),
    };
  },

  toJSON(message: DelegateContract): unknown {
    const obj: any = {};
    message.ToAddress !== undefined &&
      (obj.ToAddress = base64FromBytes(message.ToAddress !== undefined ? message.ToAddress : new Uint8Array()));
    message.BucketID !== undefined &&
      (obj.BucketID = base64FromBytes(message.BucketID !== undefined ? message.BucketID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegateContract>, I>>(object: I): DelegateContract {
    const message = createBaseDelegateContract();
    message.ToAddress = object.ToAddress ?? new Uint8Array();
    message.BucketID = object.BucketID ?? new Uint8Array();
    return message;
  },
};

function createBaseUndelegateContract(): UndelegateContract {
  return { BucketID: new Uint8Array() };
}

export const UndelegateContract = {
  encode(message: UndelegateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BucketID !== undefined && message.BucketID.length !== 0) {
      writer.uint32(10).bytes(message.BucketID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegateContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BucketID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegateContract {
    return { BucketID: isSet(object.BucketID) ? bytesFromBase64(object.BucketID) : new Uint8Array() };
  },

  toJSON(message: UndelegateContract): unknown {
    const obj: any = {};
    message.BucketID !== undefined &&
      (obj.BucketID = base64FromBytes(message.BucketID !== undefined ? message.BucketID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndelegateContract>, I>>(object: I): UndelegateContract {
    const message = createBaseUndelegateContract();
    message.BucketID = object.BucketID ?? new Uint8Array();
    return message;
  },
};

function createBaseWithdrawContract(): WithdrawContract {
  return { AssetID: new Uint8Array() };
}

export const WithdrawContract = {
  encode(message: WithdrawContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawContract {
    return { AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array() };
  },

  toJSON(message: WithdrawContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawContract>, I>>(object: I): WithdrawContract {
    const message = createBaseWithdrawContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    return message;
  },
};

function createBaseClaimContract(): ClaimContract {
  return { ClaimType: 0, ID: new Uint8Array() };
}

export const ClaimContract = {
  encode(message: ClaimContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ClaimType !== undefined && message.ClaimType !== 0) {
      writer.uint32(8).int32(message.ClaimType);
    }
    if (message.ID !== undefined && message.ID.length !== 0) {
      writer.uint32(18).bytes(message.ID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ClaimType = reader.int32() as any;
          break;
        case 2:
          message.ID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimContract {
    return {
      ClaimType: isSet(object.ClaimType) ? claimContract_EnumClaimTypeFromJSON(object.ClaimType) : 0,
      ID: isSet(object.ID) ? bytesFromBase64(object.ID) : new Uint8Array(),
    };
  },

  toJSON(message: ClaimContract): unknown {
    const obj: any = {};
    message.ClaimType !== undefined && (obj.ClaimType = claimContract_EnumClaimTypeToJSON(message.ClaimType));
    message.ID !== undefined && (obj.ID = base64FromBytes(message.ID !== undefined ? message.ID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimContract>, I>>(object: I): ClaimContract {
    const message = createBaseClaimContract();
    message.ClaimType = object.ClaimType ?? 0;
    message.ID = object.ID ?? new Uint8Array();
    return message;
  },
};

function createBaseUnjailContract(): UnjailContract {
  return {};
}

export const UnjailContract = {
  encode(_: UnjailContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnjailContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnjailContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UnjailContract {
    return {};
  },

  toJSON(_: UnjailContract): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnjailContract>, I>>(_: I): UnjailContract {
    const message = createBaseUnjailContract();
    return message;
  },
};

function createBaseSetAccountNameContract(): SetAccountNameContract {
  return { Name: new Uint8Array() };
}

export const SetAccountNameContract = {
  encode(message: SetAccountNameContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(10).bytes(message.Name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAccountNameContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAccountNameContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetAccountNameContract {
    return { Name: isSet(object.Name) ? bytesFromBase64(object.Name) : new Uint8Array() };
  },

  toJSON(message: SetAccountNameContract): unknown {
    const obj: any = {};
    message.Name !== undefined &&
      (obj.Name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetAccountNameContract>, I>>(object: I): SetAccountNameContract {
    const message = createBaseSetAccountNameContract();
    message.Name = object.Name ?? new Uint8Array();
    return message;
  },
};

function createBaseProposalContract(): ProposalContract {
  return { Parameters: {}, Description: new Uint8Array(), EpochsDuration: 0 };
}

export const ProposalContract = {
  encode(message: ProposalContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.Parameters || {}).forEach(([key, value]) => {
      ProposalContract_ParametersEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.Description !== undefined && message.Description.length !== 0) {
      writer.uint32(18).bytes(message.Description);
    }
    if (message.EpochsDuration !== undefined && message.EpochsDuration !== 0) {
      writer.uint32(24).uint32(message.EpochsDuration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProposalContract_ParametersEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.Parameters![entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.Description = reader.bytes();
          break;
        case 3:
          message.EpochsDuration = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalContract {
    return {
      Parameters: isObject(object.Parameters)
        ? Object.entries(object.Parameters).reduce<{ [key: number]: Uint8Array }>((acc, [key, value]) => {
          acc[Number(key)] = bytesFromBase64(value as string);
          return acc;
        }, {})
        : {},
      Description: isSet(object.Description) ? bytesFromBase64(object.Description) : new Uint8Array(),
      EpochsDuration: isSet(object.EpochsDuration) ? Number(object.EpochsDuration) : 0,
    };
  },

  toJSON(message: ProposalContract): unknown {
    const obj: any = {};
    obj.Parameters = {};
    if (message.Parameters) {
      Object.entries(message.Parameters).forEach(([k, v]) => {
        obj.Parameters[k] = base64FromBytes(v);
      });
    }
    message.Description !== undefined &&
      (obj.Description = base64FromBytes(message.Description !== undefined ? message.Description : new Uint8Array()));
    message.EpochsDuration !== undefined && (obj.EpochsDuration = Math.round(message.EpochsDuration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalContract>, I>>(object: I): ProposalContract {
    const message = createBaseProposalContract();
    message.Parameters = Object.entries(object.Parameters ?? {}).reduce<{ [key: number]: Uint8Array }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[Number(key)] = value;
        }
        return acc;
      },
      {},
    );
    message.Description = object.Description ?? new Uint8Array();
    message.EpochsDuration = object.EpochsDuration ?? 0;
    return message;
  },
};

function createBaseProposalContract_ParametersEntry(): ProposalContract_ParametersEntry {
  return { key: 0, value: new Uint8Array() };
}

export const ProposalContract_ParametersEntry = {
  encode(message: ProposalContract_ParametersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalContract_ParametersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalContract_ParametersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalContract_ParametersEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: ProposalContract_ParametersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalContract_ParametersEntry>, I>>(
    object: I,
  ): ProposalContract_ParametersEntry {
    const message = createBaseProposalContract_ParametersEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseVoteContract(): VoteContract {
  return { ProposalID: 0, Amount: 0, Type: 0 };
}

export const VoteContract = {
  encode(message: VoteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ProposalID !== undefined && message.ProposalID !== 0) {
      writer.uint32(8).uint64(message.ProposalID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(16).int64(message.Amount);
    }
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(24).int32(message.Type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ProposalID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.Type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteContract {
    return {
      ProposalID: isSet(object.ProposalID) ? Number(object.ProposalID) : 0,
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
      Type: isSet(object.Type) ? voteContract_EnumVoteTypeFromJSON(object.Type) : 0,
    };
  },

  toJSON(message: VoteContract): unknown {
    const obj: any = {};
    message.ProposalID !== undefined && (obj.ProposalID = Math.round(message.ProposalID));
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    message.Type !== undefined && (obj.Type = voteContract_EnumVoteTypeToJSON(message.Type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteContract>, I>>(object: I): VoteContract {
    const message = createBaseVoteContract();
    message.ProposalID = object.ProposalID ?? 0;
    message.Amount = object.Amount ?? 0;
    message.Type = object.Type ?? 0;
    return message;
  },
};

function createBaseConfigITOContract(): ConfigITOContract {
  return { AssetID: new Uint8Array(), ReceiverAddress: new Uint8Array(), Status: 0, MaxAmount: 0, PackInfo: {} };
}

export const ConfigITOContract = {
  encode(message: ConfigITOContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    if (message.ReceiverAddress !== undefined && message.ReceiverAddress.length !== 0) {
      writer.uint32(18).bytes(message.ReceiverAddress);
    }
    if (message.Status !== undefined && message.Status !== 0) {
      writer.uint32(24).int32(message.Status);
    }
    if (message.MaxAmount !== undefined && message.MaxAmount !== 0) {
      writer.uint32(32).int64(message.MaxAmount);
    }
    Object.entries(message.PackInfo || {}).forEach(([key, value]) => {
      ConfigITOContract_PackInfoEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigITOContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigITOContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          message.ReceiverAddress = reader.bytes();
          break;
        case 3:
          message.Status = reader.int32() as any;
          break;
        case 4:
          message.MaxAmount = longToNumber(reader.int64() as Long);
          break;
        case 5:
          const entry5 = ConfigITOContract_PackInfoEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.PackInfo![entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigITOContract {
    return {
      AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array(),
      ReceiverAddress: isSet(object.ReceiverAddress) ? bytesFromBase64(object.ReceiverAddress) : new Uint8Array(),
      Status: isSet(object.Status) ? configITOContract_EnumITOStatusFromJSON(object.Status) : 0,
      MaxAmount: isSet(object.MaxAmount) ? Number(object.MaxAmount) : 0,
      PackInfo: isObject(object.PackInfo)
        ? Object.entries(object.PackInfo).reduce<{ [key: string]: PackInfo }>((acc, [key, value]) => {
          acc[key] = PackInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ConfigITOContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.ReceiverAddress !== undefined &&
      (obj.ReceiverAddress = base64FromBytes(
        message.ReceiverAddress !== undefined ? message.ReceiverAddress : new Uint8Array(),
      ));
    message.Status !== undefined && (obj.Status = configITOContract_EnumITOStatusToJSON(message.Status));
    message.MaxAmount !== undefined && (obj.MaxAmount = Math.round(message.MaxAmount));
    obj.PackInfo = {};
    if (message.PackInfo) {
      Object.entries(message.PackInfo).forEach(([k, v]) => {
        obj.PackInfo[k] = PackInfo.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigITOContract>, I>>(object: I): ConfigITOContract {
    const message = createBaseConfigITOContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.ReceiverAddress = object.ReceiverAddress ?? new Uint8Array();
    message.Status = object.Status ?? 0;
    message.MaxAmount = object.MaxAmount ?? 0;
    message.PackInfo = Object.entries(object.PackInfo ?? {}).reduce<{ [key: string]: PackInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PackInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseConfigITOContract_PackInfoEntry(): ConfigITOContract_PackInfoEntry {
  return { key: "", value: undefined };
}

export const ConfigITOContract_PackInfoEntry = {
  encode(message: ConfigITOContract_PackInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PackInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigITOContract_PackInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigITOContract_PackInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PackInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigITOContract_PackInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? PackInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ConfigITOContract_PackInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? PackInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigITOContract_PackInfoEntry>, I>>(
    object: I,
  ): ConfigITOContract_PackInfoEntry {
    const message = createBaseConfigITOContract_PackInfoEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PackInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSetITOPricesContract(): SetITOPricesContract {
  return { AssetID: new Uint8Array(), PackInfo: {} };
}

export const SetITOPricesContract = {
  encode(message: SetITOPricesContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(10).bytes(message.AssetID);
    }
    Object.entries(message.PackInfo || {}).forEach(([key, value]) => {
      SetITOPricesContract_PackInfoEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetITOPricesContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetITOPricesContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.AssetID = reader.bytes();
          break;
        case 2:
          const entry2 = SetITOPricesContract_PackInfoEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.PackInfo![entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetITOPricesContract {
    return {
      AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array(),
      PackInfo: isObject(object.PackInfo)
        ? Object.entries(object.PackInfo).reduce<{ [key: string]: PackInfo }>((acc, [key, value]) => {
          acc[key] = PackInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: SetITOPricesContract): unknown {
    const obj: any = {};
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    obj.PackInfo = {};
    if (message.PackInfo) {
      Object.entries(message.PackInfo).forEach(([k, v]) => {
        obj.PackInfo[k] = PackInfo.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetITOPricesContract>, I>>(object: I): SetITOPricesContract {
    const message = createBaseSetITOPricesContract();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.PackInfo = Object.entries(object.PackInfo ?? {}).reduce<{ [key: string]: PackInfo }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PackInfo.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSetITOPricesContract_PackInfoEntry(): SetITOPricesContract_PackInfoEntry {
  return { key: "", value: undefined };
}

export const SetITOPricesContract_PackInfoEntry = {
  encode(message: SetITOPricesContract_PackInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PackInfo.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetITOPricesContract_PackInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetITOPricesContract_PackInfoEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = PackInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetITOPricesContract_PackInfoEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? PackInfo.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SetITOPricesContract_PackInfoEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? PackInfo.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetITOPricesContract_PackInfoEntry>, I>>(
    object: I,
  ): SetITOPricesContract_PackInfoEntry {
    const message = createBaseSetITOPricesContract_PackInfoEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PackInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBasePackInfo(): PackInfo {
  return { Packs: [] };
}

export const PackInfo = {
  encode(message: PackInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Packs !== undefined && message.Packs.length !== 0) {
      for (const v of message.Packs) {
        PackItem.encode(v!, writer.uint32(10).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Packs!.push(PackItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackInfo {
    return { Packs: Array.isArray(object?.Packs) ? object.Packs.map((e: any) => PackItem.fromJSON(e)) : [] };
  },

  toJSON(message: PackInfo): unknown {
    const obj: any = {};
    if (message.Packs) {
      obj.Packs = message.Packs.map((e) => e ? PackItem.toJSON(e) : undefined);
    } else {
      obj.Packs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackInfo>, I>>(object: I): PackInfo {
    const message = createBasePackInfo();
    message.Packs = object.Packs?.map((e) => PackItem.fromPartial(e)) || [];
    return message;
  },
};

function createBasePackItem(): PackItem {
  return { Amount: 0, Price: 0 };
}

export const PackItem = {
  encode(message: PackItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(8).int64(message.Amount);
    }
    if (message.Price !== undefined && message.Price !== 0) {
      writer.uint32(16).int64(message.Price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PackItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.Price = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PackItem {
    return {
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
      Price: isSet(object.Price) ? Number(object.Price) : 0,
    };
  },

  toJSON(message: PackItem): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    message.Price !== undefined && (obj.Price = Math.round(message.Price));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PackItem>, I>>(object: I): PackItem {
    const message = createBasePackItem();
    message.Amount = object.Amount ?? 0;
    message.Price = object.Price ?? 0;
    return message;
  },
};

function createBaseBuyContract(): BuyContract {
  return { BuyType: 0, ID: new Uint8Array(), CurrencyID: new Uint8Array(), Amount: 0 };
}

export const BuyContract = {
  encode(message: BuyContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BuyType !== undefined && message.BuyType !== 0) {
      writer.uint32(8).int32(message.BuyType);
    }
    if (message.ID !== undefined && message.ID.length !== 0) {
      writer.uint32(18).bytes(message.ID);
    }
    if (message.CurrencyID !== undefined && message.CurrencyID.length !== 0) {
      writer.uint32(26).bytes(message.CurrencyID);
    }
    if (message.Amount !== undefined && message.Amount !== 0) {
      writer.uint32(32).int64(message.Amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuyContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BuyType = reader.int32() as any;
          break;
        case 2:
          message.ID = reader.bytes();
          break;
        case 3:
          message.CurrencyID = reader.bytes();
          break;
        case 4:
          message.Amount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuyContract {
    return {
      BuyType: isSet(object.BuyType) ? buyContract_EnumBuyTypeFromJSON(object.BuyType) : 0,
      ID: isSet(object.ID) ? bytesFromBase64(object.ID) : new Uint8Array(),
      CurrencyID: isSet(object.CurrencyID) ? bytesFromBase64(object.CurrencyID) : new Uint8Array(),
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
    };
  },

  toJSON(message: BuyContract): unknown {
    const obj: any = {};
    message.BuyType !== undefined && (obj.BuyType = buyContract_EnumBuyTypeToJSON(message.BuyType));
    message.ID !== undefined && (obj.ID = base64FromBytes(message.ID !== undefined ? message.ID : new Uint8Array()));
    message.CurrencyID !== undefined &&
      (obj.CurrencyID = base64FromBytes(message.CurrencyID !== undefined ? message.CurrencyID : new Uint8Array()));
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuyContract>, I>>(object: I): BuyContract {
    const message = createBaseBuyContract();
    message.BuyType = object.BuyType ?? 0;
    message.ID = object.ID ?? new Uint8Array();
    message.CurrencyID = object.CurrencyID ?? new Uint8Array();
    message.Amount = object.Amount ?? 0;
    return message;
  },
};

function createBaseSellContract(): SellContract {
  return {
    MarketType: 0,
    MarketplaceID: new Uint8Array(),
    AssetID: new Uint8Array(),
    CurrencyID: new Uint8Array(),
    Price: 0,
    ReservePrice: 0,
    EndTime: 0,
  };
}

export const SellContract = {
  encode(message: SellContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MarketType !== undefined && message.MarketType !== 0) {
      writer.uint32(8).int32(message.MarketType);
    }
    if (message.MarketplaceID !== undefined && message.MarketplaceID.length !== 0) {
      writer.uint32(18).bytes(message.MarketplaceID);
    }
    if (message.AssetID !== undefined && message.AssetID.length !== 0) {
      writer.uint32(26).bytes(message.AssetID);
    }
    if (message.CurrencyID !== undefined && message.CurrencyID.length !== 0) {
      writer.uint32(34).bytes(message.CurrencyID);
    }
    if (message.Price !== undefined && message.Price !== 0) {
      writer.uint32(40).int64(message.Price);
    }
    if (message.ReservePrice !== undefined && message.ReservePrice !== 0) {
      writer.uint32(48).int64(message.ReservePrice);
    }
    if (message.EndTime !== undefined && message.EndTime !== 0) {
      writer.uint32(56).int64(message.EndTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SellContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MarketType = reader.int32() as any;
          break;
        case 2:
          message.MarketplaceID = reader.bytes();
          break;
        case 3:
          message.AssetID = reader.bytes();
          break;
        case 4:
          message.CurrencyID = reader.bytes();
          break;
        case 5:
          message.Price = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.ReservePrice = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.EndTime = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SellContract {
    return {
      MarketType: isSet(object.MarketType) ? sellContract_EnumMarketTypeFromJSON(object.MarketType) : 0,
      MarketplaceID: isSet(object.MarketplaceID) ? bytesFromBase64(object.MarketplaceID) : new Uint8Array(),
      AssetID: isSet(object.AssetID) ? bytesFromBase64(object.AssetID) : new Uint8Array(),
      CurrencyID: isSet(object.CurrencyID) ? bytesFromBase64(object.CurrencyID) : new Uint8Array(),
      Price: isSet(object.Price) ? Number(object.Price) : 0,
      ReservePrice: isSet(object.ReservePrice) ? Number(object.ReservePrice) : 0,
      EndTime: isSet(object.EndTime) ? Number(object.EndTime) : 0,
    };
  },

  toJSON(message: SellContract): unknown {
    const obj: any = {};
    message.MarketType !== undefined && (obj.MarketType = sellContract_EnumMarketTypeToJSON(message.MarketType));
    message.MarketplaceID !== undefined &&
      (obj.MarketplaceID = base64FromBytes(
        message.MarketplaceID !== undefined ? message.MarketplaceID : new Uint8Array(),
      ));
    message.AssetID !== undefined &&
      (obj.AssetID = base64FromBytes(message.AssetID !== undefined ? message.AssetID : new Uint8Array()));
    message.CurrencyID !== undefined &&
      (obj.CurrencyID = base64FromBytes(message.CurrencyID !== undefined ? message.CurrencyID : new Uint8Array()));
    message.Price !== undefined && (obj.Price = Math.round(message.Price));
    message.ReservePrice !== undefined && (obj.ReservePrice = Math.round(message.ReservePrice));
    message.EndTime !== undefined && (obj.EndTime = Math.round(message.EndTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SellContract>, I>>(object: I): SellContract {
    const message = createBaseSellContract();
    message.MarketType = object.MarketType ?? 0;
    message.MarketplaceID = object.MarketplaceID ?? new Uint8Array();
    message.AssetID = object.AssetID ?? new Uint8Array();
    message.CurrencyID = object.CurrencyID ?? new Uint8Array();
    message.Price = object.Price ?? 0;
    message.ReservePrice = object.ReservePrice ?? 0;
    message.EndTime = object.EndTime ?? 0;
    return message;
  },
};

function createBaseCancelMarketOrderContract(): CancelMarketOrderContract {
  return { OrderID: new Uint8Array() };
}

export const CancelMarketOrderContract = {
  encode(message: CancelMarketOrderContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.OrderID !== undefined && message.OrderID.length !== 0) {
      writer.uint32(10).bytes(message.OrderID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelMarketOrderContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelMarketOrderContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.OrderID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelMarketOrderContract {
    return { OrderID: isSet(object.orderId) ? bytesFromBase64(object.orderId) : new Uint8Array() };
  },

  toJSON(message: CancelMarketOrderContract): unknown {
    const obj: any = {};
    message.OrderID !== undefined &&
      (obj.orderId = base64FromBytes(message.OrderID !== undefined ? message.OrderID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelMarketOrderContract>, I>>(object: I): CancelMarketOrderContract {
    const message = createBaseCancelMarketOrderContract();
    message.OrderID = object.OrderID ?? new Uint8Array();
    return message;
  },
};

function createBaseCreateMarketplaceContract(): CreateMarketplaceContract {
  return { Name: new Uint8Array(), ReferralAddress: new Uint8Array(), ReferralPercentage: 0 };
}

export const CreateMarketplaceContract = {
  encode(message: CreateMarketplaceContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(10).bytes(message.Name);
    }
    if (message.ReferralAddress !== undefined && message.ReferralAddress.length !== 0) {
      writer.uint32(18).bytes(message.ReferralAddress);
    }
    if (message.ReferralPercentage !== undefined && message.ReferralPercentage !== 0) {
      writer.uint32(24).uint32(message.ReferralPercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateMarketplaceContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateMarketplaceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Name = reader.bytes();
          break;
        case 2:
          message.ReferralAddress = reader.bytes();
          break;
        case 3:
          message.ReferralPercentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateMarketplaceContract {
    return {
      Name: isSet(object.Name) ? bytesFromBase64(object.Name) : new Uint8Array(),
      ReferralAddress: isSet(object.ReferralAddress) ? bytesFromBase64(object.ReferralAddress) : new Uint8Array(),
      ReferralPercentage: isSet(object.ReferralPercentage) ? Number(object.ReferralPercentage) : 0,
    };
  },

  toJSON(message: CreateMarketplaceContract): unknown {
    const obj: any = {};
    message.Name !== undefined &&
      (obj.Name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    message.ReferralAddress !== undefined &&
      (obj.ReferralAddress = base64FromBytes(
        message.ReferralAddress !== undefined ? message.ReferralAddress : new Uint8Array(),
      ));
    message.ReferralPercentage !== undefined && (obj.ReferralPercentage = Math.round(message.ReferralPercentage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateMarketplaceContract>, I>>(object: I): CreateMarketplaceContract {
    const message = createBaseCreateMarketplaceContract();
    message.Name = object.Name ?? new Uint8Array();
    message.ReferralAddress = object.ReferralAddress ?? new Uint8Array();
    message.ReferralPercentage = object.ReferralPercentage ?? 0;
    return message;
  },
};

function createBaseConfigMarketplaceContract(): ConfigMarketplaceContract {
  return {
    MarketplaceID: new Uint8Array(),
    Name: new Uint8Array(),
    ReferralAddress: new Uint8Array(),
    ReferralPercentage: 0,
  };
}

export const ConfigMarketplaceContract = {
  encode(message: ConfigMarketplaceContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MarketplaceID !== undefined && message.MarketplaceID.length !== 0) {
      writer.uint32(10).bytes(message.MarketplaceID);
    }
    if (message.Name !== undefined && message.Name.length !== 0) {
      writer.uint32(18).bytes(message.Name);
    }
    if (message.ReferralAddress !== undefined && message.ReferralAddress.length !== 0) {
      writer.uint32(26).bytes(message.ReferralAddress);
    }
    if (message.ReferralPercentage !== undefined && message.ReferralPercentage !== 0) {
      writer.uint32(32).uint32(message.ReferralPercentage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigMarketplaceContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigMarketplaceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MarketplaceID = reader.bytes();
          break;
        case 2:
          message.Name = reader.bytes();
          break;
        case 3:
          message.ReferralAddress = reader.bytes();
          break;
        case 4:
          message.ReferralPercentage = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConfigMarketplaceContract {
    return {
      MarketplaceID: isSet(object.MarketplaceID) ? bytesFromBase64(object.MarketplaceID) : new Uint8Array(),
      Name: isSet(object.Name) ? bytesFromBase64(object.Name) : new Uint8Array(),
      ReferralAddress: isSet(object.ReferralAddress) ? bytesFromBase64(object.ReferralAddress) : new Uint8Array(),
      ReferralPercentage: isSet(object.ReferralPercentage) ? Number(object.ReferralPercentage) : 0,
    };
  },

  toJSON(message: ConfigMarketplaceContract): unknown {
    const obj: any = {};
    message.MarketplaceID !== undefined &&
      (obj.MarketplaceID = base64FromBytes(
        message.MarketplaceID !== undefined ? message.MarketplaceID : new Uint8Array(),
      ));
    message.Name !== undefined &&
      (obj.Name = base64FromBytes(message.Name !== undefined ? message.Name : new Uint8Array()));
    message.ReferralAddress !== undefined &&
      (obj.ReferralAddress = base64FromBytes(
        message.ReferralAddress !== undefined ? message.ReferralAddress : new Uint8Array(),
      ));
    message.ReferralPercentage !== undefined && (obj.ReferralPercentage = Math.round(message.ReferralPercentage));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfigMarketplaceContract>, I>>(object: I): ConfigMarketplaceContract {
    const message = createBaseConfigMarketplaceContract();
    message.MarketplaceID = object.MarketplaceID ?? new Uint8Array();
    message.Name = object.Name ?? new Uint8Array();
    message.ReferralAddress = object.ReferralAddress ?? new Uint8Array();
    message.ReferralPercentage = object.ReferralPercentage ?? 0;
    return message;
  },
};

function createBaseAccKey(): AccKey {
  return { address: new Uint8Array(), weight: 0 };
}

export const AccKey = {
  encode(message: AccKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined && message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.weight !== undefined && message.weight !== 0) {
      writer.uint32(16).int64(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.weight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccKey {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      weight: isSet(object.weight) ? Number(object.weight) : 0,
    };
  },

  toJSON(message: AccKey): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.weight !== undefined && (obj.weight = Math.round(message.weight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccKey>, I>>(object: I): AccKey {
    const message = createBaseAccKey();
    message.address = object.address ?? new Uint8Array();
    message.weight = object.weight ?? 0;
    return message;
  },
};

function createBaseAccPermission(): AccPermission {
  return { Type: 0, PermissionName: "", Threshold: 0, Operations: new Uint8Array(), Signers: [] };
}

export const AccPermission = {
  encode(message: AccPermission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(16).int32(message.Type);
    }
    if (message.PermissionName !== undefined && message.PermissionName !== "") {
      writer.uint32(26).string(message.PermissionName);
    }
    if (message.Threshold !== undefined && message.Threshold !== 0) {
      writer.uint32(32).int64(message.Threshold);
    }
    if (message.Operations !== undefined && message.Operations.length !== 0) {
      writer.uint32(42).bytes(message.Operations);
    }
    if (message.Signers !== undefined && message.Signers.length !== 0) {
      for (const v of message.Signers) {
        AccKey.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccPermission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.Type = reader.int32() as any;
          break;
        case 3:
          message.PermissionName = reader.string();
          break;
        case 4:
          message.Threshold = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.Operations = reader.bytes();
          break;
        case 6:
          message.Signers!.push(AccKey.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccPermission {
    return {
      Type: isSet(object.Type) ? accPermission_AccPermissionTypeFromJSON(object.Type) : 0,
      PermissionName: isSet(object.PermissionName) ? String(object.PermissionName) : "",
      Threshold: isSet(object.Threshold) ? Number(object.Threshold) : 0,
      Operations: isSet(object.Operations) ? bytesFromBase64(object.Operations) : new Uint8Array(),
      Signers: Array.isArray(object?.Signers) ? object.Signers.map((e: any) => AccKey.fromJSON(e)) : [],
    };
  },

  toJSON(message: AccPermission): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = accPermission_AccPermissionTypeToJSON(message.Type));
    message.PermissionName !== undefined && (obj.PermissionName = message.PermissionName);
    message.Threshold !== undefined && (obj.Threshold = Math.round(message.Threshold));
    message.Operations !== undefined &&
      (obj.Operations = base64FromBytes(message.Operations !== undefined ? message.Operations : new Uint8Array()));
    if (message.Signers) {
      obj.Signers = message.Signers.map((e) => e ? AccKey.toJSON(e) : undefined);
    } else {
      obj.Signers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccPermission>, I>>(object: I): AccPermission {
    const message = createBaseAccPermission();
    message.Type = object.Type ?? 0;
    message.PermissionName = object.PermissionName ?? "";
    message.Threshold = object.Threshold ?? 0;
    message.Operations = object.Operations ?? new Uint8Array();
    message.Signers = object.Signers?.map((e) => AccKey.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateAccountPermissionContract(): UpdateAccountPermissionContract {
  return { Permissions: [] };
}

export const UpdateAccountPermissionContract = {
  encode(message: UpdateAccountPermissionContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Permissions !== undefined && message.Permissions.length !== 0) {
      for (const v of message.Permissions) {
        AccPermission.encode(v!, writer.uint32(66).fork()).ldelim();
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAccountPermissionContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccountPermissionContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.Permissions!.push(AccPermission.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAccountPermissionContract {
    return {
      Permissions: Array.isArray(object?.Permissions)
        ? object.Permissions.map((e: any) => AccPermission.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateAccountPermissionContract): unknown {
    const obj: any = {};
    if (message.Permissions) {
      obj.Permissions = message.Permissions.map((e) => e ? AccPermission.toJSON(e) : undefined);
    } else {
      obj.Permissions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAccountPermissionContract>, I>>(
    object: I,
  ): UpdateAccountPermissionContract {
    const message = createBaseUpdateAccountPermissionContract();
    message.Permissions = object.Permissions?.map((e) => AccPermission.fromPartial(e)) || [];
    return message;
  },
};

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "lib/transaction/proto/contracts.proto",
    "package": "proto",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "TransferContract",
      "field": [{
        "name": "ToAddress",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ToAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AssetID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 3,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Amount",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CreateAssetContract",
      "field": [{
        "name": "Type",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.CreateAssetContract.EnumAssetType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Name",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Ticker",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Ticker",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "OwnerAddress",
        "number": 4,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "OwnerAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Logo",
        "number": 5,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Logo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "URIs",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".proto.CreateAssetContract.URIsEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "URIs",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Precision",
        "number": 7,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Precision",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "InitialSupply",
        "number": 8,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "InitialSupply",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MaxSupply",
        "number": 9,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MaxSupply",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Royalties",
        "number": 10,
        "label": 1,
        "type": 11,
        "typeName": ".proto.RoyaltiesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Royalties",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Properties",
        "number": 11,
        "label": 1,
        "type": 11,
        "typeName": ".proto.PropertiesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Properties",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Attributes",
        "number": 12,
        "label": 1,
        "type": 11,
        "typeName": ".proto.AttributesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Attributes",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Staking",
        "number": 13,
        "label": 1,
        "type": 11,
        "typeName": ".proto.StakingInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Staking",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Roles",
        "number": 14,
        "label": 3,
        "type": 11,
        "typeName": ".proto.RolesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Roles",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "URIsEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "EnumAssetType",
        "value": [{ "name": "Fungible", "number": 0, "options": undefined }, {
          "name": "NonFungible",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PropertiesInfo",
      "field": [{
        "name": "CanFreeze",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanFreeze",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanWipe",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanWipe",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanPause",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanPause",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanMint",
        "number": 4,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanMint",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanBurn",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanBurn",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanChangeOwner",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanChangeOwner",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanAddRoles",
        "number": 7,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanAddRoles",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AttributesInfo",
      "field": [{
        "name": "IsPaused",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "IsPaused",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "IsNFTMintStopped",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "IsNFTMintStopped",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "StakingInfo",
      "field": [{
        "name": "Type",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.StakingInfo.InterestType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "APR",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "APR",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MinEpochsToClaim",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MinEpochsToClaim",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MinEpochsToUnstake",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MinEpochsToUnstake",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MinEpochsToWithdraw",
        "number": 5,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MinEpochsToWithdraw",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "InterestType",
        "value": [{ "name": "APRI", "number": 0, "options": undefined }, {
          "name": "FPRI",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RolesInfo",
      "field": [{
        "name": "Address",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "HasRoleMint",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "HasRoleMint",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "HasRoleSetITOPrices",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "HasRoleSetITOPrices",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RoyaltiesInfo",
      "field": [{
        "name": "Address",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "TransferPercentage",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".proto.RoyaltyInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "TransferPercentage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "TransferFixed",
        "number": 3,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "TransferFixed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MarketPercentage",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MarketPercentage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MarketFixed",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MarketFixed",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "RoyaltyInfo",
      "field": [{
        "name": "Amount",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Percentage",
        "number": 2,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "percentage",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AssetTriggerContract",
      "field": [{
        "name": "TriggerType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.AssetTriggerContract.EnumTriggerType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "TriggerType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AssetID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ToAddress",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ToAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MIME",
        "number": 5,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MIME",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Logo",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Logo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "URIs",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".proto.AssetTriggerContract.URIsEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "URIs",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Role",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".proto.RolesInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Role",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Staking",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".proto.StakingInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Staking",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "URIsEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "EnumTriggerType",
        "value": [
          { "name": "Mint", "number": 0, "options": undefined },
          { "name": "Burn", "number": 1, "options": undefined },
          { "name": "Wipe", "number": 2, "options": undefined },
          { "name": "Pause", "number": 3, "options": undefined },
          { "name": "Resume", "number": 4, "options": undefined },
          { "name": "ChangeOwner", "number": 5, "options": undefined },
          { "name": "AddRole", "number": 6, "options": undefined },
          { "name": "RemoveRole", "number": 7, "options": undefined },
          { "name": "UpdateMetadata", "number": 8, "options": undefined },
          { "name": "StopNFTMint", "number": 9, "options": undefined },
          { "name": "UpdateLogo", "number": 10, "options": undefined },
          { "name": "UpdateURIs", "number": 11, "options": undefined },
          { "name": "ChangeRoyaltiesReceiver", "number": 12, "options": undefined },
          { "name": "UpdateStaking", "number": 13, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ValidatorConfig",
      "field": [{
        "name": "BLSPublicKey",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "BLSPublicKey",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "RewardAddress",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "RewardAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CanDelegate",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CanDelegate",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Commission",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Commission",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MaxDelegationAmount",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MaxDelegationAmount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Logo",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Logo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "URIs",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ValidatorConfig.URIsEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "URIs",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Name",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Name",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "URIsEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CreateValidatorContract",
      "field": [{
        "name": "OwnerAddress",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "OwnerAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Config",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".proto.ValidatorConfig",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Config",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ValidatorConfigContract",
      "field": [{
        "name": "Config",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".proto.ValidatorConfig",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Config",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FreezeContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Amount",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UnfreezeContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "BucketID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "BucketID",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "DelegateContract",
      "field": [{
        "name": "ToAddress",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ToAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "BucketID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "BucketID",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UndelegateContract",
      "field": [{
        "name": "BucketID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "BucketID",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "WithdrawContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ClaimContract",
      "field": [{
        "name": "ClaimType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ClaimContract.EnumClaimType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ClaimType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ID",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumClaimType",
        "value": [{ "name": "StakingClaim", "number": 0, "options": undefined }, {
          "name": "AllowanceClaim",
          "number": 1,
          "options": undefined,
        }, { "name": "MarketClaim", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UnjailContract",
      "field": [],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SetAccountNameContract",
      "field": [{
        "name": "Name",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Name",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ProposalContract",
      "field": [{
        "name": "Parameters",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ProposalContract.ParametersEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Parameters",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Description",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Description",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "EpochsDuration",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "EpochsDuration",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "ParametersEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 12,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "VoteContract",
      "field": [{
        "name": "ProposalID",
        "number": 1,
        "label": 1,
        "type": 4,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ProposalID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Type",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".proto.VoteContract.EnumVoteType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Type",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumVoteType",
        "value": [{ "name": "Yes", "number": 0, "options": undefined }, {
          "name": "No",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ConfigITOContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReceiverAddress",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ReceiverAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Status",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".proto.ConfigITOContract.EnumITOStatus",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Status",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MaxAmount",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MaxAmount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PackInfo",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".proto.ConfigITOContract.PackInfoEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "PackInfo",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "PackInfoEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.PackInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [{
        "name": "EnumITOStatus",
        "value": [{ "name": "DefaultITO", "number": 0, "options": undefined }, {
          "name": "ActiveITO",
          "number": 1,
          "options": undefined,
        }, { "name": "PausedITO", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SetITOPricesContract",
      "field": [{
        "name": "AssetID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PackInfo",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".proto.SetITOPricesContract.PackInfoEntry",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "PackInfo",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "PackInfoEntry",
        "field": [{
          "name": "key",
          "number": 1,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "key",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "value",
          "number": 2,
          "label": 1,
          "type": 11,
          "typeName": ".proto.PackInfo",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "value",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": {
          "messageSetWireFormat": false,
          "noStandardDescriptorAccessor": false,
          "deprecated": false,
          "mapEntry": true,
          "uninterpretedOption": [],
        },
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackInfo",
      "field": [{
        "name": "Packs",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".proto.PackItem",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Packs",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "PackItem",
      "field": [{
        "name": "Amount",
        "number": 1,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Amount",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Price",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Price",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "BuyContract",
      "field": [{
        "name": "BuyType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.BuyContract.EnumBuyType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "BuyType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CurrencyID",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CurrencyID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Amount",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Amount",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumBuyType",
        "value": [{ "name": "ITOBuy", "number": 0, "options": undefined }, {
          "name": "MarketBuy",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SellContract",
      "field": [{
        "name": "MarketType",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.SellContract.EnumMarketType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MarketType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "MarketplaceID",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MarketplaceID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "AssetID",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "AssetID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "CurrencyID",
        "number": 4,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "CurrencyID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Price",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Price",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReservePrice",
        "number": 6,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ReservePrice",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "EndTime",
        "number": 7,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "EndTime",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "EnumMarketType",
        "value": [{ "name": "BuyItNowMarket", "number": 0, "options": undefined }, {
          "name": "AuctionMarket",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CancelMarketOrderContract",
      "field": [{
        "name": "OrderID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "orderId",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "CreateMarketplaceContract",
      "field": [{
        "name": "Name",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralAddress",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ReferralAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralPercentage",
        "number": 3,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ReferralPercentage",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ConfigMarketplaceContract",
      "field": [{
        "name": "MarketplaceID",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "MarketplaceID",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Name",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralAddress",
        "number": 3,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ReferralAddress",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ReferralPercentage",
        "number": 4,
        "label": 1,
        "type": 13,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ReferralPercentage",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AccKey",
      "field": [{
        "name": "address",
        "number": 1,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "address",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weight",
        "number": 2,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "weight",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "AccPermission",
      "field": [{
        "name": "Type",
        "number": 2,
        "label": 1,
        "type": 14,
        "typeName": ".proto.AccPermission.AccPermissionType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "PermissionName",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "PermissionName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Threshold",
        "number": 4,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Threshold",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Operations",
        "number": 5,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Operations",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Signers",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".proto.AccKey",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Signers",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "AccPermissionType",
        "value": [{ "name": "Owner", "number": 0, "options": undefined }, {
          "name": "User",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UpdateAccountPermissionContract",
      "field": [{
        "name": "Permissions",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".proto.AccPermission",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Permissions",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": {
      "javaPackage": "",
      "javaOuterClassname": "",
      "javaMultipleFiles": false,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "./;transaction",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": false,
      "objcClassPrefix": "",
      "csharpNamespace": "",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [7, 0, 11, 1],
        "leadingComments": " TXContract available\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [14, 0, 33, 1],
        "leadingComments": " CreateAssetContract holds the data for a Klever digital asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [36, 0, 44, 1],
        "leadingComments": " PropertiesInfo hold the properties structure for the KDA asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3],
        "span": [47, 0, 50, 1],
        "leadingComments": " AttributesInfo hold the attributes structure for the KDA asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4],
        "span": [53, 0, 63, 1],
        "leadingComments": " StakingInfo hold the staking structure for the KDA asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5],
        "span": [66, 0, 70, 1],
        "leadingComments": " RolesInfo holds the roles for a given asset and the given address\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [73, 0, 79, 1],
        "leadingComments": " RoyaltiesInfo holds the royalties for a given asset\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7],
        "span": [82, 0, 85, 1],
        "leadingComments": " RoyaltyInfo holds the royalty threshold\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [88, 0, 114, 1],
        "leadingComments": " AssetTriggerContract triggers assets functions\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9],
        "span": [117, 0, 126, 1],
        "leadingComments": " ValidatorConfig holds the data for a validator configuration\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10],
        "span": [129, 0, 132, 1],
        "leadingComments": " CreateValidatorContract holds the data for create a validator\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11],
        "span": [135, 0, 137, 1],
        "leadingComments": " ValidatorConfigContract holds the data for a validator configuration transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12],
        "span": [140, 0, 143, 1],
        "leadingComments": " FreezeContract holds the data for a freeze transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13],
        "span": [146, 0, 149, 1],
        "leadingComments": " UnfreezeContract holds the data for a unfreeze transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14],
        "span": [152, 0, 155, 1],
        "leadingComments": " DelegateContract holds the data for a delegate transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15],
        "span": [158, 0, 160, 1],
        "leadingComments": " UndelegateContract holds the data for a undelegate transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16],
        "span": [163, 0, 165, 1],
        "leadingComments": " WithdrawContract holds the data for a withdraw transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17],
        "span": [168, 0, 176, 1],
        "leadingComments": " ClaimContract holds the data for a claim transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18],
        "span": [179, 0, 25],
        "leadingComments": " UnjailContract holds the data for a unjail transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19],
        "span": [182, 0, 184, 1],
        "leadingComments": " SetAccountNameContract holds the data for a setAccountName transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20],
        "span": [187, 0, 191, 1],
        "leadingComments": " ProposalContract holds the data for a proposal transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 21],
        "span": [194, 0, 202, 1],
        "leadingComments": " VoteContract holds the data for a vote transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 22],
        "span": [205, 0, 216, 1],
        "leadingComments": " ConfigITOContract holds the data for a ConfigITO transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 23],
        "span": [219, 0, 222, 1],
        "leadingComments": " SetITOPrices holds the data for a ConfigITO transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 24],
        "span": [225, 0, 227, 1],
        "leadingComments": " PackInfo holds the pack list structure for the ITO contract\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 25],
        "span": [230, 0, 233, 1],
        "leadingComments": " PackItem hold the pack structure for the ITO contract\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 26],
        "span": [236, 0, 245, 1],
        "leadingComments": " BuyContract holds the data for a buy transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 27],
        "span": [248, 0, 260, 1],
        "leadingComments": " SellContract holds the data for a sell transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 28],
        "span": [263, 0, 265, 1],
        "leadingComments": " CancelMarketOrderContract holds the data for a cancel market transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 29],
        "span": [268, 0, 272, 1],
        "leadingComments": " CreateMarketplaceContract holds the data for a create marketplace transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 30],
        "span": [275, 0, 280, 1],
        "leadingComments": " ConfigMarketplaceContract holds the data for a config marketplace transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 31],
        "span": [283, 0, 286, 1],
        "leadingComments": " TODO: Reuse from account\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 33],
        "span": [301, 0, 303, 1],
        "leadingComments":
          " UpdateAccountPermissionContract holds the data for update account permission transaction\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".proto.TransferContract": TransferContract,
    ".proto.CreateAssetContract": CreateAssetContract,
    ".proto.CreateAssetContract.EnumAssetType": CreateAssetContract_EnumAssetType,
    ".proto.CreateAssetContract.URIsEntry": CreateAssetContract_URIsEntry,
    ".proto.PropertiesInfo": PropertiesInfo,
    ".proto.AttributesInfo": AttributesInfo,
    ".proto.StakingInfo": StakingInfo,
    ".proto.StakingInfo.InterestType": StakingInfo_InterestType,
    ".proto.RolesInfo": RolesInfo,
    ".proto.RoyaltiesInfo": RoyaltiesInfo,
    ".proto.RoyaltyInfo": RoyaltyInfo,
    ".proto.AssetTriggerContract": AssetTriggerContract,
    ".proto.AssetTriggerContract.EnumTriggerType": AssetTriggerContract_EnumTriggerType,
    ".proto.AssetTriggerContract.URIsEntry": AssetTriggerContract_URIsEntry,
    ".proto.ValidatorConfig": ValidatorConfig,
    ".proto.ValidatorConfig.URIsEntry": ValidatorConfig_URIsEntry,
    ".proto.CreateValidatorContract": CreateValidatorContract,
    ".proto.ValidatorConfigContract": ValidatorConfigContract,
    ".proto.FreezeContract": FreezeContract,
    ".proto.UnfreezeContract": UnfreezeContract,
    ".proto.DelegateContract": DelegateContract,
    ".proto.UndelegateContract": UndelegateContract,
    ".proto.WithdrawContract": WithdrawContract,
    ".proto.ClaimContract": ClaimContract,
    ".proto.ClaimContract.EnumClaimType": ClaimContract_EnumClaimType,
    ".proto.UnjailContract": UnjailContract,
    ".proto.SetAccountNameContract": SetAccountNameContract,
    ".proto.ProposalContract": ProposalContract,
    ".proto.ProposalContract.ParametersEntry": ProposalContract_ParametersEntry,
    ".proto.VoteContract": VoteContract,
    ".proto.VoteContract.EnumVoteType": VoteContract_EnumVoteType,
    ".proto.ConfigITOContract": ConfigITOContract,
    ".proto.ConfigITOContract.EnumITOStatus": ConfigITOContract_EnumITOStatus,
    ".proto.ConfigITOContract.PackInfoEntry": ConfigITOContract_PackInfoEntry,
    ".proto.SetITOPricesContract": SetITOPricesContract,
    ".proto.SetITOPricesContract.PackInfoEntry": SetITOPricesContract_PackInfoEntry,
    ".proto.PackInfo": PackInfo,
    ".proto.PackItem": PackItem,
    ".proto.BuyContract": BuyContract,
    ".proto.BuyContract.EnumBuyType": BuyContract_EnumBuyType,
    ".proto.SellContract": SellContract,
    ".proto.SellContract.EnumMarketType": SellContract_EnumMarketType,
    ".proto.CancelMarketOrderContract": CancelMarketOrderContract,
    ".proto.CreateMarketplaceContract": CreateMarketplaceContract,
    ".proto.ConfigMarketplaceContract": ConfigMarketplaceContract,
    ".proto.AccKey": AccKey,
    ".proto.AccPermission": AccPermission,
    ".proto.AccPermission.AccPermissionType": AccPermission_AccPermissionType,
    ".proto.UpdateAccountPermissionContract": UpdateAccountPermissionContract,
  },
  dependencies: [],
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
