import { Component } from 'react';

class Timeout extends Component {
  componentDidMount() {
    this.timeout = setTimeout(this.props.handler, this.props.ms);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  render() {
    return null;
  }
}

export default Timeout;
