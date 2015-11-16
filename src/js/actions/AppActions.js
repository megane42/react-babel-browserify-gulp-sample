var AppDispatcher = require("../dispatcher/AppDispatcher");

var AppActions = {
    reload: function (str) {
        AppDispatcher.dispatch({
            actionType: 'reload',
            text: str
        });
    }
};

module.exports = AppActions;
