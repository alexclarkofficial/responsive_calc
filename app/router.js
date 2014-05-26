var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.route("application", { path: "/responsive-calc"});
});

export default Router;
