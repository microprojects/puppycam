import Ember from 'ember';

export default Ember.Controller.extend({
  photoUrl: null,

  changePhoto: function(msg) {
    this.set('photoUrl', msg);
  },

  listenForPhoto: function() {
    var socket = this.get('socket.io');

    socket.on('photo send', this.changePhoto.bind(this));
  },

  init: function() {
    this.listenForPhoto();
  }
});
