// Include React
var React = require("react");
var helpers = require("../utils/helpers");


// Creating the Results component
var SaveButton = React.createClass({
  getInitialState: function() {
   return {isSaved: 'Save',
           buttonDisabled: false}
},
  // Here we render the function

    handleClick: function() {
    helpers.saveArticle(this.props)
    this.setState({isSaved: 'Saved',
                    buttonDisabled: true})
  },

  render: function() {
    return (
    <div className="text-right">
    <button className="btn pull-right" disabled ={this.state.buttonDisabled} onClick={this.handleClick}>{this.state.isSaved}</button>
    </div>
    );
  }
});



// Export the component back for use in other files
module.exports = SaveButton;


