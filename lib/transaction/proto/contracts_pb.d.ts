// package: proto
// file: lib/transaction/proto/contracts.proto

import * as jspb from "google-protobuf";

export class TransferContract extends jspb.Message {
  getToaddress(): Uint8Array | string;
  getToaddress_asU8(): Uint8Array;
  getToaddress_asB64(): string;
  setToaddress(value: Uint8Array | string): void;

  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferContract.AsObject;
  static toObject(includeInstance: boolean, msg: TransferContract): TransferContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferContract;
  static deserializeBinaryFromReader(message: TransferContract, reader: jspb.BinaryReader): TransferContract;
}

export namespace TransferContract {
  export type AsObject = {
    toaddress: Uint8Array | string,
    assetid: Uint8Array | string,
    amount: number,
  }
}

export class CreateAssetContract extends jspb.Message {
  getType(): CreateAssetContract.EnumAssetTypeMap[keyof CreateAssetContract.EnumAssetTypeMap];
  setType(value: CreateAssetContract.EnumAssetTypeMap[keyof CreateAssetContract.EnumAssetTypeMap]): void;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  getTicker(): Uint8Array | string;
  getTicker_asU8(): Uint8Array;
  getTicker_asB64(): string;
  setTicker(value: Uint8Array | string): void;

  getOwneraddress(): Uint8Array | string;
  getOwneraddress_asU8(): Uint8Array;
  getOwneraddress_asB64(): string;
  setOwneraddress(value: Uint8Array | string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getUrisMap(): jspb.Map<string, string>;
  clearUrisMap(): void;
  getPrecision(): number;
  setPrecision(value: number): void;

  getInitialsupply(): number;
  setInitialsupply(value: number): void;

  getMaxsupply(): number;
  setMaxsupply(value: number): void;

  hasRoyalties(): boolean;
  clearRoyalties(): void;
  getRoyalties(): RoyaltiesInfo | undefined;
  setRoyalties(value?: RoyaltiesInfo): void;

  hasProperties(): boolean;
  clearProperties(): void;
  getProperties(): PropertiesInfo | undefined;
  setProperties(value?: PropertiesInfo): void;

  hasAttributes(): boolean;
  clearAttributes(): void;
  getAttributes(): AttributesInfo | undefined;
  setAttributes(value?: AttributesInfo): void;

  hasStaking(): boolean;
  clearStaking(): void;
  getStaking(): StakingInfo | undefined;
  setStaking(value?: StakingInfo): void;

  clearRolesList(): void;
  getRolesList(): Array<RolesInfo>;
  setRolesList(value: Array<RolesInfo>): void;
  addRoles(value?: RolesInfo, index?: number): RolesInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAssetContract.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAssetContract): CreateAssetContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAssetContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAssetContract;
  static deserializeBinaryFromReader(message: CreateAssetContract, reader: jspb.BinaryReader): CreateAssetContract;
}

export namespace CreateAssetContract {
  export type AsObject = {
    type: CreateAssetContract.EnumAssetTypeMap[keyof CreateAssetContract.EnumAssetTypeMap],
    name: Uint8Array | string,
    ticker: Uint8Array | string,
    owneraddress: Uint8Array | string,
    logo: string,
    urisMap: Array<[string, string]>,
    precision: number,
    initialsupply: number,
    maxsupply: number,
    royalties?: RoyaltiesInfo.AsObject,
    properties?: PropertiesInfo.AsObject,
    attributes?: AttributesInfo.AsObject,
    staking?: StakingInfo.AsObject,
    rolesList: Array<RolesInfo.AsObject>,
  }

  export interface EnumAssetTypeMap {
    FUNGIBLE: 0;
    NONFUNGIBLE: 1;
  }

  export const EnumAssetType: EnumAssetTypeMap;
}

export class PropertiesInfo extends jspb.Message {
  getCanfreeze(): boolean;
  setCanfreeze(value: boolean): void;

  getCanwipe(): boolean;
  setCanwipe(value: boolean): void;

  getCanpause(): boolean;
  setCanpause(value: boolean): void;

  getCanmint(): boolean;
  setCanmint(value: boolean): void;

  getCanburn(): boolean;
  setCanburn(value: boolean): void;

  getCanchangeowner(): boolean;
  setCanchangeowner(value: boolean): void;

  getCanaddroles(): boolean;
  setCanaddroles(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertiesInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PropertiesInfo): PropertiesInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertiesInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertiesInfo;
  static deserializeBinaryFromReader(message: PropertiesInfo, reader: jspb.BinaryReader): PropertiesInfo;
}

export namespace PropertiesInfo {
  export type AsObject = {
    canfreeze: boolean,
    canwipe: boolean,
    canpause: boolean,
    canmint: boolean,
    canburn: boolean,
    canchangeowner: boolean,
    canaddroles: boolean,
  }
}

export class AttributesInfo extends jspb.Message {
  getIspaused(): boolean;
  setIspaused(value: boolean): void;

  getIsnftmintstopped(): boolean;
  setIsnftmintstopped(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributesInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AttributesInfo): AttributesInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributesInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributesInfo;
  static deserializeBinaryFromReader(message: AttributesInfo, reader: jspb.BinaryReader): AttributesInfo;
}

export namespace AttributesInfo {
  export type AsObject = {
    ispaused: boolean,
    isnftmintstopped: boolean,
  }
}

export class StakingInfo extends jspb.Message {
  getType(): StakingInfo.InterestTypeMap[keyof StakingInfo.InterestTypeMap];
  setType(value: StakingInfo.InterestTypeMap[keyof StakingInfo.InterestTypeMap]): void;

  getApr(): number;
  setApr(value: number): void;

  getMinepochstoclaim(): number;
  setMinepochstoclaim(value: number): void;

  getMinepochstounstake(): number;
  setMinepochstounstake(value: number): void;

  getMinepochstowithdraw(): number;
  setMinepochstowithdraw(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: StakingInfo): StakingInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingInfo;
  static deserializeBinaryFromReader(message: StakingInfo, reader: jspb.BinaryReader): StakingInfo;
}

export namespace StakingInfo {
  export type AsObject = {
    type: StakingInfo.InterestTypeMap[keyof StakingInfo.InterestTypeMap],
    apr: number,
    minepochstoclaim: number,
    minepochstounstake: number,
    minepochstowithdraw: number,
  }

  export interface InterestTypeMap {
    APRI: 0;
    FPRI: 1;
  }

  export const InterestType: InterestTypeMap;
}

export class RolesInfo extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getHasrolemint(): boolean;
  setHasrolemint(value: boolean): void;

  getHasrolesetitoprices(): boolean;
  setHasrolesetitoprices(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RolesInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RolesInfo): RolesInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RolesInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RolesInfo;
  static deserializeBinaryFromReader(message: RolesInfo, reader: jspb.BinaryReader): RolesInfo;
}

export namespace RolesInfo {
  export type AsObject = {
    address: Uint8Array | string,
    hasrolemint: boolean,
    hasrolesetitoprices: boolean,
  }
}

export class RoyaltiesInfo extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  clearTransferpercentageList(): void;
  getTransferpercentageList(): Array<RoyaltyInfo>;
  setTransferpercentageList(value: Array<RoyaltyInfo>): void;
  addTransferpercentage(value?: RoyaltyInfo, index?: number): RoyaltyInfo;

  getTransferfixed(): number;
  setTransferfixed(value: number): void;

  getMarketpercentage(): number;
  setMarketpercentage(value: number): void;

  getMarketfixed(): number;
  setMarketfixed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoyaltiesInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoyaltiesInfo): RoyaltiesInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoyaltiesInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoyaltiesInfo;
  static deserializeBinaryFromReader(message: RoyaltiesInfo, reader: jspb.BinaryReader): RoyaltiesInfo;
}

export namespace RoyaltiesInfo {
  export type AsObject = {
    address: Uint8Array | string,
    transferpercentageList: Array<RoyaltyInfo.AsObject>,
    transferfixed: number,
    marketpercentage: number,
    marketfixed: number,
  }
}

export class RoyaltyInfo extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getPercentage(): number;
  setPercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoyaltyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoyaltyInfo): RoyaltyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoyaltyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoyaltyInfo;
  static deserializeBinaryFromReader(message: RoyaltyInfo, reader: jspb.BinaryReader): RoyaltyInfo;
}

export namespace RoyaltyInfo {
  export type AsObject = {
    amount: number,
    percentage: number,
  }
}

export class AssetTriggerContract extends jspb.Message {
  getTriggertype(): AssetTriggerContract.EnumTriggerTypeMap[keyof AssetTriggerContract.EnumTriggerTypeMap];
  setTriggertype(value: AssetTriggerContract.EnumTriggerTypeMap[keyof AssetTriggerContract.EnumTriggerTypeMap]): void;

  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getToaddress(): Uint8Array | string;
  getToaddress_asU8(): Uint8Array;
  getToaddress_asB64(): string;
  setToaddress(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getMime(): Uint8Array | string;
  getMime_asU8(): Uint8Array;
  getMime_asB64(): string;
  setMime(value: Uint8Array | string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getUrisMap(): jspb.Map<string, string>;
  clearUrisMap(): void;
  hasRole(): boolean;
  clearRole(): void;
  getRole(): RolesInfo | undefined;
  setRole(value?: RolesInfo): void;

  hasStaking(): boolean;
  clearStaking(): void;
  getStaking(): StakingInfo | undefined;
  setStaking(value?: StakingInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetTriggerContract.AsObject;
  static toObject(includeInstance: boolean, msg: AssetTriggerContract): AssetTriggerContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetTriggerContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetTriggerContract;
  static deserializeBinaryFromReader(message: AssetTriggerContract, reader: jspb.BinaryReader): AssetTriggerContract;
}

export namespace AssetTriggerContract {
  export type AsObject = {
    triggertype: AssetTriggerContract.EnumTriggerTypeMap[keyof AssetTriggerContract.EnumTriggerTypeMap],
    assetid: Uint8Array | string,
    toaddress: Uint8Array | string,
    amount: number,
    mime: Uint8Array | string,
    logo: string,
    urisMap: Array<[string, string]>,
    role?: RolesInfo.AsObject,
    staking?: StakingInfo.AsObject,
  }

  export interface EnumTriggerTypeMap {
    MINT: 0;
    BURN: 1;
    WIPE: 2;
    PAUSE: 3;
    RESUME: 4;
    CHANGEOWNER: 5;
    ADDROLE: 6;
    REMOVEROLE: 7;
    UPDATEMETADATA: 8;
    STOPNFTMINT: 9;
    UPDATELOGO: 10;
    UPDATEURIS: 11;
    CHANGEROYALTIESRECEIVER: 12;
    UPDATESTAKING: 13;
  }

  export const EnumTriggerType: EnumTriggerTypeMap;
}

export class ValidatorConfig extends jspb.Message {
  getBlspublickey(): Uint8Array | string;
  getBlspublickey_asU8(): Uint8Array;
  getBlspublickey_asB64(): string;
  setBlspublickey(value: Uint8Array | string): void;

  getRewardaddress(): Uint8Array | string;
  getRewardaddress_asU8(): Uint8Array;
  getRewardaddress_asB64(): string;
  setRewardaddress(value: Uint8Array | string): void;

  getCandelegate(): boolean;
  setCandelegate(value: boolean): void;

  getCommission(): number;
  setCommission(value: number): void;

  getMaxdelegationamount(): number;
  setMaxdelegationamount(value: number): void;

  getLogo(): string;
  setLogo(value: string): void;

  getUrisMap(): jspb.Map<string, string>;
  clearUrisMap(): void;
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorConfig): ValidatorConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorConfig;
  static deserializeBinaryFromReader(message: ValidatorConfig, reader: jspb.BinaryReader): ValidatorConfig;
}

export namespace ValidatorConfig {
  export type AsObject = {
    blspublickey: Uint8Array | string,
    rewardaddress: Uint8Array | string,
    candelegate: boolean,
    commission: number,
    maxdelegationamount: number,
    logo: string,
    urisMap: Array<[string, string]>,
    name: string,
  }
}

export class CreateValidatorContract extends jspb.Message {
  getOwneraddress(): Uint8Array | string;
  getOwneraddress_asU8(): Uint8Array;
  getOwneraddress_asB64(): string;
  setOwneraddress(value: Uint8Array | string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ValidatorConfig | undefined;
  setConfig(value?: ValidatorConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateValidatorContract.AsObject;
  static toObject(includeInstance: boolean, msg: CreateValidatorContract): CreateValidatorContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateValidatorContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateValidatorContract;
  static deserializeBinaryFromReader(message: CreateValidatorContract, reader: jspb.BinaryReader): CreateValidatorContract;
}

export namespace CreateValidatorContract {
  export type AsObject = {
    owneraddress: Uint8Array | string,
    config?: ValidatorConfig.AsObject,
  }
}

export class ValidatorConfigContract extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): ValidatorConfig | undefined;
  setConfig(value?: ValidatorConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorConfigContract.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorConfigContract): ValidatorConfigContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidatorConfigContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorConfigContract;
  static deserializeBinaryFromReader(message: ValidatorConfigContract, reader: jspb.BinaryReader): ValidatorConfigContract;
}

export namespace ValidatorConfigContract {
  export type AsObject = {
    config?: ValidatorConfig.AsObject,
  }
}

export class FreezeContract extends jspb.Message {
  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FreezeContract.AsObject;
  static toObject(includeInstance: boolean, msg: FreezeContract): FreezeContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FreezeContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FreezeContract;
  static deserializeBinaryFromReader(message: FreezeContract, reader: jspb.BinaryReader): FreezeContract;
}

export namespace FreezeContract {
  export type AsObject = {
    assetid: Uint8Array | string,
    amount: number,
  }
}

export class UnfreezeContract extends jspb.Message {
  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getBucketid(): Uint8Array | string;
  getBucketid_asU8(): Uint8Array;
  getBucketid_asB64(): string;
  setBucketid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnfreezeContract.AsObject;
  static toObject(includeInstance: boolean, msg: UnfreezeContract): UnfreezeContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnfreezeContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnfreezeContract;
  static deserializeBinaryFromReader(message: UnfreezeContract, reader: jspb.BinaryReader): UnfreezeContract;
}

export namespace UnfreezeContract {
  export type AsObject = {
    assetid: Uint8Array | string,
    bucketid: Uint8Array | string,
  }
}

export class DelegateContract extends jspb.Message {
  getToaddress(): Uint8Array | string;
  getToaddress_asU8(): Uint8Array;
  getToaddress_asB64(): string;
  setToaddress(value: Uint8Array | string): void;

  getBucketid(): Uint8Array | string;
  getBucketid_asU8(): Uint8Array;
  getBucketid_asB64(): string;
  setBucketid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegateContract.AsObject;
  static toObject(includeInstance: boolean, msg: DelegateContract): DelegateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DelegateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegateContract;
  static deserializeBinaryFromReader(message: DelegateContract, reader: jspb.BinaryReader): DelegateContract;
}

export namespace DelegateContract {
  export type AsObject = {
    toaddress: Uint8Array | string,
    bucketid: Uint8Array | string,
  }
}

export class UndelegateContract extends jspb.Message {
  getBucketid(): Uint8Array | string;
  getBucketid_asU8(): Uint8Array;
  getBucketid_asB64(): string;
  setBucketid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndelegateContract.AsObject;
  static toObject(includeInstance: boolean, msg: UndelegateContract): UndelegateContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UndelegateContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndelegateContract;
  static deserializeBinaryFromReader(message: UndelegateContract, reader: jspb.BinaryReader): UndelegateContract;
}

export namespace UndelegateContract {
  export type AsObject = {
    bucketid: Uint8Array | string,
  }
}

export class WithdrawContract extends jspb.Message {
  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawContract.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawContract): WithdrawContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawContract;
  static deserializeBinaryFromReader(message: WithdrawContract, reader: jspb.BinaryReader): WithdrawContract;
}

export namespace WithdrawContract {
  export type AsObject = {
    assetid: Uint8Array | string,
  }
}

export class ClaimContract extends jspb.Message {
  getClaimtype(): ClaimContract.EnumClaimTypeMap[keyof ClaimContract.EnumClaimTypeMap];
  setClaimtype(value: ClaimContract.EnumClaimTypeMap[keyof ClaimContract.EnumClaimTypeMap]): void;

  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimContract.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimContract): ClaimContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimContract;
  static deserializeBinaryFromReader(message: ClaimContract, reader: jspb.BinaryReader): ClaimContract;
}

export namespace ClaimContract {
  export type AsObject = {
    claimtype: ClaimContract.EnumClaimTypeMap[keyof ClaimContract.EnumClaimTypeMap],
    id: Uint8Array | string,
  }

  export interface EnumClaimTypeMap {
    STAKINGCLAIM: 0;
    ALLOWANCECLAIM: 1;
    MARKETCLAIM: 2;
  }

  export const EnumClaimType: EnumClaimTypeMap;
}

export class UnjailContract extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnjailContract.AsObject;
  static toObject(includeInstance: boolean, msg: UnjailContract): UnjailContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnjailContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnjailContract;
  static deserializeBinaryFromReader(message: UnjailContract, reader: jspb.BinaryReader): UnjailContract;
}

export namespace UnjailContract {
  export type AsObject = {
  }
}

export class SetAccountNameContract extends jspb.Message {
  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAccountNameContract.AsObject;
  static toObject(includeInstance: boolean, msg: SetAccountNameContract): SetAccountNameContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAccountNameContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAccountNameContract;
  static deserializeBinaryFromReader(message: SetAccountNameContract, reader: jspb.BinaryReader): SetAccountNameContract;
}

export namespace SetAccountNameContract {
  export type AsObject = {
    name: Uint8Array | string,
  }
}

export class ProposalContract extends jspb.Message {
  getParametersMap(): jspb.Map<number, Uint8Array | string>;
  clearParametersMap(): void;
  getDescription(): Uint8Array | string;
  getDescription_asU8(): Uint8Array;
  getDescription_asB64(): string;
  setDescription(value: Uint8Array | string): void;

  getEpochsduration(): number;
  setEpochsduration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalContract.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalContract): ProposalContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProposalContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalContract;
  static deserializeBinaryFromReader(message: ProposalContract, reader: jspb.BinaryReader): ProposalContract;
}

export namespace ProposalContract {
  export type AsObject = {
    parametersMap: Array<[number, Uint8Array | string]>,
    description: Uint8Array | string,
    epochsduration: number,
  }
}

export class VoteContract extends jspb.Message {
  getProposalid(): number;
  setProposalid(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getType(): VoteContract.EnumVoteTypeMap[keyof VoteContract.EnumVoteTypeMap];
  setType(value: VoteContract.EnumVoteTypeMap[keyof VoteContract.EnumVoteTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VoteContract.AsObject;
  static toObject(includeInstance: boolean, msg: VoteContract): VoteContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VoteContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VoteContract;
  static deserializeBinaryFromReader(message: VoteContract, reader: jspb.BinaryReader): VoteContract;
}

export namespace VoteContract {
  export type AsObject = {
    proposalid: number,
    amount: number,
    type: VoteContract.EnumVoteTypeMap[keyof VoteContract.EnumVoteTypeMap],
  }

  export interface EnumVoteTypeMap {
    YES: 0;
    NO: 1;
  }

  export const EnumVoteType: EnumVoteTypeMap;
}

export class ConfigITOContract extends jspb.Message {
  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getReceiveraddress(): Uint8Array | string;
  getReceiveraddress_asU8(): Uint8Array;
  getReceiveraddress_asB64(): string;
  setReceiveraddress(value: Uint8Array | string): void;

  getStatus(): ConfigITOContract.EnumITOStatusMap[keyof ConfigITOContract.EnumITOStatusMap];
  setStatus(value: ConfigITOContract.EnumITOStatusMap[keyof ConfigITOContract.EnumITOStatusMap]): void;

  getMaxamount(): number;
  setMaxamount(value: number): void;

  getPackinfoMap(): jspb.Map<string, PackInfo>;
  clearPackinfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigITOContract.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigITOContract): ConfigITOContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigITOContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigITOContract;
  static deserializeBinaryFromReader(message: ConfigITOContract, reader: jspb.BinaryReader): ConfigITOContract;
}

export namespace ConfigITOContract {
  export type AsObject = {
    assetid: Uint8Array | string,
    receiveraddress: Uint8Array | string,
    status: ConfigITOContract.EnumITOStatusMap[keyof ConfigITOContract.EnumITOStatusMap],
    maxamount: number,
    packinfoMap: Array<[string, PackInfo.AsObject]>,
  }

  export interface EnumITOStatusMap {
    DEFAULTITO: 0;
    ACTIVEITO: 1;
    PAUSEDITO: 2;
  }

  export const EnumITOStatus: EnumITOStatusMap;
}

export class SetITOPricesContract extends jspb.Message {
  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getPackinfoMap(): jspb.Map<string, PackInfo>;
  clearPackinfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetITOPricesContract.AsObject;
  static toObject(includeInstance: boolean, msg: SetITOPricesContract): SetITOPricesContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetITOPricesContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetITOPricesContract;
  static deserializeBinaryFromReader(message: SetITOPricesContract, reader: jspb.BinaryReader): SetITOPricesContract;
}

export namespace SetITOPricesContract {
  export type AsObject = {
    assetid: Uint8Array | string,
    packinfoMap: Array<[string, PackInfo.AsObject]>,
  }
}

export class PackInfo extends jspb.Message {
  clearPacksList(): void;
  getPacksList(): Array<PackItem>;
  setPacksList(value: Array<PackItem>): void;
  addPacks(value?: PackItem, index?: number): PackItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PackInfo): PackInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackInfo;
  static deserializeBinaryFromReader(message: PackInfo, reader: jspb.BinaryReader): PackInfo;
}

export namespace PackInfo {
  export type AsObject = {
    packsList: Array<PackItem.AsObject>,
  }
}

export class PackItem extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackItem.AsObject;
  static toObject(includeInstance: boolean, msg: PackItem): PackItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PackItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PackItem;
  static deserializeBinaryFromReader(message: PackItem, reader: jspb.BinaryReader): PackItem;
}

export namespace PackItem {
  export type AsObject = {
    amount: number,
    price: number,
  }
}

export class BuyContract extends jspb.Message {
  getBuytype(): BuyContract.EnumBuyTypeMap[keyof BuyContract.EnumBuyTypeMap];
  setBuytype(value: BuyContract.EnumBuyTypeMap[keyof BuyContract.EnumBuyTypeMap]): void;

  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getCurrencyid(): Uint8Array | string;
  getCurrencyid_asU8(): Uint8Array;
  getCurrencyid_asB64(): string;
  setCurrencyid(value: Uint8Array | string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuyContract.AsObject;
  static toObject(includeInstance: boolean, msg: BuyContract): BuyContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BuyContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuyContract;
  static deserializeBinaryFromReader(message: BuyContract, reader: jspb.BinaryReader): BuyContract;
}

export namespace BuyContract {
  export type AsObject = {
    buytype: BuyContract.EnumBuyTypeMap[keyof BuyContract.EnumBuyTypeMap],
    id: Uint8Array | string,
    currencyid: Uint8Array | string,
    amount: number,
  }

  export interface EnumBuyTypeMap {
    ITOBUY: 0;
    MARKETBUY: 1;
  }

  export const EnumBuyType: EnumBuyTypeMap;
}

export class SellContract extends jspb.Message {
  getMarkettype(): SellContract.EnumMarketTypeMap[keyof SellContract.EnumMarketTypeMap];
  setMarkettype(value: SellContract.EnumMarketTypeMap[keyof SellContract.EnumMarketTypeMap]): void;

  getMarketplaceid(): Uint8Array | string;
  getMarketplaceid_asU8(): Uint8Array;
  getMarketplaceid_asB64(): string;
  setMarketplaceid(value: Uint8Array | string): void;

  getAssetid(): Uint8Array | string;
  getAssetid_asU8(): Uint8Array;
  getAssetid_asB64(): string;
  setAssetid(value: Uint8Array | string): void;

  getCurrencyid(): Uint8Array | string;
  getCurrencyid_asU8(): Uint8Array;
  getCurrencyid_asB64(): string;
  setCurrencyid(value: Uint8Array | string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getReserveprice(): number;
  setReserveprice(value: number): void;

  getEndtime(): number;
  setEndtime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellContract.AsObject;
  static toObject(includeInstance: boolean, msg: SellContract): SellContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SellContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellContract;
  static deserializeBinaryFromReader(message: SellContract, reader: jspb.BinaryReader): SellContract;
}

export namespace SellContract {
  export type AsObject = {
    markettype: SellContract.EnumMarketTypeMap[keyof SellContract.EnumMarketTypeMap],
    marketplaceid: Uint8Array | string,
    assetid: Uint8Array | string,
    currencyid: Uint8Array | string,
    price: number,
    reserveprice: number,
    endtime: number,
  }

  export interface EnumMarketTypeMap {
    BUYITNOWMARKET: 0;
    AUCTIONMARKET: 1;
  }

  export const EnumMarketType: EnumMarketTypeMap;
}

export class CancelMarketOrderContract extends jspb.Message {
  getOrderid(): Uint8Array | string;
  getOrderid_asU8(): Uint8Array;
  getOrderid_asB64(): string;
  setOrderid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelMarketOrderContract.AsObject;
  static toObject(includeInstance: boolean, msg: CancelMarketOrderContract): CancelMarketOrderContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelMarketOrderContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelMarketOrderContract;
  static deserializeBinaryFromReader(message: CancelMarketOrderContract, reader: jspb.BinaryReader): CancelMarketOrderContract;
}

export namespace CancelMarketOrderContract {
  export type AsObject = {
    orderid: Uint8Array | string,
  }
}

export class CreateMarketplaceContract extends jspb.Message {
  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  getReferraladdress(): Uint8Array | string;
  getReferraladdress_asU8(): Uint8Array;
  getReferraladdress_asB64(): string;
  setReferraladdress(value: Uint8Array | string): void;

  getReferralpercentage(): number;
  setReferralpercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMarketplaceContract.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMarketplaceContract): CreateMarketplaceContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMarketplaceContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMarketplaceContract;
  static deserializeBinaryFromReader(message: CreateMarketplaceContract, reader: jspb.BinaryReader): CreateMarketplaceContract;
}

export namespace CreateMarketplaceContract {
  export type AsObject = {
    name: Uint8Array | string,
    referraladdress: Uint8Array | string,
    referralpercentage: number,
  }
}

export class ConfigMarketplaceContract extends jspb.Message {
  getMarketplaceid(): Uint8Array | string;
  getMarketplaceid_asU8(): Uint8Array;
  getMarketplaceid_asB64(): string;
  setMarketplaceid(value: Uint8Array | string): void;

  getName(): Uint8Array | string;
  getName_asU8(): Uint8Array;
  getName_asB64(): string;
  setName(value: Uint8Array | string): void;

  getReferraladdress(): Uint8Array | string;
  getReferraladdress_asU8(): Uint8Array;
  getReferraladdress_asB64(): string;
  setReferraladdress(value: Uint8Array | string): void;

  getReferralpercentage(): number;
  setReferralpercentage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMarketplaceContract.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMarketplaceContract): ConfigMarketplaceContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigMarketplaceContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMarketplaceContract;
  static deserializeBinaryFromReader(message: ConfigMarketplaceContract, reader: jspb.BinaryReader): ConfigMarketplaceContract;
}

export namespace ConfigMarketplaceContract {
  export type AsObject = {
    marketplaceid: Uint8Array | string,
    name: Uint8Array | string,
    referraladdress: Uint8Array | string,
    referralpercentage: number,
  }
}

export class AccKey extends jspb.Message {
  getAddress(): Uint8Array | string;
  getAddress_asU8(): Uint8Array;
  getAddress_asB64(): string;
  setAddress(value: Uint8Array | string): void;

  getWeight(): number;
  setWeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccKey.AsObject;
  static toObject(includeInstance: boolean, msg: AccKey): AccKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccKey;
  static deserializeBinaryFromReader(message: AccKey, reader: jspb.BinaryReader): AccKey;
}

export namespace AccKey {
  export type AsObject = {
    address: Uint8Array | string,
    weight: number,
  }
}

export class AccPermission extends jspb.Message {
  getType(): AccPermission.AccPermissionTypeMap[keyof AccPermission.AccPermissionTypeMap];
  setType(value: AccPermission.AccPermissionTypeMap[keyof AccPermission.AccPermissionTypeMap]): void;

  getPermissionname(): string;
  setPermissionname(value: string): void;

  getThreshold(): number;
  setThreshold(value: number): void;

  getOperations(): Uint8Array | string;
  getOperations_asU8(): Uint8Array;
  getOperations_asB64(): string;
  setOperations(value: Uint8Array | string): void;

  clearSignersList(): void;
  getSignersList(): Array<AccKey>;
  setSignersList(value: Array<AccKey>): void;
  addSigners(value?: AccKey, index?: number): AccKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccPermission.AsObject;
  static toObject(includeInstance: boolean, msg: AccPermission): AccPermission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccPermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccPermission;
  static deserializeBinaryFromReader(message: AccPermission, reader: jspb.BinaryReader): AccPermission;
}

export namespace AccPermission {
  export type AsObject = {
    type: AccPermission.AccPermissionTypeMap[keyof AccPermission.AccPermissionTypeMap],
    permissionname: string,
    threshold: number,
    operations: Uint8Array | string,
    signersList: Array<AccKey.AsObject>,
  }

  export interface AccPermissionTypeMap {
    OWNER: 0;
    USER: 1;
  }

  export const AccPermissionType: AccPermissionTypeMap;
}

export class UpdateAccountPermissionContract extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<AccPermission>;
  setPermissionsList(value: Array<AccPermission>): void;
  addPermissions(value?: AccPermission, index?: number): AccPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountPermissionContract.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountPermissionContract): UpdateAccountPermissionContract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateAccountPermissionContract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountPermissionContract;
  static deserializeBinaryFromReader(message: UpdateAccountPermissionContract, reader: jspb.BinaryReader): UpdateAccountPermissionContract;
}

export namespace UpdateAccountPermissionContract {
  export type AsObject = {
    permissionsList: Array<AccPermission.AsObject>,
  }
}

