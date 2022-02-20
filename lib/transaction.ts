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
    default:
      method = window.sendTransfer;
  }

  return method(JSON.stringify(payload));
};

export { sendTransaction };
