describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

cy.get("locator").then(($el) => {
  const str = $el.text();
  expect(
    Number(
      str
        .slice(str.indexOf("over") + 5, str.indexOF("results") - 1)
        .replace(",", "")
    )
  );
});
