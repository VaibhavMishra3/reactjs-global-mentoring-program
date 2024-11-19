const BACKEND_URL = 'http://localhost:4000/movies';

export const MovieService = {

  getMovies: async ({ search, genres, sort }) => {
    const queryParams = [
      'sortOrder=asc',
      'searchBy=title',
      'limit=9',
      ...(search ? [`search=${search}`] : []),
      ...(genres && genres.length > 0 ? [`filter=${genres}`] : []),
      ...(sort ? [`sortBy=${sort}`] : [])
    ];

    const queryString = queryParams.join('&');
    const url = `${BACKEND_URL}?${queryString}`;

    return await fetch(url)
      .then(response => response.json())
      .then(data => data.data);
  },

  getMovie: async (movieId) => {
    const url = `${BACKEND_URL}/${movieId}`;

    return await fetch(url)
      .then(response => response.json());
  },

  addMovie: async (movie) => {
    const url = `${BACKEND_URL}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });

    return response.json();
  },

  editMovie: async (movie) => {
    const url = `${BACKEND_URL}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });

    return response.json();
  },

}
