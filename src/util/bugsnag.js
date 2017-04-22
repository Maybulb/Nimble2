import Bugsnag from 'bugsnag-js';
import settings from './settings';
import require from './require';
const manifest = require('./package.json');

Bugsnag.apiKey = process.env.REACT_APP_BUGSNAG_JS_API_KEY;
Bugsnag.appVersion = manifest.version;

Bugsnag.beforeNotify = payload => {
  return settings.get('reportErrors') === true;
};

export default Bugsnag;
