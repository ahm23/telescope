import { getAliasName, getQueryMethodNames, makePkgMethodName, makeUsePkgHookName } from "..";
import { pascal } from "case";

// getAliasName tests
it("returns the type name if there's no alias", () => {
  const result = getAliasName("cosmos.bank.v1beta1", "Balance", undefined);

  expect(result).toBe("Balance");
});

it("returns the alias name if there's an alias", () => {
  const result = getAliasName("cosmos.bank.v1beta1", "Balance", {
    "cosmos.bank.v1beta1.Balance": "BalanceAlias",
  });

  expect(result).toBe("BalanceAlias");
});

it("returns the alias name if there's an alias with a function", () => {
  const result = getAliasName("cosmos.bank.v1beta1", "Balance", {
    "cosmos.bank.v1beta1.Balance": (ctx) => {
      return ctx.name + "Alias";
    },
  });

  expect(result).toBe("BalanceAlias");

  const result2 = getAliasName("cosmos.bank.v1beta1", "AllBalance", {
    "cosmos.bank.v1beta1.AllBalance": (ctx) => {
      //replace all the dots with underscores
      const packageName = pascal(ctx.package.replace(/\./g, "_"));
      return packageName + ctx.name + "Alias2";
    },
  });

  expect(result2).toBe("CosmosBankV1beta1AllBalanceAlias2");
});

it("returns the alias name if there's an minimatch match alias", () => {
  const result = getAliasName("cosmos.bank.v1beta1", "Balance", {
    "cosmos.**.*Balance":(ctx) => {
      //replace all the dots with underscores
      const packageName = pascal(ctx.package.replace(/\./g, "_"));
      return packageName + ctx.name + "Alias";
    },
  });

  expect(result).toBe("CosmosBankV1beta1BalanceAlias");

  const result2 = getAliasName("cosmos.bank.v1beta1", "AllBalance", {
    "cosmos.**.*Balance":(ctx) => {
      //replace all the dots with underscores
      const packageName = pascal(ctx.package.replace(/\./g, "_"));
      return packageName + ctx.name + "Alias2";
    },
  });

  expect(result2).toBe("CosmosBankV1beta1AllBalanceAlias2");
});

it("returns the name if there's no alias", () => {
  const result = getAliasName("cosmos.bank.v1beta1", "Balance", {
    "cosmos.**.*Votes": "VotesAlias",
  });

  expect(result).toBe("Balance");
});

// getAliasName tests end

// getQueryMethodNames tests
it("is empty if there's no pattern for getQueryMethodNames", () => {
  const result = getQueryMethodNames("cosmos.bank.v1beta1", [
    "Balance",
    "AllBalance",
  ]);

  expect(result).toMatchObject([]);
});

it("returns all methods contains Balance for getQueryMethodNames", () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["**Balance"]
  );

  expect(result).toMatchObject(["Balance", "AllBalance"]);
});

it("returns Balance matching useBalance for getQueryMethodNames", () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["**.useBalance"]
  );

  expect(result).toMatchObject(["Balance"]);
});

it("returns empty matching *.nft.*.useBalance for getQueryMethodNames", () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["*.nft.*.useBalance"]
  );

  expect(result).toMatchObject([]);
});

it('returns ["Params"] matching *.nft.*.useBalance and **.*arams for getQueryMethodNames', () => {
  const result = getQueryMethodNames(
    "cosmos.bank.v1beta1",
    ["Balance", "AllBalance", "Params"],
    ["*.nft.*.useBalance", "**.*arams"]
  );

  expect(result).toMatchObject(["Params"]);
});
// getQueryMethodNames tests end

it("returns useAB1CAllBalance for makeUsePkgHookName('a.b1.c', 'AllBalance')", () => {
  const result = makeUsePkgHookName("a.b1.c", "AllBalance")

  expect(result).toBe("useAB1CAllBalance")
});

it("returns useAB1CBalance for makeUsePkgHookName('a.b1.c', 'Balance')", () => {
  const result = makeUsePkgHookName("a.b1.c", "Balance")

  expect(result).toBe("useAB1CBalance")
});

it("returns useABalance for makeUsePkgHookName('a', 'Balance')", () => {
  const result = makeUsePkgHookName("a", "Balance")

  expect(result).toBe("useABalance")
});

it("returns pkgAB1CAllBalance for makePkgMethodName('a.b1.c', 'AllBalance')", () => {
  const result = makePkgMethodName("a.b1.c", "AllBalance")

  expect(result).toBe("pkgAB1CAllBalance")
});

it("returns pkgAB1CBalance for makePkgMethodName('a.b1.c', 'Balance')", () => {
  const result = makePkgMethodName("a.b1.c", "Balance")

  expect(result).toBe("pkgAB1CBalance")
});

it("returns pkgABalance for makePkgMethodName('a', 'Balance')", () => {
  const result = makePkgMethodName("a", "Balance")

  expect(result).toBe("pkgABalance")
});

it("returns pkgABalance for makePkgMethodName('a', 'balance')", () => {
  const result = makePkgMethodName("a", "balance")

  expect(result).toBe("pkgABalance")
});