describe('MovieTile', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('renders movie tiles', () => {
    cy.findAllByTestId('movie-tile').its('length').should('be.eq', 9);

    cy.findAllByTestId('movie-tile').first().findByTestId('movie-tile-title').should('have.text', '¡Three Amigos!');
    cy.findAllByTestId('movie-tile').first().findByTestId('movie-tile-genres').should('have.text', 'Comedy, Western');
    cy.findAllByTestId('movie-tile').first().findByTestId('movie-tile-year').should('have.text', '1986');
  });

  it('selects movie tiles', () => {
    cy.findAllByTestId('movie-tile').its('length').should('be.eq', 9);

    cy.get('input[data-testid=search-input]').type('eleven');
    cy.get('button[data-testid=search-button]').click();

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?search=eleven&sort=title');

    cy.findAllByTestId('movie-tile').its('length').should('be.eq', 1);

    cy.findAllByTestId('movie-tile').first().findByTestId('movie-tile-title').should('have.text', 'Ocean\'s Eleven');

    cy.get('input[data-testid=search-input]').clear();
    cy.get('input[data-testid=search-input]').type('nonexistent movie title');
    cy.get('button[data-testid=search-button]').click();

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?search=nonexistent+movie+title&sort=title');

    cy.findAllByTestId('movie-tile').should('not.exist');
  });

});
