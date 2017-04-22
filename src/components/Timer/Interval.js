import { Component } from 'react';

class Interval extends Component {
  componentDidMount() {
    this.interval = setInterval(this.props.handler, this.props.ms);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return null;
  }
}

export default Interval;
