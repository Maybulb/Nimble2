import React from 'react';
import classname from 'classname';

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

export default SearchButton;
