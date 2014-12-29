import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendPicture: function(dataUrl) {
      this.get('socket.io').emit('photo upload', dataUrl);
    }
  }
});
