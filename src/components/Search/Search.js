import React, { Component } from 'react';
import SearchForm from 'components/SearchForm';
import EventListener from 'components/EventListener';
import Theme from 'components/Theme';
import Request from 'components/Request';
import Results from 'components/Results';

class Search extends Component {
  state = {
    query: '',
    search: '',
    loading: false,
  };
  search = query => {
    this.setState({ query });
  }
  handleSearch = loading => {
    return () => {
      this.setState({ loading });
      this.props.updateDimensions();
    };
  }
  render() {
    const { settings } = this.props;
    return (
      <div>
        <button onClick={() => this.props.switchPage('settings')}>
          Test
        </button>
        <Theme
          color={settings.theme}
        />
        <EventListener
          global
          name="keydown focus"
          handler={() => this.searchForm.focus()}
        />
        <SearchForm
          ref={ref => (this.searchForm = ref)}
          value={this.state.search}
          loading={this.state.loading}
          onChange={search => this.setState({ search })}
          onSubmit={this.search}
        />
        <Request
          token={process.env.REACT_APP_WOLFRAM_ALPHA_API_KEY}
          query={this.state.query}
          onRequest={this.handleSearch(true)}
          onResult={this.handleSearch(false)}
          render={results => (
            <Results
              query={this.state.query}
              {...results}
            />
          )}
        />
      </div>
    );
  }
}

export default Search;
