import { Component } from 'react';
import require from '../util/require';

const fetch = require('node-fetch');
const { stringify } = require('querystring');

class WolframAlphaRequest extends Component {
  state = {
    result: null,
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
    const request = this.request(props).then(result => {
      console.debug(result);
      this.setState({ result });
      onResult && onResult(result);
    });
    onRequest && onRequest(request);
  }
  render() {
    if (this.state.result) {
      return this.props.render(this.state.result);
    }
    return null;
  }
}

WolframAlphaRequest.defaultProps = {
  scale: 2,
  width: 800,
};

/*

<WolframAlphaRequest
  key=""
  query="Hello World"
  onSuccess={() => (
    <pre>
      {JSON.stringify(response, null, '  ')}
    </pre>
  )}
  onError={err => {
    <div>
      Couldn't find anything for "Hello World".
    </div>
  }}
  render={response => (

  )}
/>

*/

export default WolframAlphaRequest;
