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

  let transactionType;

  switch (type) {
    case TransactionType.Transfer:
      transactionType = "0";
      break;
    case TransactionType.CreateAsset:
      transactionType = "1";
      break;
    case TransactionType.CreateValidator:
      transactionType = "2";
      break;
    case TransactionType.ConfigValidator:
      transactionType = "3";
      break;
    case TransactionType.Freeze:
      transactionType = "4";
      break;
    case TransactionType.Unfreeze:
      transactionType = "5";
      break;
    case TransactionType.Delegate:
      transactionType = "6";
      break;
    case TransactionType.Undelegate:
      transactionType = "7";
      break;
    case TransactionType.Withdraw:
      transactionType = "8";
      break;
    case TransactionType.Claim:
      transactionType = "9";
      break;
    case TransactionType.Unjail:
      transactionType = "10";
      break;
    case TransactionType.AssetTrigger:
      transactionType = "11";
      break;
    case TransactionType.SetAccountName:
      transactionType = "12";
      break;
    case TransactionType.Proposal:
      transactionType = "13";
      break;
    case TransactionType.Votes:
      transactionType = "14";
      break;
    case TransactionType.ConfigITO:
      transactionType = "15";
      break;
    case TransactionType.SetITOPrices:
      transactionType = "16";
      break;
    case TransactionType.BuyOrder:
      transactionType = "17";
      break;
    case TransactionType.SellOrder:
      transactionType = "18";
      break;
    case TransactionType.CancelMarketOrder:
      transactionType = "19";
      break;
    case TransactionType.CreateMarketplace:
      transactionType = "20";
      break;
    case TransactionType.ConfigMarketplace:
      transactionType = "21";
      break;
    case TransactionType.UpdateAccountPermission:
      transactionType = "22";
      break;
    default:
      transactionType = "0";
      break;
  }

  const autobroadcast = props?.autobroadcast ?? true;
  delete props?.autobroadcast;

  if (props && Array.isArray(props?.previousTX)) {
    props.previousTX = props?.previousTX[0];
  }

  let rawTx = (await globalThis.kleverWeb.sendTransaction(
    transactionType,
    JSON.stringify(payload),
    JSON.stringify(props ? props : {})
  )) as ITransactionResponse[];

  if (payload.privateKey) {
    rawTx[0] = await globalThis.kleverWeb.signTx(
      JSON.stringify({ tx: rawTx[0], privateKey: payload.privateKey })
    );
  }

  if (autobroadcast) {
    return globalThis.kleverWeb.broadcast(
      JSON.stringify(rawTx)
    ) as Promise<IBroadcastResponse>;
  }

  return rawTx;
};

export { sendTransaction };
