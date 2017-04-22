import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';
import './util/bugsnag';
import './index.css';

render(<Application />, document.querySelector('#root'));
