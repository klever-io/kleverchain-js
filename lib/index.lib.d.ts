interface Window {
  go: any;
  parsePemFileData(pemData: string): Promise<IPemResponse>;
}
