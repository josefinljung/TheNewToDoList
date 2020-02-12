//mongoose-model
const mongoose = require("mongoose");

//schema
const schemaTodo = new mongoose.Schema(
    {
        text: {type:String, minlength: 3, required:true}, 
        date: {type:Date, default: Date.now},
        prio: {type:String, required:true}
    }
)

//comment inom parentesen är kollektionens namn i databasen
const Todo = mongoose.model("Todo", schemaTodo);

module.exports = Todo;