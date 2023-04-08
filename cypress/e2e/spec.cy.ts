describe('Main Navigation', () => {
  it('the logo image should load', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('[data-test="main-nav"]')
      .find('[data-test="main-nav__logo"]')
      .should('be.visible')
      .and((img) => {
        // "clientWidth" and "clientHeight" are set when the image loads
        expect(img[0].clientWidth).to.be.greaterThan(0);
        expect(img[0].clientHeight).to.be.greaterThan(0);
      });
  });
});
