import { TransactionType } from "./types";
import { IBasePayload } from "./types/payload";
import { ITransactionResponse } from "./types/response";

const sendTransaction = async (
  type: TransactionType,
  payload: IBasePayload
): Promise<ITransactionResponse> => {
  let method;

  switch (type) {
    case TransactionType.Transfer:
      method = window.sendTransfer;
      break;
    case TransactionType.CreateMarketplace:
      method = window.createMarketplace;
      break;
    case TransactionType.Freeze:
      method = window.sendFreeze;
      break;
    case TransactionType.Unfreeze:
      method = window.sendUnfreeze;
      break;
    case TransactionType.Undelegate:
      method = window.sendUnfreeze;
      break;
    default:
      method = window.sendTransfer;
      break;
  }

  return method(JSON.stringify(payload));
};

export { sendTransaction };
