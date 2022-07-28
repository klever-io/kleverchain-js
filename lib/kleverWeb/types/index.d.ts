/* eslint-disable no-var */

declare global {
  var kleverWeb: KleverWeb;
}

interface KleverWeb {
  signTransaction?: (tx: ITransaction) => Promise<ITransaction>;
  signMessage?: (message: string) => Promise<string>;
  validateSignature?: (
    msg: string,
    signature: string,
    pubKey: string
  ) => Promise<bool>;
}

export {};
