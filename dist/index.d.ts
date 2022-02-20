import Account from "./account";
import { getAccountByPem, createAccount } from "./core";
import { sendTransaction } from "./transaction";
declare const initialize: () => Promise<void>;
export { initialize, Account, getAccountByPem, sendTransaction, createAccount };
