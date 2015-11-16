var React     = require("react");
var Form      = require("./Form.react");
var Display   = require("./Display.react");
var AppStore  = require("../store/AppStore");

var App = React.createClass ({
    getInitialState: function () {
        return AppStore.getAll();
    },

    componentDidMount: function () {
        var self = this;
        AppStore.addChangeListner(function () {
            self.setState(AppStore.getAll());
        });
    },

    render: function () {
        return (
            <div className="app">
                <Form />
                <Display data={this.state.text} />
            </div>
        );
    }
});

module.exports = App;
