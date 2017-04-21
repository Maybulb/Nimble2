import { Component, Children } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';

class EventListener extends Component {
  target = null;

  componentDidMount() {
    this.registerEventListener();
  }

  componentWillUnmount() {
    this.unregisterEventListener();
  }

  getEventNames() {
    if (this.props.name) {
      // Split by space, and remove any empty items
      return this.props.name.split(/\s+/).filter(a => a);
    } else {
      return [];
    }
  }

  registerEventListener() {
    // Unregister the previous event listener (if one exists)
    this.unregisterEventListener();

    const { global, handler } = this.props;
    if (global) {
      this.target = window;
    } else {
      this.target = findDOMNode(this);
    }
    if (this.target) {
      // Only register the event listener if there *is* a target
      this.getEventNames().forEach(name => {
        this.target.addEventListener(name, handler);
      });
    }
  }

  unregisterEventListener() {
    if (this.target) {
      this.getEventNames().forEach(name => {
        this.target.removeEventListener(name, this.props.handler);
      });
    }
  }

  render() {
    if (this.props.children) {
      return Children.only(this.props.children);
    } else {
      return null;
    }
  }
}

EventListener.defaultProps = {
  global: false,
};

EventListener.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  global: PropTypes.bool,
};

export default EventListener;
