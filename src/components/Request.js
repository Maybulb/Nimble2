import { Component } from 'react';
import require from '../util/require';

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
  getRequestUrl(props) {
    const params = stringify({
      appid: props.token,
      input: props.query,
      mag: props.scale,
      width: props.width,
      output: 'json',
    });
    return `http://api.wolframalpha.com/v2/query?${params}`;
  }
  request(props) {
    return fetch(this.getRequestUrl(props))
      .then(response => response.json())
      .then(json => json.queryresult);
  }
  startRequest(props) {
    const { onRequest, onResult } = this.props;
    const request = this.request(props)
      .then(result => {
        console.debug(result);
        this.setState({ result });
        onResult && onResult(result);
      })
      .catch()
      .then(() => {
        this.setState({ pending: false });
      });
    onRequest && onRequest(request);
    this.setState({ pending: true });
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
  width: 800,
};

/*

<Request
  key=""
  query="Hello World"
  onRequest={() => {}}
  onResult={() => {}}
  render={result => (

  )}
/>

*/

export default Request;
