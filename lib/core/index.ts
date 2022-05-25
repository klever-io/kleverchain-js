import Account from "../account";
import { IPemResponse } from "../types/dtos";
import { ErrLoadSdk } from "./errors";

const isSDKLoaded = () => {
  return !!(window as any).Go;
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
  isSDKLoaded,
};

export default core;
