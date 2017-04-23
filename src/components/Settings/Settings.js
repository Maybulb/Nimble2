import React, { Component } from 'react';
import TitleBar from 'components/TitleBar';
import Theme from 'components/Theme';
import IconButton from 'components/IconButton';
import SettingsGroup from './SettingsGroup';
import TickBoxSetting from './TickBoxSetting';
import ThemeSetting from './ThemeSetting';

const generalSettings = [
  {
    id: 'startup',
    title: 'Open Nimble on startup',
    supported: false,
  },
  {
    id: 'basicMath',
    title: 'Simple offline math',
    description: 'This uses Math.js, which throws random errors depending on what you\'re doing. If you want pure Wolfram|Alpha, disable this.',
    supported: false,
  },
  {
    id: 'suggestions',
    title: 'Show random suggestions',
    description: 'When enabled, Nimble will provide you with a selection of random search suggestions.',
    supported: true,
  },
  {
    id: 'center',
    title: 'Open Nimble in the center of the screen',
    supported: false,
  },
  {
    id: 'reportErrors',
    title: 'Automatically report bugs to Maybulb',
    description: 'This uses Bugsnag, which may include some information about your system. If you\'re not cool with that, disable this.',
    supported: true,
  },
  {
    id: 'autoUpdate',
    title: 'Automatically update Nimble',
    supported: false,
  }
];

class Settings extends Component {
  render() {
    const { settings, switchPage, changeSetting } = this.props;
    return (
      <div>
        <Theme
          color={settings.theme}
        />
        <TitleBar
          title="Settings"
          left={(
            <IconButton
              icon="arrow-left"
              onClick={() => switchPage('search')}
            />
          )}
        />
        <SettingsGroup title="General">
          {generalSettings.map(setting => (
            <TickBoxSetting
              key={setting.id}
              selected={settings[setting.id]}
              title={setting.title}
              description={setting.description}
              onChange={value => changeSetting(setting.id, value)}
              disabled={!setting.supported}
            />
          ))}
        </SettingsGroup>
        <SettingsGroup title="Theme">
          <ThemeSetting
            color={settings.theme}
            onChange={value => changeSetting('theme', value)}
          />
        </SettingsGroup>
      </div>
    );
  }
}

export default Settings;
