var howtoDispatcher = require('../dispatcher/howtoDispatcher');
var howtoConstants = require('../constants/howtoConstants');

var howtoActions = {
  addItem: function(item) {
    howtoDispatcher.handleViewAction({
      actionType:howtoConstants.ADD_ITEM,
      item: item
    })
  },
  getItems: function() {
   //get code here 
  }
}

module.exports = howtoActions
