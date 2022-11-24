/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";
import { Any, protoMetadata as protoMetadata1 } from "../../../google/protobuf/any";

export const protobufPackage = "proto";

/** TXContract available */
export interface TXContract {
  Type?: TXContract_ContractType;
  Parameter?: Any;
}

export enum TXContract_ContractType {
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
  UNRECOGNIZED = -1,
}

export function tXContract_ContractTypeFromJSON(object: any): TXContract_ContractType {
  switch (object) {
    case 0:
    case "TransferContractType":
      return TXContract_ContractType.TransferContractType;
    case 1:
    case "CreateAssetContractType":
      return TXContract_ContractType.CreateAssetContractType;
    case 2:
    case "CreateValidatorContractType":
      return TXContract_ContractType.CreateValidatorContractType;
    case 3:
    case "ValidatorConfigContractType":
      return TXContract_ContractType.ValidatorConfigContractType;
    case 4:
    case "FreezeContractType":
      return TXContract_ContractType.FreezeContractType;
    case 5:
    case "UnfreezeContractType":
      return TXContract_ContractType.UnfreezeContractType;
    case 6:
    case "DelegateContractType":
      return TXContract_ContractType.DelegateContractType;
    case 7:
    case "UndelegateContractType":
      return TXContract_ContractType.UndelegateContractType;
    case 8:
    case "WithdrawContractType":
      return TXContract_ContractType.WithdrawContractType;
    case 9:
    case "ClaimContractType":
      return TXContract_ContractType.ClaimContractType;
    case 10:
    case "UnjailContractType":
      return TXContract_ContractType.UnjailContractType;
    case 11:
    case "AssetTriggerContractType":
      return TXContract_ContractType.AssetTriggerContractType;
    case 12:
    case "SetAccountNameContractType":
      return TXContract_ContractType.SetAccountNameContractType;
    case 13:
    case "ProposalContractType":
      return TXContract_ContractType.ProposalContractType;
    case 14:
    case "VoteContractType":
      return TXContract_ContractType.VoteContractType;
    case 15:
    case "ConfigITOContractType":
      return TXContract_ContractType.ConfigITOContractType;
    case 16:
    case "SetITOPricesContractType":
      return TXContract_ContractType.SetITOPricesContractType;
    case 17:
    case "BuyContractType":
      return TXContract_ContractType.BuyContractType;
    case 18:
    case "SellContractType":
      return TXContract_ContractType.SellContractType;
    case 19:
    case "CancelMarketOrderContractType":
      return TXContract_ContractType.CancelMarketOrderContractType;
    case 20:
    case "CreateMarketplaceContractType":
      return TXContract_ContractType.CreateMarketplaceContractType;
    case 21:
    case "ConfigMarketplaceContractType":
      return TXContract_ContractType.ConfigMarketplaceContractType;
    case 22:
    case "UpdateAccountPermissionContractType":
      return TXContract_ContractType.UpdateAccountPermissionContractType;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TXContract_ContractType.UNRECOGNIZED;
  }
}

export function tXContract_ContractTypeToJSON(object: TXContract_ContractType): number {
  switch (object) {
    case TXContract_ContractType.TransferContractType:
      return 0;
    case TXContract_ContractType.CreateAssetContractType:
      return 1;
    case TXContract_ContractType.CreateValidatorContractType:
      return 2;
    case TXContract_ContractType.ValidatorConfigContractType:
      return 3;
    case TXContract_ContractType.FreezeContractType:
      return 4;
    case TXContract_ContractType.UnfreezeContractType:
      return 5;
    case TXContract_ContractType.DelegateContractType:
      return 6;
    case TXContract_ContractType.UndelegateContractType:
      return 7;
    case TXContract_ContractType.WithdrawContractType:
      return 8;
    case TXContract_ContractType.ClaimContractType:
      return 9;
    case TXContract_ContractType.UnjailContractType:
      return 10;
    case TXContract_ContractType.AssetTriggerContractType:
      return 11;
    case TXContract_ContractType.SetAccountNameContractType:
      return 12;
    case TXContract_ContractType.ProposalContractType:
      return 13;
    case TXContract_ContractType.VoteContractType:
      return 14;
    case TXContract_ContractType.ConfigITOContractType:
      return 15;
    case TXContract_ContractType.SetITOPricesContractType:
      return 16;
    case TXContract_ContractType.BuyContractType:
      return 17;
    case TXContract_ContractType.SellContractType:
      return 18;
    case TXContract_ContractType.CancelMarketOrderContractType:
      return 19;
    case TXContract_ContractType.CreateMarketplaceContractType:
      return 20;
    case TXContract_ContractType.ConfigMarketplaceContractType:
      return 21;
    case TXContract_ContractType.UpdateAccountPermissionContractType:
      return 22;
    case TXContract_ContractType.UNRECOGNIZED:
    default:
      return -1;
  }
}

/** Transaction holds all the data needed for a value transfer */
export interface Transaction {
  RawData?: Transaction_Raw;
  Signature?: Uint8Array[];
  Result?: Transaction_TXResult;
  ResultCode?: Transaction_TXResultCode;
  Receipts?: Transaction_Receipt[];
  Block?: number;
}

export enum Transaction_TXResult {
  SUCCESS = 0,
  FAILED = 1,
  UNRECOGNIZED = -1,
}

export function transaction_TXResultFromJSON(object: any): Transaction_TXResult {
  switch (object) {
    case 0:
    case "SUCCESS":
      return Transaction_TXResult.SUCCESS;
    case 1:
    case "FAILED":
      return Transaction_TXResult.FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Transaction_TXResult.UNRECOGNIZED;
  }
}

export function transaction_TXResultToJSON(object: Transaction_TXResult): number {
  switch (object) {
    case Transaction_TXResult.SUCCESS:
      return 0;
    case Transaction_TXResult.FAILED:
      return 1;
    case Transaction_TXResult.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum Transaction_TXResultCode {
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
  UNRECOGNIZED = -1,
}

export function transaction_TXResultCodeFromJSON(object: any): Transaction_TXResultCode {
  switch (object) {
    case 0:
    case "Ok":
      return Transaction_TXResultCode.Ok;
    case 1:
    case "OutOfFunds":
      return Transaction_TXResultCode.OutOfFunds;
    case 2:
    case "AccountError":
      return Transaction_TXResultCode.AccountError;
    case 3:
    case "AssetError":
      return Transaction_TXResultCode.AssetError;
    case 4:
    case "ContractInvalid":
      return Transaction_TXResultCode.ContractInvalid;
    case 5:
    case "ContractNotFound":
      return Transaction_TXResultCode.ContractNotFound;
    case 6:
    case "FeeInvalid":
      return Transaction_TXResultCode.FeeInvalid;
    case 7:
    case "ParameterInvalid":
      return Transaction_TXResultCode.ParameterInvalid;
    case 8:
    case "APRInvalid":
      return Transaction_TXResultCode.APRInvalid;
    case 9:
    case "AssetIDInvalid":
      return Transaction_TXResultCode.AssetIDInvalid;
    case 10:
    case "AssetTypeInvalid":
      return Transaction_TXResultCode.AssetTypeInvalid;
    case 11:
    case "AssetCantBeMinted":
      return Transaction_TXResultCode.AssetCantBeMinted;
    case 12:
    case "AssetCantBeBurned":
      return Transaction_TXResultCode.AssetCantBeBurned;
    case 13:
    case "AssetCantBePaused":
      return Transaction_TXResultCode.AssetCantBePaused;
    case 14:
    case "AssetCantBeDelegated":
      return Transaction_TXResultCode.AssetCantBeDelegated;
    case 15:
    case "AssetOwnerCantBeChanged":
      return Transaction_TXResultCode.AssetOwnerCantBeChanged;
    case 16:
    case "AccountNotOwner":
      return Transaction_TXResultCode.AccountNotOwner;
    case 17:
    case "CommissionTooHigh":
      return Transaction_TXResultCode.CommissionTooHigh;
    case 18:
    case "DelegationAmountInvalid":
      return Transaction_TXResultCode.DelegationAmountInvalid;
    case 19:
    case "ProposalNotActive":
      return Transaction_TXResultCode.ProposalNotActive;
    case 20:
    case "ValueInvalid":
      return Transaction_TXResultCode.ValueInvalid;
    case 21:
    case "AmountInvalid":
      return Transaction_TXResultCode.AmountInvalid;
    case 22:
    case "BucketIDInvalid":
      return Transaction_TXResultCode.BucketIDInvalid;
    case 23:
    case "KeyConflict":
      return Transaction_TXResultCode.KeyConflict;
    case 24:
    case "MaxDelegationAmount":
      return Transaction_TXResultCode.MaxDelegationAmount;
    case 25:
    case "InvalidPeerKey":
      return Transaction_TXResultCode.InvalidPeerKey;
    case 26:
    case "MinKFIStakedUnreached":
      return Transaction_TXResultCode.MinKFIStakedUnreached;
    case 27:
    case "MaxSupplyExeeced":
      return Transaction_TXResultCode.MaxSupplyExeeced;
    case 28:
    case "SaveAccountError":
      return Transaction_TXResultCode.SaveAccountError;
    case 29:
    case "LoadAccountError":
      return Transaction_TXResultCode.LoadAccountError;
    case 30:
    case "SameAccountError":
      return Transaction_TXResultCode.SameAccountError;
    case 31:
    case "AssetPaused":
      return Transaction_TXResultCode.AssetPaused;
    case 32:
    case "DeletegateError":
      return Transaction_TXResultCode.DeletegateError;
    case 33:
    case "WithdrawNotAvailable":
      return Transaction_TXResultCode.WithdrawNotAvailable;
    case 34:
    case "ErrOverflow":
      return Transaction_TXResultCode.ErrOverflow;
    case 35:
    case "SetStakingErr":
      return Transaction_TXResultCode.SetStakingErr;
    case 36:
    case "SetMarketOrderErr":
      return Transaction_TXResultCode.SetMarketOrderErr;
    case 37:
    case "BalanceError":
      return Transaction_TXResultCode.BalanceError;
    case 38:
    case "KAPPError":
      return Transaction_TXResultCode.KAPPError;
    case 39:
    case "UnfreezeError":
      return Transaction_TXResultCode.UnfreezeError;
    case 40:
    case "UndeletegateError":
      return Transaction_TXResultCode.UndeletegateError;
    case 41:
    case "WithdrawError":
      return Transaction_TXResultCode.WithdrawError;
    case 42:
    case "ClaimError":
      return Transaction_TXResultCode.ClaimError;
    case 43:
    case "BucketsExceded":
      return Transaction_TXResultCode.BucketsExceded;
    case 44:
    case "AssetCantBeWiped":
      return Transaction_TXResultCode.AssetCantBeWiped;
    case 45:
    case "AssetCantAddRoles":
      return Transaction_TXResultCode.AssetCantAddRoles;
    case 46:
    case "FreezeError":
      return Transaction_TXResultCode.FreezeError;
    case 99:
    case "Fail":
      return Transaction_TXResultCode.Fail;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Transaction_TXResultCode.UNRECOGNIZED;
  }
}

export function transaction_TXResultCodeToJSON(object: Transaction_TXResultCode): number {
  switch (object) {
    case Transaction_TXResultCode.Ok:
      return 0;
    case Transaction_TXResultCode.OutOfFunds:
      return 1;
    case Transaction_TXResultCode.AccountError:
      return 2;
    case Transaction_TXResultCode.AssetError:
      return 3;
    case Transaction_TXResultCode.ContractInvalid:
      return 4;
    case Transaction_TXResultCode.ContractNotFound:
      return 5;
    case Transaction_TXResultCode.FeeInvalid:
      return 6;
    case Transaction_TXResultCode.ParameterInvalid:
      return 7;
    case Transaction_TXResultCode.APRInvalid:
      return 8;
    case Transaction_TXResultCode.AssetIDInvalid:
      return 9;
    case Transaction_TXResultCode.AssetTypeInvalid:
      return 10;
    case Transaction_TXResultCode.AssetCantBeMinted:
      return 11;
    case Transaction_TXResultCode.AssetCantBeBurned:
      return 12;
    case Transaction_TXResultCode.AssetCantBePaused:
      return 13;
    case Transaction_TXResultCode.AssetCantBeDelegated:
      return 14;
    case Transaction_TXResultCode.AssetOwnerCantBeChanged:
      return 15;
    case Transaction_TXResultCode.AccountNotOwner:
      return 16;
    case Transaction_TXResultCode.CommissionTooHigh:
      return 17;
    case Transaction_TXResultCode.DelegationAmountInvalid:
      return 18;
    case Transaction_TXResultCode.ProposalNotActive:
      return 19;
    case Transaction_TXResultCode.ValueInvalid:
      return 20;
    case Transaction_TXResultCode.AmountInvalid:
      return 21;
    case Transaction_TXResultCode.BucketIDInvalid:
      return 22;
    case Transaction_TXResultCode.KeyConflict:
      return 23;
    case Transaction_TXResultCode.MaxDelegationAmount:
      return 24;
    case Transaction_TXResultCode.InvalidPeerKey:
      return 25;
    case Transaction_TXResultCode.MinKFIStakedUnreached:
      return 26;
    case Transaction_TXResultCode.MaxSupplyExeeced:
      return 27;
    case Transaction_TXResultCode.SaveAccountError:
      return 28;
    case Transaction_TXResultCode.LoadAccountError:
      return 29;
    case Transaction_TXResultCode.SameAccountError:
      return 30;
    case Transaction_TXResultCode.AssetPaused:
      return 31;
    case Transaction_TXResultCode.DeletegateError:
      return 32;
    case Transaction_TXResultCode.WithdrawNotAvailable:
      return 33;
    case Transaction_TXResultCode.ErrOverflow:
      return 34;
    case Transaction_TXResultCode.SetStakingErr:
      return 35;
    case Transaction_TXResultCode.SetMarketOrderErr:
      return 36;
    case Transaction_TXResultCode.BalanceError:
      return 37;
    case Transaction_TXResultCode.KAPPError:
      return 38;
    case Transaction_TXResultCode.UnfreezeError:
      return 39;
    case Transaction_TXResultCode.UndeletegateError:
      return 40;
    case Transaction_TXResultCode.WithdrawError:
      return 41;
    case Transaction_TXResultCode.ClaimError:
      return 42;
    case Transaction_TXResultCode.BucketsExceded:
      return 43;
    case Transaction_TXResultCode.AssetCantBeWiped:
      return 44;
    case Transaction_TXResultCode.AssetCantAddRoles:
      return 45;
    case Transaction_TXResultCode.FreezeError:
      return 46;
    case Transaction_TXResultCode.Fail:
      return 99;
    case Transaction_TXResultCode.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface Transaction_Raw {
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

export interface Transaction_Receipt {
  Data?: Uint8Array[];
}

function createBaseTXContract(): TXContract {
  return { Type: 0, Parameter: undefined };
}

export const TXContract = {
  encode(message: TXContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Type !== undefined && message.Type !== 0) {
      writer.uint32(8).int32(message.Type);
    }
    if (message.Parameter !== undefined) {
      Any.encode(message.Parameter, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TXContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTXContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Type = reader.int32() as any;
          break;
        case 2:
          message.Parameter = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TXContract {
    return {
      Type: isSet(object.Type) ? tXContract_ContractTypeFromJSON(object.Type) : 0,
      Parameter: isSet(object.Parameter) ? Any.fromJSON(object.Parameter) : undefined,
    };
  },

  toJSON(message: TXContract): unknown {
    const obj: any = {};
    message.Type !== undefined && (obj.Type = tXContract_ContractTypeToJSON(message.Type));
    message.Parameter !== undefined && (obj.Parameter = message.Parameter ? Any.toJSON(message.Parameter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TXContract>, I>>(object: I): TXContract {
    const message = createBaseTXContract();
    message.Type = object.Type ?? 0;
    message.Parameter = (object.Parameter !== undefined && object.Parameter !== null)
      ? Any.fromPartial(object.Parameter)
      : undefined;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return { RawData: undefined, Signature: [], Result: 0, ResultCode: 0, Receipts: [], Block: 0 };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RawData !== undefined) {
      Transaction_Raw.encode(message.RawData, writer.uint32(10).fork()).ldelim();
    }
    if (message.Signature !== undefined && message.Signature.length !== 0) {
      for (const v of message.Signature) {
        writer.uint32(18).bytes(v!);
      }
    }
    if (message.Result !== undefined && message.Result !== 0) {
      writer.uint32(24).int32(message.Result);
    }
    if (message.ResultCode !== undefined && message.ResultCode !== 0) {
      writer.uint32(32).int32(message.ResultCode);
    }
    if (message.Receipts !== undefined && message.Receipts.length !== 0) {
      for (const v of message.Receipts) {
        Transaction_Receipt.encode(v!, writer.uint32(42).fork()).ldelim();
      }
    }
    if (message.Block !== undefined && message.Block !== 0) {
      writer.uint32(48).uint64(message.Block);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RawData = Transaction_Raw.decode(reader, reader.uint32());
          break;
        case 2:
          message.Signature!.push(reader.bytes());
          break;
        case 3:
          message.Result = reader.int32() as any;
          break;
        case 4:
          message.ResultCode = reader.int32() as any;
          break;
        case 5:
          message.Receipts!.push(Transaction_Receipt.decode(reader, reader.uint32()));
          break;
        case 6:
          message.Block = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      RawData: isSet(object.RawData) ? Transaction_Raw.fromJSON(object.RawData) : undefined,
      Signature: Array.isArray(object?.Signature) ? object.Signature.map((e: any) => bytesFromBase64(e)) : [],
      Result: isSet(object.Result) ? transaction_TXResultFromJSON(object.Result) : 0,
      ResultCode: isSet(object.ResultCode) ? transaction_TXResultCodeFromJSON(object.ResultCode) : 0,
      Receipts: Array.isArray(object?.Receipts) ? object.Receipts.map((e: any) => Transaction_Receipt.fromJSON(e)) : [],
      Block: isSet(object.Block) ? Number(object.Block) : 0,
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.RawData !== undefined &&
      (obj.RawData = message.RawData ? Transaction_Raw.toJSON(message.RawData) : undefined);
    if (message.Signature) {
      obj.Signature = message.Signature.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.Signature = [];
    }
    message.Result !== undefined && (obj.Result = transaction_TXResultToJSON(message.Result));
    message.ResultCode !== undefined && (obj.ResultCode = transaction_TXResultCodeToJSON(message.ResultCode));
    if (message.Receipts) {
      obj.Receipts = message.Receipts.map((e) => e ? Transaction_Receipt.toJSON(e) : undefined);
    } else {
      obj.Receipts = [];
    }
    message.Block !== undefined && (obj.Block = Math.round(message.Block));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.RawData = (object.RawData !== undefined && object.RawData !== null)
      ? Transaction_Raw.fromPartial(object.RawData)
      : undefined;
    message.Signature = object.Signature?.map((e) => e) || [];
    message.Result = object.Result ?? 0;
    message.ResultCode = object.ResultCode ?? 0;
    message.Receipts = object.Receipts?.map((e) => Transaction_Receipt.fromPartial(e)) || [];
    message.Block = object.Block ?? 0;
    return message;
  },
};

function createBaseTransaction_Raw(): Transaction_Raw {
  return {
    Nonce: 0,
    Sender: new Uint8Array(),
    Contract: [],
    PermissionID: 0,
    Data: [],
    KAppFee: 0,
    BandwidthFee: 0,
    Version: 0,
    ChainID: new Uint8Array(),
  };
}

export const Transaction_Raw = {
  encode(message: Transaction_Raw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Nonce !== undefined && message.Nonce !== 0) {
      writer.uint32(8).uint64(message.Nonce);
    }
    if (message.Sender !== undefined && message.Sender.length !== 0) {
      writer.uint32(18).bytes(message.Sender);
    }
    if (message.Contract !== undefined && message.Contract.length !== 0) {
      for (const v of message.Contract) {
        TXContract.encode(v!, writer.uint32(50).fork()).ldelim();
      }
    }
    if (message.PermissionID !== undefined && message.PermissionID !== 0) {
      writer.uint32(56).int32(message.PermissionID);
    }
    if (message.Data !== undefined && message.Data.length !== 0) {
      for (const v of message.Data) {
        writer.uint32(82).bytes(v!);
      }
    }
    if (message.KAppFee !== undefined && message.KAppFee !== 0) {
      writer.uint32(104).int64(message.KAppFee);
    }
    if (message.BandwidthFee !== undefined && message.BandwidthFee !== 0) {
      writer.uint32(112).int64(message.BandwidthFee);
    }
    if (message.Version !== undefined && message.Version !== 0) {
      writer.uint32(120).uint32(message.Version);
    }
    if (message.ChainID !== undefined && message.ChainID.length !== 0) {
      writer.uint32(130).bytes(message.ChainID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction_Raw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction_Raw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.Sender = reader.bytes();
          break;
        case 6:
          message.Contract!.push(TXContract.decode(reader, reader.uint32()));
          break;
        case 7:
          message.PermissionID = reader.int32();
          break;
        case 10:
          message.Data!.push(reader.bytes());
          break;
        case 13:
          message.KAppFee = longToNumber(reader.int64() as Long);
          break;
        case 14:
          message.BandwidthFee = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.Version = reader.uint32();
          break;
        case 16:
          message.ChainID = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction_Raw {
    return {
      Nonce: isSet(object.Nonce) ? Number(object.Nonce) : 0,
      Sender: isSet(object.Sender) ? bytesFromBase64(object.Sender) : new Uint8Array(),
      Contract: Array.isArray(object?.Contract) ? object.Contract.map((e: any) => TXContract.fromJSON(e)) : [],
      PermissionID: isSet(object.PermissionID) ? Number(object.PermissionID) : 0,
      Data: Array.isArray(object?.Data) ? object.Data.map((e: any) => bytesFromBase64(e)) : [],
      KAppFee: isSet(object.KAppFee) ? Number(object.KAppFee) : 0,
      BandwidthFee: isSet(object.BandwidthFee) ? Number(object.BandwidthFee) : 0,
      Version: isSet(object.Version) ? Number(object.Version) : 0,
      ChainID: isSet(object.ChainID) ? bytesFromBase64(object.ChainID) : new Uint8Array(),
    };
  },

  toJSON(message: Transaction_Raw): unknown {
    const obj: any = {};
    message.Nonce !== undefined && (obj.Nonce = Math.round(message.Nonce));
    message.Sender !== undefined &&
      (obj.Sender = base64FromBytes(message.Sender !== undefined ? message.Sender : new Uint8Array()));
    if (message.Contract) {
      obj.Contract = message.Contract.map((e) => e ? TXContract.toJSON(e) : undefined);
    } else {
      obj.Contract = [];
    }
    message.PermissionID !== undefined && (obj.PermissionID = Math.round(message.PermissionID));
    if (message.Data) {
      obj.Data = message.Data.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.Data = [];
    }
    message.KAppFee !== undefined && (obj.KAppFee = Math.round(message.KAppFee));
    message.BandwidthFee !== undefined && (obj.BandwidthFee = Math.round(message.BandwidthFee));
    message.Version !== undefined && (obj.Version = Math.round(message.Version));
    message.ChainID !== undefined &&
      (obj.ChainID = base64FromBytes(message.ChainID !== undefined ? message.ChainID : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction_Raw>, I>>(object: I): Transaction_Raw {
    const message = createBaseTransaction_Raw();
    message.Nonce = object.Nonce ?? 0;
    message.Sender = object.Sender ?? new Uint8Array();
    message.Contract = object.Contract?.map((e) => TXContract.fromPartial(e)) || [];
    message.PermissionID = object.PermissionID ?? 0;
    message.Data = object.Data?.map((e) => e) || [];
    message.KAppFee = object.KAppFee ?? 0;
    message.BandwidthFee = object.BandwidthFee ?? 0;
    message.Version = object.Version ?? 0;
    message.ChainID = object.ChainID ?? new Uint8Array();
    return message;
  },
};

function createBaseTransaction_Receipt(): Transaction_Receipt {
  return { Data: [] };
}

export const Transaction_Receipt = {
  encode(message: Transaction_Receipt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Data !== undefined && message.Data.length !== 0) {
      for (const v of message.Data) {
        writer.uint32(10).bytes(v!);
      }
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction_Receipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction_Receipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Data!.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction_Receipt {
    return { Data: Array.isArray(object?.data) ? object.data.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: Transaction_Receipt): unknown {
    const obj: any = {};
    if (message.Data) {
      obj.data = message.Data.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction_Receipt>, I>>(object: I): Transaction_Receipt {
    const message = createBaseTransaction_Receipt();
    message.Data = object.Data?.map((e) => e) || [];
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
    "name": "lib/transaction/proto/transaction.proto",
    "package": "proto",
    "dependency": ["google/protobuf/any.proto"],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "TXContract",
      "field": [{
        "name": "Type",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".proto.TXContract.ContractType",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Parameter",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.Any",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Parameter",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "ContractType",
        "value": [
          { "name": "TransferContractType", "number": 0, "options": undefined },
          { "name": "CreateAssetContractType", "number": 1, "options": undefined },
          { "name": "CreateValidatorContractType", "number": 2, "options": undefined },
          { "name": "ValidatorConfigContractType", "number": 3, "options": undefined },
          { "name": "FreezeContractType", "number": 4, "options": undefined },
          { "name": "UnfreezeContractType", "number": 5, "options": undefined },
          { "name": "DelegateContractType", "number": 6, "options": undefined },
          { "name": "UndelegateContractType", "number": 7, "options": undefined },
          { "name": "WithdrawContractType", "number": 8, "options": undefined },
          { "name": "ClaimContractType", "number": 9, "options": undefined },
          { "name": "UnjailContractType", "number": 10, "options": undefined },
          { "name": "AssetTriggerContractType", "number": 11, "options": undefined },
          { "name": "SetAccountNameContractType", "number": 12, "options": undefined },
          { "name": "ProposalContractType", "number": 13, "options": undefined },
          { "name": "VoteContractType", "number": 14, "options": undefined },
          { "name": "ConfigITOContractType", "number": 15, "options": undefined },
          { "name": "SetITOPricesContractType", "number": 16, "options": undefined },
          { "name": "BuyContractType", "number": 17, "options": undefined },
          { "name": "SellContractType", "number": 18, "options": undefined },
          { "name": "CancelMarketOrderContractType", "number": 19, "options": undefined },
          { "name": "CreateMarketplaceContractType", "number": 20, "options": undefined },
          { "name": "ConfigMarketplaceContractType", "number": 21, "options": undefined },
          { "name": "UpdateAccountPermissionContractType", "number": 22, "options": undefined },
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
      "name": "Transaction",
      "field": [{
        "name": "RawData",
        "number": 1,
        "label": 1,
        "type": 11,
        "typeName": ".proto.Transaction.Raw",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "RawData",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Signature",
        "number": 2,
        "label": 3,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Signature",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Result",
        "number": 3,
        "label": 1,
        "type": 14,
        "typeName": ".proto.Transaction.TXResult",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Result",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ResultCode",
        "number": 4,
        "label": 1,
        "type": 14,
        "typeName": ".proto.Transaction.TXResultCode",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "ResultCode",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Receipts",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".proto.Transaction.Receipt",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Receipts",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "Block",
        "number": 6,
        "label": 1,
        "type": 4,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "Block",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "Raw",
        "field": [{
          "name": "Nonce",
          "number": 1,
          "label": 1,
          "type": 4,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "Nonce",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "Sender",
          "number": 2,
          "label": 1,
          "type": 12,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "Sender",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "Contract",
          "number": 6,
          "label": 3,
          "type": 11,
          "typeName": ".proto.TXContract",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "Contract",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "PermissionID",
          "number": 7,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "PermissionID",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "Data",
          "number": 10,
          "label": 3,
          "type": 12,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "Data",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "KAppFee",
          "number": 13,
          "label": 1,
          "type": 3,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "KAppFee",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "BandwidthFee",
          "number": 14,
          "label": 1,
          "type": 3,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "BandwidthFee",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "Version",
          "number": 15,
          "label": 1,
          "type": 13,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "Version",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "ChainID",
          "number": 16,
          "label": 1,
          "type": 12,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "ChainID",
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
        "name": "Receipt",
        "field": [{
          "name": "Data",
          "number": 1,
          "label": 3,
          "type": 12,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "data",
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
      "enumType": [{
        "name": "TXResult",
        "value": [{ "name": "SUCCESS", "number": 0, "options": undefined }, {
          "name": "FAILED",
          "number": 1,
          "options": undefined,
        }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "TXResultCode",
        "value": [
          { "name": "Ok", "number": 0, "options": undefined },
          { "name": "OutOfFunds", "number": 1, "options": undefined },
          { "name": "AccountError", "number": 2, "options": undefined },
          { "name": "AssetError", "number": 3, "options": undefined },
          { "name": "ContractInvalid", "number": 4, "options": undefined },
          { "name": "ContractNotFound", "number": 5, "options": undefined },
          { "name": "FeeInvalid", "number": 6, "options": undefined },
          { "name": "ParameterInvalid", "number": 7, "options": undefined },
          { "name": "APRInvalid", "number": 8, "options": undefined },
          { "name": "AssetIDInvalid", "number": 9, "options": undefined },
          { "name": "AssetTypeInvalid", "number": 10, "options": undefined },
          { "name": "AssetCantBeMinted", "number": 11, "options": undefined },
          { "name": "AssetCantBeBurned", "number": 12, "options": undefined },
          { "name": "AssetCantBePaused", "number": 13, "options": undefined },
          { "name": "AssetCantBeDelegated", "number": 14, "options": undefined },
          { "name": "AssetOwnerCantBeChanged", "number": 15, "options": undefined },
          { "name": "AccountNotOwner", "number": 16, "options": undefined },
          { "name": "CommissionTooHigh", "number": 17, "options": undefined },
          { "name": "DelegationAmountInvalid", "number": 18, "options": undefined },
          { "name": "ProposalNotActive", "number": 19, "options": undefined },
          { "name": "ValueInvalid", "number": 20, "options": undefined },
          { "name": "AmountInvalid", "number": 21, "options": undefined },
          { "name": "BucketIDInvalid", "number": 22, "options": undefined },
          { "name": "KeyConflict", "number": 23, "options": undefined },
          { "name": "MaxDelegationAmount", "number": 24, "options": undefined },
          { "name": "InvalidPeerKey", "number": 25, "options": undefined },
          { "name": "MinKFIStakedUnreached", "number": 26, "options": undefined },
          { "name": "MaxSupplyExeeced", "number": 27, "options": undefined },
          { "name": "SaveAccountError", "number": 28, "options": undefined },
          { "name": "LoadAccountError", "number": 29, "options": undefined },
          { "name": "SameAccountError", "number": 30, "options": undefined },
          { "name": "AssetPaused", "number": 31, "options": undefined },
          { "name": "DeletegateError", "number": 32, "options": undefined },
          { "name": "WithdrawNotAvailable", "number": 33, "options": undefined },
          { "name": "ErrOverflow", "number": 34, "options": undefined },
          { "name": "SetStakingErr", "number": 35, "options": undefined },
          { "name": "SetMarketOrderErr", "number": 36, "options": undefined },
          { "name": "BalanceError", "number": 37, "options": undefined },
          { "name": "KAPPError", "number": 38, "options": undefined },
          { "name": "UnfreezeError", "number": 39, "options": undefined },
          { "name": "UndeletegateError", "number": 40, "options": undefined },
          { "name": "WithdrawError", "number": 41, "options": undefined },
          { "name": "ClaimError", "number": 42, "options": undefined },
          { "name": "BucketsExceded", "number": 43, "options": undefined },
          { "name": "AssetCantBeWiped", "number": 44, "options": undefined },
          { "name": "AssetCantAddRoles", "number": 45, "options": undefined },
          { "name": "FreezeError", "number": 46, "options": undefined },
          { "name": "Fail", "number": 99, "options": undefined },
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
        "span": [9, 0, 37, 1],
        "leadingComments": " TXContract available\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [40, 0, 119, 1],
        "leadingComments": " Transaction holds all the data needed for a value transfer\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: {
    ".proto.TXContract": TXContract,
    ".proto.TXContract.ContractType": TXContract_ContractType,
    ".proto.Transaction": Transaction,
    ".proto.Transaction.TXResult": Transaction_TXResult,
    ".proto.Transaction.TXResultCode": Transaction_TXResultCode,
    ".proto.Transaction.Raw": Transaction_Raw,
    ".proto.Transaction.Receipt": Transaction_Receipt,
  },
  dependencies: [protoMetadata1],
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
