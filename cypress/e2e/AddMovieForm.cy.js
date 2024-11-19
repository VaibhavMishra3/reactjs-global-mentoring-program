describe('AddMovieForm', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('validates route', () => {
    cy.visit('/new')

    cy.url().should('be.eq', 'http://localhost:3000/new');

    cy.findByTestId('add-movie-form').should('be.visible');
  });

  it('adds movie', () => {
    cy.findByTestId('add-movie').click();

    // open add movie form
    cy.findByTestId('add-movie-form').should('be.visible');

    cy.get('input[name=title]').should('be.empty');
    cy.get('input[name=release_date]').should('be.empty');
    cy.get('input[name=poster_path]').should('be.empty');
    cy.get('input[name=vote_average]').should('be.empty');
    cy.get('select[name=genres]').invoke('val').should('deep.equal', []);
    cy.get('input[name=runtime]').should('be.empty');
    cy.get('textarea[name=overview]').should('be.empty');

    // enter new movie data
    const title = 'test ' + new Date().valueOf();
    const releaseDate = '2001-01-01';
    const posterPath = 'https://image.tmdb.org/1.jpg';
    const voteAverage = '10';
    const runtime = '100';
    const overview = 'something';

    cy.get('input[name=title]').type(title);
    cy.get('input[name=release_date]').type(releaseDate);
    cy.get('input[name=poster_path]').type(posterPath);
    cy.get('input[name=vote_average]').type(voteAverage);
    cy.get('select[name=genres]').select(0);
    cy.get('input[name=runtime]').type(runtime);
    cy.get('textarea[name=overview]').type(overview);

    cy.get('button[type=submit]').click();
    cy.wait(2000);

    // check movie details
    cy.findByTestId('add-movie-form').should('not.exist');
    cy.findByTestId('movie-details').should('be.visible');

    cy.findByTestId('movie-details-title').should('have.text', title);
    cy.findByTestId('movie-details-vote').should('have.text', voteAverage);
    cy.findByTestId('movie-details-genres').should('have.text', 'Action');
    cy.findByTestId('movie-details-year').should('have.text', '2001');
    cy.findByTestId('movie-details-runtime').should('have.text', '1h 40min');
    cy.findByTestId('movie-details-overview').should('have.text', overview);
  });

  it('validates movie', () => {
    cy.findByTestId('add-movie').click();

    // open add movie form
    cy.findByTestId('add-movie-form').should('be.visible');

    cy.get('input[name=title]').should('be.empty');
    cy.get('input[name=release_date]').should('be.empty');
    cy.get('input[name=poster_path]').should('be.empty');
    cy.get('input[name=vote_average]').should('be.empty');
    cy.get('select[name=genres]').invoke('val').should('deep.equal', []);
    cy.get('input[name=runtime]').should('be.empty');
    cy.get('textarea[name=overview]').should('be.empty');

    cy.get('button[type=submit]').click();

    cy.findByTestId('add-movie-form').should('be.visible');

    // check required validation errors
    cy.findByTestId('error-title').should('have.text', 'This field is required');
    cy.findByTestId('error-release_date').should('have.text', 'This field is required');
    cy.findByTestId('error-poster_path').should('have.text', 'This field is required');
    cy.findByTestId('error-vote_average').should('have.text', 'This field is required');
    cy.findByTestId('error-genres').should('have.text', 'This field is required');
    cy.findByTestId('error-runtime').should('have.text', 'This field is required');
    cy.findByTestId('error-overview').should('have.text', 'This field is required');

    cy.get('input[name=release_date]').type('error');
    cy.get('input[name=poster_path]').type('error');
    cy.get('input[name=vote_average]').type('-1');
    cy.get('input[name=runtime]').type('-1');

    cy.get('button[type=submit]').click();

    cy.findByTestId('add-movie-form').should('be.visible');

    // check specific validation errors
    cy.findByTestId('error-release_date').should('have.text', 'This field must be a YYYY-MM-DD date');
    cy.findByTestId('error-poster_path').should('have.text', 'This field must be a valid URL');
    cy.findByTestId('error-vote_average').should('have.text', 'This field must be from 0 to 10 inclusive');
    cy.findByTestId('error-runtime').should('have.text', 'This field must be greater than 0');
  });

});
