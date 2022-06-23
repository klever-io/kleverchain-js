import core from "../core";
import { ErrLoadSdk } from "../core/errors";
import { TransactionType, IBasePayload, ITransactionProps } from "../types";
import { IBroadcastResponse, ITransactionResponse } from "../types/dtos";

const sendTransaction = async (
  type: TransactionType,
  payload: IBasePayload,
  props: ITransactionProps = {
    autobroadcast: true,
  }
): Promise<ITransactionResponse | IBroadcastResponse> => {
  if (!(await core.isSDKLoaded())) {
    throw ErrLoadSdk;
  }

  let method;

  switch (type) {
    case TransactionType.Transfer:
      method = globalThis.sendTransfer;
      break;
    case TransactionType.CreateMarketplace:
      method = globalThis.sendCreateMarketplace;
      break;
    case TransactionType.ConfigMarketplace:
      method = globalThis.sendConfigMarketplace;
      break;
    case TransactionType.Freeze:
      method = globalThis.sendFreeze;
      break;
    case TransactionType.Unfreeze:
      method = globalThis.sendUnfreeze;
      break;
    case TransactionType.Withdraw:
      method = globalThis.sendWithdraw;
      break;
    case TransactionType.Undelegate:
      method = globalThis.sendUndelegate;
      break;
    case TransactionType.Delegate:
      method = globalThis.sendDelegate;
      break;
    case TransactionType.SetAccountName:
      method = globalThis.setAccountName;
      break;
    case TransactionType.Votes:
      method = globalThis.sendVotes;
      break;
    case TransactionType.Claim:
      method = globalThis.sendClaim;
      break;
    case TransactionType.Unjail:
      method = globalThis.sendUnjail;
      break;
    case TransactionType.CancelMarketOrder:
      method = globalThis.sendCancelMarketOrder;
      break;
    case TransactionType.SellOrder:
      method = globalThis.sendSellOrder;
      break;
    case TransactionType.BuyOrder:
      method = globalThis.sendBuyOrder;
      break;
    case TransactionType.CreateAsset:
      method = globalThis.sendCreateAsset;
      break;
    case TransactionType.Proposal:
      method = globalThis.sendProposal;
      break;
    case TransactionType.CreateValidator:
      method = globalThis.sendCreateValidator;
      break;
    case TransactionType.ConfigValidator:
      method = globalThis.sendConfigValidator;
      break;
    case TransactionType.ConfigITO:
      method = globalThis.sendConfigITO;
      break;
    case TransactionType.AssetTrigger:
      method = globalThis.sendAssetTrigger;
      break;
    case TransactionType.UpdateAccountPermission:
      method = globalThis.sendUpdateAccountPermission;
      break;
    case TransactionType.SetITOPrices:
      method = globalThis.sendSetITOPrices;
      break;
    default:
      method = globalThis.sendTransfer;
      break;
  }

  if (props.autobroadcast) {
    const response = await method(
      JSON.stringify(payload),
      JSON.stringify(props ? props : {})
    );

    return globalThis.broadcast(JSON.stringify(response));
  }

  return method(JSON.stringify(payload), JSON.stringify(props ? props : {}));
};

export { sendTransaction };
