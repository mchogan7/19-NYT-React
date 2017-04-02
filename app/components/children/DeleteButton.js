// Include React
var React = require("react");
var helpers = require("../utils/helpers");
var ReactDOM = require('react-dom')


// Creating the Results component
var DeleteButton = React.createClass({
  // Here we render the function

    handleClick: function() {
    helpers.deleteArticle(this.props)
  },

  render: function() {
    return (
    <div className="text-right">
    <button className="btn pull-right" onClick={this.handleClick}>Delete</button>
    </div>
    );
  }
});



// Export the component back for use in other files
module.exports = DeleteButton;


