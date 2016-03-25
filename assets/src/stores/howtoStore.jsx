var howtoDispatcher = require('../dispatcher/howtoDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var howtoStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

howtoDispatcher.register(function(payload){
  console.log(payload);
  return true;
});

module.exports = howtoStore;
