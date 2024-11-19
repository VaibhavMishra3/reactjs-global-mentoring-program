describe('EditMovieForm', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('validates route', () => {
    cy.visit('/edit/11472')

    cy.url().should('be.eq', 'http://localhost:3000/edit/11472');

    cy.findByTestId('edit-movie-form').should('be.visible');
  });

  it('edits movie', () => {
    cy.findByTestId('add-movie').click();

    // open add movie form
    cy.findByTestId('add-movie-form').should('be.visible');

    // enter new movie data
    const title1 = 'test ' + new Date().valueOf();
    const releaseDate1 = '2001-01-01';
    const posterPath1 = 'https://image.tmdb.org/1.jpg';
    const voteAverage1 = '10';
    const runtime1 = '100';
    const overview1 = 'something';

    cy.get('input[name=title]').type(title1);
    cy.get('input[name=release_date]').type(releaseDate1);
    cy.get('input[name=poster_path]').type(posterPath1);
    cy.get('input[name=vote_average]').type(voteAverage1);
    cy.get('select[name=genres]').select(0);
    cy.get('input[name=runtime]').type(runtime1);
    cy.get('textarea[name=overview]').type(overview1);

    cy.get('button[type=submit]').click();
    cy.wait(2000);

    // check movie details
    cy.findByTestId('add-movie-form').should('not.exist');
    cy.findByTestId('movie-details').should('be.visible');

    cy.findByTestId('movie-details-title').should('have.text', title1);
    cy.findByTestId('movie-details-vote').should('have.text', voteAverage1);
    cy.findByTestId('movie-details-genres').should('have.text', 'Action');
    cy.findByTestId('movie-details-year').should('have.text', '2001');
    cy.findByTestId('movie-details-runtime').should('have.text', '1h 40min');
    cy.findByTestId('movie-details-overview').should('have.text', overview1);

    cy.findByTestId('close-movie-details').click();

    cy.get('input[data-testid=search-input]').type(title1);
    cy.get('button[data-testid=search-button]').click();

    cy.wait(2000);

    // check movie tiles
    cy.get('[data-testid=movie-counter]').contains('1 movie found').should('exist');
    cy.findAllByTestId('movie-tile').first().findByTestId('movie-tile-title').should('have.text', title1);

    cy.findByTestId('edit-movie').click();

    // open edit movie form
    cy.findByTestId('edit-movie-form').should('be.visible');

    cy.get('input[name=title]').should('have.value', title1);
    cy.get('input[name=release_date]').should('have.value', releaseDate1);
    cy.get('input[name=poster_path]').should('have.value', posterPath1);
    cy.get('input[name=vote_average]').should('have.value', voteAverage1);
    cy.get('select[name=genres]').invoke('val').should('deep.equal', ['Action']);
    cy.get('input[name=runtime]').should('have.value', runtime1);
    cy.get('textarea[name=overview]').should('have.value', overview1);

    // enter edit movie data
    const title2 = 'test ' + new Date().valueOf();
    const releaseDate2 = '2002-02-02';
    const posterPath2 = 'https://image.tmdb.org/2.jpg';
    const voteAverage2 = '1';
    const runtime2 = '200';
    const overview2 = 'anything';

    cy.get('input[name=title]').clear().type(title2);
    cy.get('input[name=release_date]').clear().type(releaseDate2);
    cy.get('input[name=poster_path]').clear().type(posterPath2);
    cy.get('input[name=vote_average]').clear().type(voteAverage2);
    cy.get('select[name=genres]').select(1);
    cy.get('input[name=runtime]').clear().type(runtime2);
    cy.get('textarea[name=overview]').clear().type(overview2);

    cy.get('button[type=submit]').click();
    cy.wait(2000);

    // check movie details
    cy.findByTestId('add-movie-form').should('not.exist');
    cy.findByTestId('movie-details').should('be.visible');

    cy.findByTestId('close-movie-details').click();

    cy.get('input[data-testid=search-input]').clear().type(title2);
    cy.get('button[data-testid=search-button]').click();

    cy.wait(2000);

    // check movie tiles
    cy.get('[data-testid=movie-counter]').contains('1 movie found').should('exist');
    cy.findAllByTestId('movie-tile').first().findByTestId('movie-tile-title').should('have.text', title2);

    cy.findAllByTestId('movie-tile').first().click();

    // check movie details
    cy.findByTestId('movie-details-title').should('have.text', title2);
    cy.findByTestId('movie-details-vote').should('have.text', voteAverage2);
    cy.findByTestId('movie-details-genres').should('have.text', 'Adventure');
    cy.findByTestId('movie-details-year').should('have.text', '2002');
    cy.findByTestId('movie-details-runtime').should('have.text', '3h 20min');
    cy.findByTestId('movie-details-overview').should('have.text', overview2);
  });

});
