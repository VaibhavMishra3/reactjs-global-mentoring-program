describe('SortControl', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('has default values', () => {
    cy.findByTestId('sort-select').children().eq(0).should('have.value', 'title');
    cy.findByTestId('sort-select').children().eq(0).should('have.text', 'Title');

    cy.findByTestId('sort-select').children().eq(1).should('have.value', 'release_date');
    cy.findByTestId('sort-select').children().eq(1).should('have.text', 'Release date');

    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'title');
  });

  it('sorts by title (by default)', () => {
    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'title');

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/');

    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '¡Three Amigos!');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '\'71');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '(500) Days of Summer');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '[REC]');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '#realityhigh');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '10 Cloverfield Lane');
  });

  it('sorts by release date', () => {
    cy.findByTestId('sort-select').select(1);
    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'release_date');

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?sort=release_date');

    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', 'The Gold Rush');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', 'Metropolis');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', 'All Quiet on the Western Front');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', 'City Lights');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', 'Dracula');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', 'Frankenstein');
  });

  it('sorts by title', () => {
    cy.findByTestId('sort-select').select(1);
    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'release_date');

    cy.findByTestId('sort-select').select(0);
    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'title');

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?sort=title');

    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '¡Three Amigos!');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '\'71');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '(500) Days of Summer');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '[REC]');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '#realityhigh');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '10 Cloverfield Lane');
  });

});
