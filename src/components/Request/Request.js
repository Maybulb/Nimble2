import { Component } from 'react';
import require from 'util/require';

const fetch = require('node-fetch');
const { stringify } = require('querystring');

class Request extends Component {
  state = {
    result: null,
    pending: false,
  };
  componentWillMount() {
    if (this.props.query) {
      this.startRequest(this.props);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.query && this.props.query !== nextProps.query) {
      this.startRequest(nextProps);
    }
  }
  getRequestUrl({ token, query, scale, width }) {
    const params = stringify({
      appid: token,
      input: query,
      mag: scale,
      width: width * scale,
      output: 'json',
    });
    return `http://api.wolframalpha.com/v2/query?${params}`;
  }
  async request(props) {
    const response = await fetch(this.getRequestUrl(props));
    const json = await response.json();
    return json.queryresult;
  }
  async startRequest(props) {
    const { onRequest, onResult } = this.props;
    const requestP = this.request(props);
    onRequest && onRequest(requestP);
    this.setState({ pending: true });
    try {
      const result = await requestP;
      console.debug(result);
      this.setState({ result });
      onResult && onResult(result);
    } finally {
      this.setState({ pending: false });
    }
  }
  render() {
    const { pending, result } = this.state;
    if (!pending && result) {
      return this.props.render(result);
    }
    return null;
  }
}

Request.defaultProps = {
  scale: 2,
  width: 380,
};

/*

<Request
  key=""
  query="Hello World"
  onRequest={() => {}}
  onResult={result => {}}
  render={result => (
    // Render the response
  )}
/>

*/

export default Request;
