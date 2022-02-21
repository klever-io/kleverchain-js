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
    default:
      method = window.sendTransfer;
      break;
  }

  return method(JSON.stringify(payload));
};

export { sendTransaction };
