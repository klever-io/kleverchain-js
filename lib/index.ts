import Account from "./account";
import { getAccountByPem, createAccount } from "./core";
import { sendTransaction } from "./transaction";

const initialize = async () => {
  const { instance } = await WebAssembly.instantiateStreaming(
    fetch("SDK.wasm"),
    window.go.importObject
  );

  await window.go.run(instance);
};

export { Account, getAccountByPem, sendTransaction, createAccount, initialize };
