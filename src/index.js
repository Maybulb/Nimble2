import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

import Search from 'components/Search';
import Theme from 'components/Theme';
import Request from 'components/Request';
import Results from 'components/Results';
import resize from 'util/resize';

class App extends Component {
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
      setTimeout(resize);
    };
  }
  render() {
    return (
      <div>
        <Theme color="red" />
        <Search
          value={this.state.search}
          loading={this.state.loading}
          onChange={search => this.setState({ search })}
          onSearch={this.search}
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

render(<App />, document.querySelector('#root'));
setTimeout(resize);
