const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username:String,
    task1:String,
    task2:String,
    
       
});

module.exports = mongoose.model("taskSchema",schema);