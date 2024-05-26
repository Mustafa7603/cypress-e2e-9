class Tables {
  /**
   * @param {string} header
   * @returns
   * @example
   * getSpecificTableHeaderBylabel('rank')
   */
  Locators() {
    return cy.get(".header");
  }
}

export default Tables;
