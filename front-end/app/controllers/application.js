import Ember from 'ember';

export default Ember.Controller.extend({
  host: false,
  client: false,
  notSelected: function() {
    return !(this.get('host')||this.get('client'));
  }.property('host', 'client'),

  actions: {
    startClient: function() {
      this.set('client', true);
    },
    startHost: function() {
      this.set('host', true);
    }
  }
});
