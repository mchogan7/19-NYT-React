var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  title: {
  	type: String,
    unique : true, 
    required : true, 
    dropDups: true
  },
  date: {
    type: Date
  },
  url: {
  	type: String
  }
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;
