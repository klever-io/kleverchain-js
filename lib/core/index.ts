import Account from "../account";
import { IPemResponse } from "../types/dtos";
import { ErrLoadSdk } from "./errors";

const isSDKLoaded = () => {
  return !!globalThis.Go;
};

const getAccountByPem = async (pemData: string): Promise<Account> => {
  if (!isSDKLoaded()) {
    throw ErrLoadSdk;
  }

  const { address, privateKey } = await globalThis.parsePemFileData(pemData);

  return new Account(address, privateKey);
};

const createAccount = async (): Promise<IPemResponse> => {
  if (!isSDKLoaded()) {
    throw ErrLoadSdk;
  }

  const account = await globalThis.createAccount();

  return account;
};

const core = {
  getAccountByPem,
  createAccount,
  isSDKLoaded,
};

export default core;
