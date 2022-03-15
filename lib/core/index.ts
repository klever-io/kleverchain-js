import Account from "../account";
import { IPemResponse } from "../types/dtos";
import { ErrLoadSdk } from "./errors";

let sdkLoaded = false;

const handleLoad = () => {
  sdkLoaded = true;
};

const isLoaded = () => {
  return sdkLoaded;
};

const getAccountByPem = async (pemData: string): Promise<Account> => {
  if (!isLoaded()) {
    throw ErrLoadSdk;
  }

  const { address, privateKey } = await window.parsePemFileData(pemData);

  return new Account(address, privateKey);
};

const createAccount = async (): Promise<IPemResponse> => {
  if (!isLoaded()) {
    throw ErrLoadSdk;
  }

  const account = await window.createAccount();

  return account;
};

const core = {
  getAccountByPem,
  createAccount,
  handleLoad,
  isLoaded,
};

export default core;
