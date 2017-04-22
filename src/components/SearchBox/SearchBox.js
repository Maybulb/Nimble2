import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from '../EventListener';
import suggestions from 'assets/suggestions.json';
import './SearchBox.css';

class SearchBox extends Component {
  state = {
    suggestion: 0,
  };
  componentDidMount() {
    setInterval(this.pickRandomSuggestion, 1e4);
    this.pickRandomSuggestion();
  }
  pickRandomSuggestion = () => {
    const index = Math.floor(Math.random() * (suggestions.length - 1));
    this.setState({ suggestion: index });
  }
  getSuggestion() {
    return suggestions[this.state.suggestion];
  }
  handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowRight': {
        if (!this.props.value) {
          this.handleChange(this.getSuggestion());
        }
        break;
      }
      default: {
        // Ignore
      }
    }
  }
  handleChange(value) {
    this.props.onChange(value);
  }
  focus() {
    this.input.focus();
  }
  render() {
    const { suggestions } = this.props;
    return (
      <div className="SearchBox">
        <EventListener
          global
          name="keydown"
          handler={this.handleKeyDown}
        />
        <input
          ref={ref => (this.input = ref)}
          value={this.props.value}
          placeholder={suggestions ? this.getSuggestion() : null}
          onChange={event => this.handleChange(event.target.value)}
          autoFocus
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.any,
  ]),
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
