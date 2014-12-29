import Ember from 'ember';

export default Ember.Controller.extend({
  socket: function() {
    return io('localhost:3000');
  }.property(),

  actions: {
    sendPicture: function(dataUrl) {
      this.get('socket').emit('photo upload', dataUrl);
    }
  }
});
