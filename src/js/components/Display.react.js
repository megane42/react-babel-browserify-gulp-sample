var React = require("react");

var Display = React.createClass({
    render: function () {
        return (
            <div>{this.props.data}</div>
        );
    }
});

module.exports = Display;
