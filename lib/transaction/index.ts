import core from "../core";
import { ErrLoadSdk } from "../core/errors";
import { TransactionType, IBasePayload } from "../types";
import { ITransactionResponse } from "../types/dtos";

const sendTransaction = async (
  type: TransactionType,
  payload: IBasePayload
): Promise<ITransactionResponse> => {
  if (!core.isSDKLoaded()) {
    throw ErrLoadSdk;
  }

  let method;

  switch (type) {
    case TransactionType.Transfer:
      method = window.sendTransfer;
      break;
    case TransactionType.CreateMarketplace:
      method = window.sendCreateMarketplace;
      break;
    case TransactionType.ConfigMarketplace:
      method = window.sendConfigMarketplace;
      break;
    case TransactionType.Freeze:
      method = window.sendFreeze;
      break;
    case TransactionType.Unfreeze:
      method = window.sendUnfreeze;
      break;
    case TransactionType.Withdraw:
      method = window.sendWithdraw;
      break;
    case TransactionType.Undelegate:
      method = window.sendUndelegate;
      break;
    case TransactionType.Delegate:
      method = window.sendDelegate;
      break;
    case TransactionType.SetAccountName:
      method = window.setAccountName;
      break;
    case TransactionType.Votes:
      method = window.sendVotes;
      break;
    case TransactionType.Claim:
      method = window.sendClaim;
      break;
    case TransactionType.Unjail:
      method = window.sendUnjail;
      break;
    case TransactionType.CancelMarketOrder:
      method = window.sendCancelMarketOrder;
      break;
    case TransactionType.SellOrder:
      method = window.sendSellOrder;
      break;
    case TransactionType.BuyOrder:
      method = window.sendBuyOrder;
      break;
    case TransactionType.CreateAsset:
      method = window.sendCreateAsset;
      break;
    case TransactionType.Proposal:
      method = window.sendProposal;
      break;
    case TransactionType.CreateValidator:
      method = window.sendCreateValidator;
      break;
    case TransactionType.ConfigValidator:
      method = window.sendConfigValidator;
      break;
    case TransactionType.ConfigITO:
      method = window.sendConfigITO;
      break;
    case TransactionType.AssetTrigger:
      method = window.sendAssetTrigger;
      break;
    default:
      method = window.sendTransfer;
      break;
  }

  return method(JSON.stringify(payload));
};

export { sendTransaction };
