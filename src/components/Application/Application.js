import React, { Component } from 'react';
import Search from 'components/Search';
import Settings from 'components/Settings';
import * as resize from 'util/resize';
import settings, {
  setup as setupSetting,
  reset as resetSettings,
} from 'util/settings';

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
  componentDidMount() {
    this.updateDimensions();
  }
  updateDimensions = () => {
    resize.next();
  }
  changeSetting = (name, value) => {
    settings.set(name, value);
    setupSetting(name);
    this.forceUpdate();
  }
  resetSettings = () => {
    resetSettings();
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
        resetSettings={this.resetSettings}
        {...this.state.props}
      />
    );
  }
}

export default Application;
