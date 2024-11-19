describe('Router', () => {

  it('navigates by search param', () => {
    cy.visit('/?search=twelve')
    cy.wait(2000);

    cy.get('input[data-testid=search-input]').should('have.value', 'twelve');

    cy.get('[data-testid=movie-counter]').contains('2 movies found').should('exist');
    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', 'Ocean\'s Twelve');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', 'Twelve Monkeys');
  });

  it('navigates by genre param', () => {
    cy.visit('/?genres=Action')
    cy.wait(2000);

    cy.findAllByTestId('genre-select-checkbox').eq(0).should('be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(2).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(3).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(4).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(5).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(6).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(7).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(8).should('not.be.checked');

    cy.get('[data-testid=movie-counter]').contains('9 movies found').should('exist');
    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '\'71');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '10,000 BC');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '13 Assassins');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '13 Hours: The Secret Soldiers of Benghazi');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '16 Blocks');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '2 Guns');
  });

  it('navigates by sort param', () => {
    cy.visit('/?sort=title')
    cy.wait(2000);

    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'title');

    cy.get('[data-testid=movie-counter]').contains('9 movies found').should('exist');
    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', '¡Three Amigos!');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', '\'71');
    cy.findAllByTestId('movie-tile').eq(2).findByTestId('movie-tile-title').should('have.text', '(500) Days of Summer');
    cy.findAllByTestId('movie-tile').eq(3).findByTestId('movie-tile-title').should('have.text', '[REC]');
    cy.findAllByTestId('movie-tile').eq(4).findByTestId('movie-tile-title').should('have.text', '#realityhigh');
    cy.findAllByTestId('movie-tile').eq(5).findByTestId('movie-tile-title').should('have.text', '10 Cloverfield Lane');
  });

  it('navigates by all sort params', () => {
    cy.visit('/?search=nine&genres=Comedy&sort=title')
    cy.wait(2000);

    cy.get('input[data-testid=search-input]').should('have.value', 'nine');

    cy.findAllByTestId('genre-select-checkbox').eq(0).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(2).should('be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(3).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(4).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(5).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(6).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(7).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(8).should('not.be.checked');

    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'title');

    cy.get('[data-testid=movie-counter]').contains('2 movies found').should('exist');
    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', 'Nine Months');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', 'The Whole Nine Yards');
  });

  it('navigates by movie id', () => {
    cy.visit('/11472')
    cy.wait(2000);

    cy.findByTestId('movie-details-title').should('have.text', 'Nine Months');

    cy.findByTestId('close-movie-details').click();

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?sort=title');
  });

  it('navigates by all sort params and selects/deselects movie details', () => {
    cy.visit('/?search=nine&genres=Comedy&sort=title')
    cy.wait(2000);

    cy.get('input[data-testid=search-input]').should('have.value', 'nine');

    cy.findAllByTestId('genre-select-checkbox').eq(0).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(1).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(2).should('be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(3).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(4).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(5).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(6).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(7).should('not.be.checked');
    cy.findAllByTestId('genre-select-checkbox').eq(8).should('not.be.checked');

    cy.findByTestId('sort-select').find('option:selected').should('have.value', 'title');

    cy.get('[data-testid=movie-counter]').contains('2 movies found').should('exist');
    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', 'Nine Months');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', 'The Whole Nine Yards');

    cy.findAllByTestId('movie-tile').first().click();

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/11472?search=nine&genres=Comedy&sort=title');

    cy.findByTestId('movie-details-title').should('have.text', 'Nine Months');

    cy.get('[data-testid=movie-counter]').contains('2 movies found').should('exist');
    cy.findAllByTestId('movie-tile').eq(0).findByTestId('movie-tile-title').should('have.text', 'Nine Months');
    cy.findAllByTestId('movie-tile').eq(1).findByTestId('movie-tile-title').should('have.text', 'The Whole Nine Yards');

    cy.findByTestId('close-movie-details').click();

    cy.wait(2000);
    cy.url().should('be.eq', 'http://localhost:3000/?search=nine&genres=Comedy&sort=title');
  });

});
