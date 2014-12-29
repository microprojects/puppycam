import config from 'puppycam/config/environment';
import Ember from 'ember';

export function initialize( container, application ) {
  var Io = Ember.Object.extend({
    io: function() {
      return io(config.socketUrl);
    }.property()
  });

  application.register('service:socket', Io);

  application.inject('controller', 'socket', 'service:socket');
}

export default {
  name: 'socket',
  initialize: initialize
};
