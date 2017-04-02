// Include React
var React = require("react");
var DeleteButton = require('./DeleteButton')
// This is the History component. It will be used to show a log of  recent searches.
var History = React.createClass({
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.props.history.map(function(search, i) {
                     return (
              <div key={i} className="panel panel-default">
  <div className="panel-heading">{search.title}</div>
  <div className="panel-body">
    <div>{search.date}</div>
    <a href={search.url}>Article Link</a>
   <DeleteButton id ={search._id}/>
  </div>
</div>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
