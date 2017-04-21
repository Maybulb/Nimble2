import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './SearchButton.css';

function SearchButton({ loading, disabled, onClick }) {
  return (
    <button
      type="submit"
      className={classname('SearchButton button primary-color', {
        'SearchButton--disabled': disabled,
      })}
      onClick={onClick}
    >
      <span className={classname('search', !loading && 'active')}>
        <i className="fa fa-search" aria-hidden />
      </span>
      <span className={classname('refresh', loading && 'active')}>
        <i className="fa fa-refresh animate-loader" aria-hidden />
      </span>
    </button>
  );
}

SearchButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SearchButton;
