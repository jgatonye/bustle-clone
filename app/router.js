import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('fashion');
  this.route('books');
  this.route('admin');
  this.route('administrator');
  this.route('store');
});

export default Router;
