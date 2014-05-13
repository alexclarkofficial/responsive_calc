export default Ember.Handlebars.makeBoundHelper(function(value) {
  if(value) { return value * 100; }
});
