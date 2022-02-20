interface Window {
  go: any;
  parsePemFileData(pemData: string): Promise<IPemResponse>;
  sendTransfer(payload: string): Promise<any>;
}
