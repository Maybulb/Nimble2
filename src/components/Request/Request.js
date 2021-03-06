import { Component } from 'react';
import PropTypes from 'prop-types';
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
    const result = this.transformResult(json.queryresult);
    console.debug(result);
    return result;
  }
  transformResult(result) {
    const clone = JSON.parse(JSON.stringify(result)); // The original object is from Node.js, so dev tools does some funnies by making every property a getter/setter
    clone.pods.forEach(pod => {
      pod.subpods.forEach(subpod => {
        if (subpod.img) {
          subpod.img.scale = this.props.scale;
        }
      });
    });
    return clone;
  }
  async startRequest(props) {
    const { onRequest, onResult } = this.props;
    const requestP = this.request(props);
    onRequest && onRequest(requestP);
    this.setState({ pending: true });
    try {
      const result = await requestP;
      this.setState({ result });
      onResult && onResult(result);
    } finally {
      this.setState({ pending: false });
    }
  }
  render() {
    const { render } = this.props;
    const { pending, result } = this.state;
    if (!pending && result) {
      return render(result);
    }
    return render(null);
  }
}

Request.defaultProps = {
  scale: window.devicePixelRatio,
  width: 380,
};

Request.propTypes = {
  token: PropTypes.string.isRequired,
  query: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
  scale: PropTypes.number,
  width: PropTypes.number,
  onRequest: PropTypes.func,
  onResult: PropTypes.func,
  render: PropTypes.func.isRequired,
};

/*

<Request
  token=""
  query="Hello World"
  onRequest={() => {}}
  onResult={result => {}}
  render={result => (
    // Render the response
  )}
/>

*/

export default Request;
