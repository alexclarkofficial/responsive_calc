import dollarFormatHelper from './helpers/dollarFormat';
Ember.Handlebars.registerBoundHelper('dollarFormat', dollarFormatHelper);

import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'gpv-calc2', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'gpv-calc2');

export default App;
