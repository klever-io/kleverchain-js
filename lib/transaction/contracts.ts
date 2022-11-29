import utils from "../utils"
import * as Contracts from './proto/contracts'
import * as proto from "./../../google/protobuf/any";
import { 
  Transaction as T,
  TXContract_ContractType,
} from './proto/transaction'


const enc = new TextDecoder();

const decodeTransferContract = (wired: Uint8Array): any => {
  const contract = Contracts.TransferContract.decode(wired)

  return {
    ToAddress: utils.encodeAddress(contract.ToAddress!),
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
    Amount: contract.Amount,
  };
}


const decodeCreateAssetContract = (wired: Uint8Array): any => {
  const contract = Contracts.CreateAssetContract.decode(wired)

  return {
    Type: contract.Type,
    Name: enc.decode(contract.Name),
    Ticker: enc.decode(contract.Ticker),
    OwnerAddress: utils.encodeAddress(contract.OwnerAddress!),
    Logo: contract.Logo,
    URIs: contract.URIs,
    Precision: contract.Precision,
    InitialSupply: contract.InitialSupply,
    MaxSupply: contract.MaxSupply,
    Royalties: {
      Address: contract.Royalties?.Address? utils.encodeAddress(contract.Royalties.Address):"",
      TransferPercentage: contract.Royalties?.TransferPercentage,
      TransferFixed: contract.Royalties?.TransferFixed,
      MarketPercentage: contract.Royalties?.MarketPercentage,
      MarketFixed: contract.Royalties?.MarketFixed,
    },
    Properties: contract.Properties,
    Attributes:  contract.Attributes,
    Staking:  contract.Staking,
    Roles: contract.Roles?.forEach( r => {
      return {
        Address: utils.encodeAddress(r.Address!),
        HasRoleMint: r.HasRoleMint,
        HasRoleSetITOPrices: r.HasRoleSetITOPrices,
      }
    })
  };
}


const decodeCreateValidatorContract = (wired: Uint8Array): any => {
  const contract = Contracts.CreateValidatorContract.decode(wired)

  return {
    OwnerAddress: utils.encodeAddress(contract.OwnerAddress!),
    Config: {
      BLSPublicKey:  utils.toHex(contract.Config?.BLSPublicKey!),
      RewardAddress: utils.encodeAddress(contract.Config?.RewardAddress!),
      CanDelegate: contract.Config?.CanDelegate,
      Commission: contract.Config?.Commission,
      MaxDelegationAmount: contract.Config?.MaxDelegationAmount,
      Logo: contract.Config?.Logo,
      URIs: contract.Config?.URIs,
      Name: contract.Config?.Name,
    },
  };
}


const decodeValidatorConfigContract = (wired: Uint8Array): any => {
  const contract = Contracts.ValidatorConfigContract.decode(wired)

  return {
    Config: {
      BLSPublicKey:  utils.toHex(contract.Config?.BLSPublicKey!),
      RewardAddress: utils.encodeAddress(contract.Config?.RewardAddress!),
      CanDelegate: contract.Config?.CanDelegate,
      Commission: contract.Config?.Commission,
      MaxDelegationAmount: contract.Config?.MaxDelegationAmount,
      Logo: contract.Config?.Logo,
      URIs: contract.Config?.URIs,
      Name: contract.Config?.Name,
    },
  };
}


const decodeFreezeContract = (wired: Uint8Array): any => {
  const contract = Contracts.FreezeContract.decode(wired)
  
  return {
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
    Amount: contract.Amount,
  };
}


const decodeUnfreezeContractType = (wired: Uint8Array): any => {
  const contract = Contracts.UnfreezeContract.decode(wired)

  return {
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
    BucketID: enc.decode(contract.BucketID),
  };
}

const decodeDelegateContract = (wired: Uint8Array): any => {
  const contract = Contracts.DelegateContract.decode(wired)

  return {
    ToAddress: utils.encodeAddress(contract.ToAddress!),
    BucketID: enc.decode(contract.BucketID),
  };
}

const decodeUndelegateContract = (wired: Uint8Array): any => {
  const contract = Contracts.UndelegateContract.decode(wired)

  return {
    BucketID: enc.decode(contract.BucketID),
  };
}

const decodeWithdrawContractType = (wired: Uint8Array): any => {
  const contract = Contracts.WithdrawContract.decode(wired)

  return {
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
  };
}

const decodeClaimContract = (wired: Uint8Array): any => {
  const contract = Contracts.ClaimContract.decode(wired)

  return {
    ClaimType: contract.ClaimType,
    ID: enc.decode(contract.ID),
  };
}

const decodeUnjailContract = (wired: Uint8Array): any => {
  const contract = Contracts.UnjailContract.decode(wired)

  return {};
}

const decodeAssetTriggerContract = (wired: Uint8Array): any => {
  const contract = Contracts.AssetTriggerContract.decode(wired)

  return {
    TriggerType: contract.TriggerType,
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
    ToAddress: utils.encodeAddress(contract.ToAddress!),
    Amount: contract.Amount,
    MIME: enc.decode(contract.MIME),
    Logo: contract.Logo,
    URIs: contract.URIs,
    Role: {
      Address: contract.Role? utils.encodeAddress(contract.Role.Address!):"",
      HasRoleMint: contract.Role?.HasRoleMint,
      HasRoleSetITOPrices: contract.Role?.HasRoleSetITOPrices,
    },
    Staking: contract.Staking,
  };
}

const decodeSetAccountNameContract = (wired: Uint8Array): any => {
  const contract = Contracts.SetAccountNameContract.decode(wired)

  return {
    Name: enc.decode(contract.Name),
  };
}

const decodeProposalContract = (wired: Uint8Array): any => {
  const contract = Contracts.ProposalContract.decode(wired)


  const param :{[key: string]: string} = {}

  for (var a in contract.Parameters) {
    param.a = enc.decode(contract.Parameters[parseInt(a)]);
  }

  return {
    Parameters: param,
    Description: enc.decode(contract.Description),
    EpochsDuration: contract.EpochsDuration,
  };
}

const decodeVoteContract = (wired: Uint8Array): any => {
  const contract = Contracts.VoteContract.decode(wired)

  return {
    ProposalID: contract.ProposalID,
    Amount: contract.Amount,
    Type: contract.Type,
  };
}

const decodeConfigITOContract = (wired: Uint8Array): any => {
  const contract = Contracts.ConfigITOContract.decode(wired)

  return {
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
    ReceiverAddress: utils.encodeAddress(contract.ReceiverAddress!),
    Status: contract.Status,
    MaxAmount: contract.MaxAmount,
    PackInfo: contract.PackInfo,
  };
}

const decodeSetITOPricesContract = (wired: Uint8Array): any => {
  const contract = Contracts.SetITOPricesContract.decode(wired)

  return {
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
    PackInfo: contract.PackInfo,
  };
}

const decodeBuyContract = (wired: Uint8Array): any => {
  const contract = Contracts.BuyContract.decode(wired)

  return {
    BuyType: contract.BuyType,
    ID: enc.decode(contract.ID),
    CurrencyID: enc.decode(contract.CurrencyID),
    Amount: contract.Amount,
  };
}

const decodeSellContract = (wired: Uint8Array): any => {
  const contract = Contracts.SellContract.decode(wired)

  return {
    MarketType: contract.MarketType,
    MarketplaceID: enc.decode(contract.MarketplaceID),
    AssetID: contract.AssetID?.length?enc.decode(contract.AssetID):"KLV",
    CurrencyID: enc.decode(contract.CurrencyID),
    Price: contract.Price,
    ReservePrice: contract.ReservePrice,
    EndTime: contract.EndTime,
  };
}

const decodeCancelMarketOrderContract = (wired: Uint8Array): any => {
  const contract = Contracts.CancelMarketOrderContract.decode(wired)

  return {
    OrderID: enc.decode(contract.OrderID),
  };
}

const decodeCreateMarketplaceContract = (wired: Uint8Array): any => {
  const contract = Contracts.CreateMarketplaceContract.decode(wired)

  return {
    Name: enc.decode(contract.Name),
    ReferralAddress: utils.encodeAddress(contract.ReferralAddress!),
    ReferralPercentage: contract.ReferralPercentage,
  };
}

const decodeConfigMarketplaceContract = (wired: Uint8Array): any => {
  const contract = Contracts.ConfigMarketplaceContract.decode(wired)

  return {
    MarketplaceID: enc.decode(contract.MarketplaceID),
    Name: enc.decode(contract.Name),
    ReferralAddress: utils.encodeAddress(contract.ReferralAddress!),
    ReferralPercentage: contract.ReferralPercentage
  };
}

const decodeUpdateAccountPermissionContract = (wired: Uint8Array): any => {
  const contract = Contracts.UpdateAccountPermissionContract.decode(wired)

  return {
    Permissions: contract.Permissions?.forEach( p => {
      return {
        Type: p.Type,
        PermissionName: p.PermissionName,
        Threshold: p.Threshold,
        Operations: utils.toHex(p.Operations!),
        Signers: p.Signers?.forEach( s => {
          return {
            address: utils.encodeAddress(s.address!),
            weight: s.weight,
          }
        })
      }
    })
  };
}


export const decodeContract = (type?: TXContract_ContractType, contract?: proto.Any): any =>  {
  switch (type) {
    case TXContract_ContractType.TransferContractType:
      return decodeTransferContract(contract!.value!);
    case TXContract_ContractType.CreateAssetContractType:
      return decodeCreateAssetContract(contract!.value!);
    case TXContract_ContractType.CreateValidatorContractType:
      return decodeCreateValidatorContract(contract!.value!);
    case TXContract_ContractType.ValidatorConfigContractType:
      return decodeValidatorConfigContract(contract!.value!);
    case TXContract_ContractType.FreezeContractType:
      return decodeFreezeContract(contract!.value!);
    case TXContract_ContractType.UnfreezeContractType:
      return decodeUnfreezeContractType(contract!.value!);
    case TXContract_ContractType.DelegateContractType:
      return decodeDelegateContract(contract!.value!);
    case TXContract_ContractType.UndelegateContractType:
      return decodeUndelegateContract(contract!.value!);
    case TXContract_ContractType.WithdrawContractType:
      return decodeWithdrawContractType(contract!.value!);
    case TXContract_ContractType.ClaimContractType:
      return decodeClaimContract(contract!.value!);
    case TXContract_ContractType.UnjailContractType:
      return decodeUnjailContract(contract!.value!);
    case TXContract_ContractType.AssetTriggerContractType:
      return decodeAssetTriggerContract(contract!.value!);
    case TXContract_ContractType.SetAccountNameContractType:
      return decodeSetAccountNameContract(contract!.value!);
    case TXContract_ContractType.ProposalContractType:
      return decodeProposalContract(contract!.value!);
    case TXContract_ContractType.VoteContractType:
      return decodeVoteContract(contract!.value!);
    case TXContract_ContractType.ConfigITOContractType:
      return decodeConfigITOContract(contract!.value!);
    case TXContract_ContractType.SetITOPricesContractType:
      return decodeSetITOPricesContract(contract!.value!);
    case TXContract_ContractType.BuyContractType:
      return decodeBuyContract(contract!.value!);
    case TXContract_ContractType.SellContractType:
      return decodeSellContract(contract!.value!);
    case TXContract_ContractType.CancelMarketOrderContractType:
      return decodeCancelMarketOrderContract(contract!.value!);
    case TXContract_ContractType.CreateMarketplaceContractType:
      return decodeCreateMarketplaceContract(contract!.value!);
    case TXContract_ContractType.ConfigMarketplaceContractType:
      return decodeConfigMarketplaceContract(contract!.value!);
    case TXContract_ContractType.UpdateAccountPermissionContractType:
      return decodeUpdateAccountPermissionContract(contract!.value!);
    default:
      throw("invalid transaction type");
  }
}
