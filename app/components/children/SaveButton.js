// Include React
var React = require("react");
var helpers = require("../utils/helpers");


// Creating the Results component
var SaveButton = React.createClass({
  // Here we render the function

    handleClick: function() {
    helpers.saveArticle(this.props)
  },

  render: function() {
    return (
    <div className="text-right">
    <button className="btn pull-right" onClick={this.handleClick}>Save</button>
    </div>
    );
  }
});



// Export the component back for use in other files
module.exports = SaveButton;


