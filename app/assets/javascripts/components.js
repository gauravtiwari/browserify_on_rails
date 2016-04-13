// ES6 imports
import IndexComponent from './components/pages/index.es6.js';
import IndexSecondComponent from './components/pages/indexSecond.es6.js';
import ShowComponent from './components/pages/show.es6.js';

// Setup a global app scope
var app = window.app = global.app = {};

// Expose components to global scope
app.IndexComponent = IndexComponent;
app.IndexSecondComponent = IndexSecondComponent;
app.ShowComponent = ShowComponent;
