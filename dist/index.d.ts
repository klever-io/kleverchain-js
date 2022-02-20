import Account from "./account";
import { getAccountByPem } from "./core";
import { sendTransaction } from "./transaction";
declare const initialize: () => Promise<void>;
export { initialize, Account, getAccountByPem, sendTransaction };
