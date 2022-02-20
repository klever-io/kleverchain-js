import Account from "./account";
import { getAccountByPem } from "./core";

const init = async () => {
  const { instance } = await WebAssembly.instantiateStreaming(
    fetch("SDK.wasm"),
    window.go.importObject
  );

  await window.go.run(instance);
};

export { init, Account, getAccountByPem };
