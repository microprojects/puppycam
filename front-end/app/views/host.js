import Ember from 'ember';

export default Ember.View.extend({
  width: 320,
  height: 320,
  streaming: false,

  videoEl: function() {
    return this.$('#video')[0];
  }.property(),
  canvasEl: function() {
    return this.$('#canvas')[0];
  }.property(),
  startbuttonEl: function() {
    return this.$('#startbutton')[0];
  }.property(),

  startStream: function(stream) {
    if (navigator.mozGetUserMedia) {
      this.get('videoEl').mozSrcObject = stream;
    } else {
      var vendorURL = window.URL || window.webkitURL;
      this.get('videoEl').src = vendorURL.createObjectURL(stream);
    }
    this.get('videoEl').play();
  },

  canPlay: function(ev) {
    var width = this.get('width'),
        height = this.get('height');

    if (!this.get('streaming')) {
      height = this.get('videoEl').videoHeight / (this.get('videoEl').videoWidth / width);
      this.get('videoEl').setAttribute('width', width);
      this.get('videoEl').setAttribute('height', height);
      this.get('canvasEl').setAttribute('width', width);
      this.get('canvasEl').setAttribute('height', height);
      this.set('streaming', true);
    }
  },

  takePicture: function () {
    var width = this.get('width'),
        height = this.get('height');

    this.get('canvasEl').width = width;
    this.get('canvasEl').height = height;
    this.get('canvasEl').getContext('2d').drawImage(this.get('videoEl'), 0, 0, width, height);
    var data = this.get('canvasEl').toDataURL('image/png');

    this.get('controller').send('sendPicture', data);
  },

  didInsertElement: function() {
    navigator.getMedia({
        video: true,
        audio: false
      },
      this.startStream.bind(this),
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    this.get('videoEl').addEventListener('canplay', this.canPlay.bind(this), false);

    this.get('startbuttonEl').addEventListener('click', function(ev) {
      this.takePicture();
      ev.preventDefault();
    }.bind(this), false);
  }
});
