import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

import Search from './components/Search';
import Theme from './components/Theme';
import Request from './components/WolframAlphaRequest';
import Results from './components/WolframAlphaResults';
import resize from './util/resize';

class App extends Component {
  state = {
    query: '',
    search: '',
    loading: false,
  };
  search = query => {
    this.setState({ query });
  }
  startSearch = () => {
    this.setState({ loading: true });
  }
  finishSearch = () => {
    this.setState({ loading: false });
    setTimeout(resize);
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
          onRequest={this.startSearch}
          onResult={this.finishSearch}
          render={results => (
            <Results pods={results.pods} />
          )}
        />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
setTimeout(resize);
