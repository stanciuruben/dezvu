describe('Main Navigation', () => {
  it('the logo image should load', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('[data-test="main-nav"]')
      .find('[data-test="main-nav__logo"]')
      .should('be.visible')
      .and(($img) => {
        // "clientWidth" and "clientHeight" are set when the image loads
        expect($img[0].clientWidth).to.be.greaterThan(0);
        expect($img[0].clientHeight).to.be.greaterThan(0);
      });
  });

  it('should render 404 when path is missing with a link back to home', () => {
    cy.visit('http://localhost:4200/some-crazy-route');
    cy.get('h1').contains('Error: 404 | Page Not Found');
    cy.get('[data-test="back-home-link"]').should('be.visible');
    cy.get('[data-test="back-home-link"]').click();
    cy.url({ decode: true }).should('contain', 'home');
  });

  it('should toggle the main menu on screenWidth < 900', () => {
    cy.visit('http://localhost:4200/home');
    cy.viewport(989, 500);
    cy.get('[data-test="main-nav__menu-toggle"]').should(
      'have.attr',
      'aria-expanded',
      'false'
    );
    cy.get('[data-test="main-nav__link-list"]').should('not.be.visible');
    cy.get('[data-test="main-nav__menu-toggle"]').click();
    cy.get('[data-test="main-nav__menu-toggle"]').should(
      'have.attr',
      'aria-expanded',
      'true'
    );
    cy.get('[data-test="main-nav__link-list"]').should('be.visible');
  });

  it('should resize logo when screenWidth < 600', () => {
    cy.visit('http://localhost:4200/home');
    cy.viewport(599, 500);
    cy.get('[data-test="main-nav__logo"]')
      .should('be.visible')
      .and(($img) => {
        expect($img[0].clientWidth).to.be.closeTo(150, 0.1);
        expect($img[0].clientHeight).to.be.closeTo(30, 0.1);
      });
  });
});
