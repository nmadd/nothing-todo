/////////////////////////
// database model for todos
/////////////////////////

const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
  text: {type: String, required: true},
  date: {type: Date, default: Date.now},
  completed: {type: Boolean, default: false},
  active: {type: Boolean, default: true}
});

//first argument is name of model, second argument is schema (aka blueprint)
const Todo = mongoose.model('Todo', todoSchema);
