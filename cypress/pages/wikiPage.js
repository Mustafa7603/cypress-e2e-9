class Wiki {
  Logo() {
    return cy.get("h1 > .central-textlogo__image");
  }

  Slogan() {
    return cy.get('[data-jsl10n="portal.slogan"]');
  }
}

export default Wiki;
