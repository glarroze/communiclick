var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

function _addLink(url)
{
  var FirebaseRef = new Firebase("https://shining-heat-7214.firebaseio.com/links");
  FirebaseRef.push({
    "url": "visite.html?tagerturl="+url,
    "name": url,
    "id": 0,
    "contributions":0,
    "clics":0,
    "reported":0
  });
}

var AppStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register(function(payload){
  if(payload.action.actionType == AppConstants.ADD_ITEM){
    _addLink(payload.action.item);
    return true;
  }
});

module.exports = AppStore;
