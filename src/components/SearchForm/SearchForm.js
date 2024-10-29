import React from 'react';
import { PropTypes } from 'prop-types';

const KEY_ENTER_CODE = 13;

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: this.props.initialSearchText || ''
    };
  }

  render() {
    const searchText = this.state.searchText;

    return <div data-testid='search-form' className='container'>
      <label className='h4 form-label d-flex'>Find your movie</label>
      <div className='row'>
        <div className='col-9'>
          <input
            type='text'
            data-testid='search-input'
            value={searchText}
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputKeyDown}
            placeholder={this.props.placeholderText}
            title={this.props.placeholderText}
            className='form-control'
          />
        </div>
        <div className='col-3'>
          <button
            type='button'
            data-testid='search-button'
            onClick={this.handleButtonClick}
            disabled={!searchText.length && 'disabled'}
            className='btn btn-primary d-flex'
          >
            {this.props.buttonText}
          </button>
        </div>
      </div>
    </div>
  }

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  handleInputKeyDown = (event) => {
    if (event.keyCode === KEY_ENTER_CODE) {
      this.props.handleSearch(this.state.searchText);
    }
  }

  handleButtonClick = () => {
    this.props.handleSearch(this.state.searchText);
  }

}

SearchForm.propTypes = {
  initialSearchText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default SearchForm;
