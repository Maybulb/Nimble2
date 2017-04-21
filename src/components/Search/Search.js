import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from 'components/SearchBox';
import SearchButton from 'components/SearchButton';
import './Search.css';

function Search({ value, loading, onChange, onSearch }) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSearch && onSearch(value);
      }}
      className="Search primary"
    >
      <SearchBox
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

Search.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
