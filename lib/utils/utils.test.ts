import utils from ".";

describe("Utils :", () => {
  it("should be able to generate a privateKey/address pair", async () => {
    const keyPair = await utils.generateKeyPair();

    expect(keyPair.privateKey).toBeTruthy();
    expect(keyPair.address).toBeTruthy();
  });

  it("should be able to set different providers", async () => {
    const providers = {
      node: "nodeProvider",
      api: "apiProvider",
    };

    utils.setProviders(providers);

    expect(utils.getProviders()).toEqual(providers);
  });
});
