const soma = require("./scripts");

describe("A função soma", () => {
  test("Retorna 5 ao somar 2 e 3", () => {
    expect(soma(2, 3)).toBe(5);
  });
});
