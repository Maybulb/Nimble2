import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from 'components/SearchBox';
import SearchButton from 'components/SearchButton';
import './Search.css';

class Search extends Component {
  focus() {
    this.searchBox.focus();
  }
  render() {
    const { value, loading, onChange, onSearch } = this.props;
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          onSearch && onSearch(value);
        }}
        className="Search primary"
      >
        <SearchBox
          ref={ref => (this.searchBox = ref)}
          value={value}
          onChange={onChange}
        />
        <SearchButton
          loading={loading}
          disabled={!value}
        />
      </form>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
