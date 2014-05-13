export default Ember.ObjectController.extend({

  currentMobileRevenue: function() {
    return parseInt(this.get('totalPotentialRevenue') * this.get('currentMobileEffectiveness'));
  }.property('totalPotentialRevenue', 'currentMobileEffectiveness'),

  potentialMobileRevenue: function() {
    return parseInt(this.get('totalPotentialRevenue') * this.get('potentialMobileEffectiveness'));
  }.property('totalPotentialRevenue', 'potentialMobileEffectiveness'),

  potentialGains: function() {
    return this.get('potentialMobileRevenue') - this.get('currentMobileRevenue');
  }.property('potentialMobileRevenue', 'currentMobileRevenue'),

  pcEffectiveness: function() {
    return (1 - this.get('mobilePercent')/100) * this.get('pcConversionRate');
  }.property('mobilePercent', 'pcConversionRate'),

  currentMobileEffectiveness: function() {
    return this.get('mobilePercent')/100 * this.get('nonresponsiveMobileConversionRate');
  }.property('mobilePercent', 'nonresponsiveMobileConversionRate'),

  potentialMobileEffectiveness: function() {
    return this.get('mobilePercent')/100 * this.get('responsiveMobileConversionRate');
  }.property('mobilePercent', 'responsiveMobileConversionRate'),

  totalPotentialRevenue: function() {
    return this.get('revenue') / (this.get('currentMobileEffectiveness') +
      this.get('pcEffectiveness'));
  }.property('revenue', 'currentMobileEffectiveness', 'pcEffectiveness')
});
