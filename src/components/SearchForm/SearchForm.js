import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from 'components/SearchBox';
import SearchButton from 'components/SearchButton';
import './SearchForm.css';

class SearchForm extends Component {
  focus() {
    this.searchBox.focus();
  }
  render() {
    const { value, loading, suggestions, onChange, onSubmit } = this.props;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          onSubmit && onSubmit(value);
        }}
        className="SearchForm primary"
      >
        <SearchBox
          ref={ref => (this.searchBox = ref)}
          value={value}
          onChange={onChange}
          suggestions={suggestions}
        />
        <SearchButton
          loading={loading}
          disabled={!value}
        />
      </form>
    );
  }
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
