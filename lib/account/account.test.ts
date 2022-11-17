import Account from ".";

describe("Account", () => {
  it("should be able to create a new account", async () => {
    const account = new Account();

    expect(account).toBeInstanceOf(Account);
  });

  it("should be able to create a new account that has an address", async () => {
    const account = new Account();
    await account.ready;

    expect(account.getAddress()).toBeTruthy();
  });
});
