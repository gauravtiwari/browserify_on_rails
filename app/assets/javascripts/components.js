// ES6 imports
const ReactDOMServer = window.ReactDOMServer = global.ReactDOMServer = require('react-dom/server');

import IndexComponent from './components/pages/index.es6.js';
import IndexSecondComponent from './components/pages/indexSecond.es6.js';
import ShowComponent from './components/pages/show.es6.js';
import AlertComponent from './components/pages/alert.es6.js';

// Setup a global app scope
const app = window.app = global.app = {};

// Expose components to global scope
app.IndexComponent = IndexComponent;
app.MapComponent  = AlertComponent;
app.IndexSecondComponent = IndexSecondComponent;
app.ShowComponent = ShowComponent;
