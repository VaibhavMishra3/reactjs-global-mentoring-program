describe('MovieCounter', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('counts movies', () => {
    cy.get('[data-testid=movie-counter]').contains('9 movies found').should('exist');

    cy.get('input[data-testid=search-input]').type('eleven');
    cy.contains('Search').click();

    cy.wait(2000);

    cy.get('[data-testid=movie-counter]').contains('1 movie found').should('exist');

    cy.get('input[data-testid=search-input]').clear();
    cy.get('input[data-testid=search-input]').type('nonexistent movie title');
    cy.contains('Search').click();

    cy.wait(2000);

    cy.get('[data-testid=movie-counter]').contains('0 movies found').should('exist');
  });

});
