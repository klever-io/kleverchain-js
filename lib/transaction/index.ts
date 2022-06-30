import core from "../core";
import { ErrLoadSdk } from "../core/errors";
import { TransactionType, IBasePayload, ITransactionProps } from "../types";
import { IBroadcastResponse, ITransactionResponse } from "../types/dtos";

const sendTransaction = async (
  type: TransactionType,
  payload: IBasePayload,
  props?: ITransactionProps
): Promise<ITransactionResponse[] | IBroadcastResponse> => {
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

  const autobroadcast = props?.autobroadcast ?? true;
  delete props?.autobroadcast;

  if (props && Array.isArray(props?.previousTX)) {
    props.previousTX = props?.previousTX[0];
  }

  let rawTx = (await method(
    JSON.stringify(payload),
    JSON.stringify(props ? props : {})
  )) as ITransactionResponse[];

  if (payload.privateKey) {
    const signatures: string[] = [
      (
        await globalThis.signTx(
          JSON.stringify({ tx: rawTx[0], privateKey: payload.privateKey })
        )
      ).signature as string,
    ];

    rawTx[0].Signature = signatures;
  }

  if (autobroadcast) {
    return globalThis.broadcast(
      JSON.stringify(rawTx)
    ) as Promise<IBroadcastResponse>;
  }

  return rawTx;
};

export { sendTransaction };
