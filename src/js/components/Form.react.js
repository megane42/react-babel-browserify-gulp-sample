var React      = require("react");
var ReactDom   = require("react-dom");
var AppActions = require("../actions/AppActions");

var Form = React.createClass ({
    send: function (e) {
        e.preventDefault();
        var input = ReactDom.findDOMNode(this.refs.input);
        AppActions.reload(input.value.trim());
        input.value = "";
    },
    render: function () {
        return (
            <form>
                <input type="text" ref="input" />
                <button onClick={this.send}>送信</button>
            </form>
        );
    }
});

module.exports = Form;