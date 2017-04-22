import React, { Component } from 'react';
import Search from 'components/Search';
import Settings from 'components/Settings';
import * as resize from 'util/resize';
import settings from 'util/settings';

class Application extends Component {
  state = {
    page: Search,
    props: {},
  };
  switchPage = (id, props = {}) => {
    let page = null;
    switch(id) {
      case 'settings': {
        page = Settings;
        break;
      }
      case 'search':
      default: {
        page = Search;
        break;
      }
    }
    this.setState({
      page,
      props,
    });
    resize.next();
  }
  updateDimensions = () => {
    resize.next();
  }
  changeSetting = (name, value) => {
    settings.set(name, value);
    this.forceUpdate();
  }
  render() {
    const Page = this.state.page;
    return (
      <Page
        settings={settings.getAll()}
        switchPage={this.switchPage}
        updateDimensions={this.updateDimensions}
        changeSetting={this.changeSetting}
        {...this.state.props}
      />
    );
  }
}

export default Application;
