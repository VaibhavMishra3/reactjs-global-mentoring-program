import React from 'react';
import { PropTypes } from 'prop-types';

class GenreSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGenres: this.props.selectedGenres
    }
  }

  render() {
    return <fieldset className='d-flex'>
      {
        this.props.genres.map((genre, key) => {
          return <div key={genre} className='form-check form-check-inline'>
            <input
              data-testid='genre-select-checkbox'
              type='checkbox'
              defaultChecked={this.state.selectedGenres.includes(genre) ? 'checked' : ''}
              id={genre}
              name={genre}
              value={genre}
              onClick={this.handleClick}
              className='form-check-input'
            />
            <label
              data-testid='genre-select-label'
              role='label'
              htmlFor={genre}
              className='form-check-label'
            >
              {genre}
            </label>
          </div>
        })
      }
    </fieldset>
  }

  handleClick = (event) => {
    const selectedGenres = [...this.state.selectedGenres];
    const selectedGenre = event.target.value;

    if (selectedGenres.includes(selectedGenre)) {
      selectedGenres.splice(selectedGenres.indexOf(selectedGenre), 1);

      this.setState(prevState => ({ ...prevState, selectedGenres: selectedGenres }));
      this.props.onSelect(selectedGenres);
    } else {
      selectedGenres.push(selectedGenre);

      this.setState(prevState => ({ ...prevState, selectedGenres: selectedGenres }));
      this.props.onSelect(selectedGenres)
    }
  }

}

GenreSelect.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedGenres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default GenreSelect;
