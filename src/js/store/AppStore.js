var EventEmitter  = require("events");
var AppDispatcher = require("../dispatcher/AppDispatcher");

var AppStore = new EventEmitter();

var _message = {text: null};

AppStore.getAll = function () {
    return _message;
};

AppStore.emitChange = function () {
    this.emit("change");
};

AppStore.addChangeListner = function (callback) {
    this.on("change", callback);
};

AppStore.dispatcherIndex = AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
    case "reload":
        _message.text = payload.text;
        AppStore.emitChange();
        break;
    }
});

module.exports = AppStore;
