import Account from "../account";
import { IPemResponse } from "../types/dtos";
import { ErrLoadSdk } from "./errors";

let sdkLoaded = false;

const loadSDK = () => {
  sdkLoaded = true;
};

const isSDKLoaded = () => {
  return sdkLoaded;
};

const getAccountByPem = async (pemData: string): Promise<Account> => {
  if (!isSDKLoaded()) {
    throw ErrLoadSdk;
  }

  const { address, privateKey } = await window.parsePemFileData(pemData);

  return new Account(address, privateKey);
};

const createAccount = async (): Promise<IPemResponse> => {
  if (!isSDKLoaded()) {
    throw ErrLoadSdk;
  }

  const account = await window.createAccount();

  return account;
};

const core = {
  getAccountByPem,
  createAccount,
  loadSDK,
  isSDKLoaded,
};

export default core;
