describe('GenreSelect', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('has genre texts', () => {
    cy.findAllByTestId('genre-select-label').its('length').should('be.eq', 9);

    cy.findAllByTestId('genre-select-label').eq(0).should('have.text', 'Action');
    cy.findAllByTestId('genre-select-label').eq(1).should('have.text', 'Adventure');
    cy.findAllByTestId('genre-select-label').eq(2).should('have.text', 'Comedy');
    cy.findAllByTestId('genre-select-label').eq(3).should('have.text', 'Crime');
    cy.findAllByTestId('genre-select-label').eq(4).should('have.text', 'Fantasy');
    cy.findAllByTestId('genre-select-label').eq(5).should('have.text', 'History');
    cy.findAllByTestId('genre-select-label').eq(6).should('have.text', 'Science Fiction');
    cy.findAllByTestId('genre-select-label').eq(7).should('have.text', 'Thriller');
    cy.findAllByTestId('genre-select-label').eq(8).should('have.text', 'Western');
  });

  it('has default genre selections', () => {
    cy.findAllByTestId('genre-select-checkbox').its('length').should('be.eq', 9);

    cy.findAllByTestId('genre-select-checkbox').eq(0).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(2).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(3).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(4).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(5).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(6).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(7).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(8).should('not.be.checked');
  });

  it('selects by all genres', () => {
    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/');

    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '¡Three Amigos!');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '\'71');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '(500) Days of Summer');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '[REC]');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '#realityhigh');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '10 Cloverfield Lane');
  });

  it('selects by one genre', () => {
    cy.findAllByTestId('genre-select-checkbox').eq(0).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(0).click();
    cy.findAllByTestId('genre-select-checkbox').eq(0).should('be.checked');

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?genres=Action&sort=title');

    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '\'71');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '10,000 BC');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '13 Assassins');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '13 Hours: The Secret Soldiers of Benghazi');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '16 Blocks');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '2 Guns');
  });

  it('selects by another genre', () => {
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(1).click();
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('be.checked');

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?genres=Adventure&sort=title');

    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '10,000 BC');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '127 Hours');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '13 Assassins');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '16 Blocks');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '20,000 Leagues Under the Sea');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '2001: A Space Odyssey');
  });

  it('selects by two genres', () => {
    cy.findAllByTestId('genre-select-checkbox').eq(0).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(0).click();
    cy.findAllByTestId('genre-select-checkbox').eq(1).click();
    cy.findAllByTestId('genre-select-checkbox').eq(0).should('be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('be.checked');

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?genres=Action&genres=Adventure&sort=title');

    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '10,000 BC');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '13 Assassins');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '16 Blocks');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '2012');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '30 Minutes or Less');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '300');
  });

});
