export default Ember.Route.extend({
  model: function() {
    return { 
    	mobilePercent: null,
    	revenue: null,
    	pcConversionRate: 25,
  		responsiveMobileConversionRate: 12,
  		nonresponsiveMobileConversionRate: 10,
     };
  },
});
