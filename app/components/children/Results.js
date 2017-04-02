// Include React
var React = require("react");
var SaveButton = require('./SaveButton')

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">New Articles</h3>
        </div>
        <div className="panel-body text-left">

               {this.props.address.map(function(article, i) {
            return (
              <div key={i} className="panel panel-default">
  <div className="panel-heading">{article.headline.main}</div>
  <div className="panel-body">
    <div>{article.pub_date}</div>
    <a href={article.web_url}>Article Link</a>
   <SaveButton title ={article.headline.main}
                date ={article.pub_date}
                url = {article.web_url} />
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
module.exports = Results;

      // {this.props.address.map(function(address, i) {
      //       return (
      //         <p key={i}>{address.headline.main}</p>
      //       );
      //     })}
