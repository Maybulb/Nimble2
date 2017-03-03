import React, { PropTypes } from 'react';
import SearchBox from './SearchBox';
import SearchButton from './SearchButton';

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
