/////////////////////////
// Server & API:
// - initialize database and server connection
// - API for getting data from database to frontend and vice versa
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoModel = require('./todos/todos-model');
const Todo = mongoose.model('Todo');
const path = require('path');
const rootPath = path.join(__dirname, '..');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/nothing-todo-test');

const db = mongoose.connection;

//body parser middleware creates 'req.body' by attacheching body property to request object
app.use(bodyParser.urlencoded({ extended: true }));

//serving up bundle.js file so it is accessible by index.html on the frontend
app.use(express.static(`${rootPath}/front/bundle`));

//////////
// start of the API
//////////

//get all blog todos
app.get('/todos', (req, res) => {
  Todo.find({}, (err, data) => {
    if(err) console.log(err);
    else res.send(data);
  })
});


//Make a new todo
app.post('/todos', (req, res) => {
  Todo.create(req.body, (err, data) => {
    if(err) console.log(err);
    else res.send(data);
  });
});

//get an individual todo by passing id as a url parameter
//the 'id' string is accessible as 'req.params.id'
app.get('/todos/:id', (req, res) => {
  Todo.findById(req.params.id, (err, data) => {
    if(err) console.log(err);
    else res.json(data);
  })
});

//example 'put' request for updating a todo given an id
app.put('/todos/:id', (req, res) => {
  Todo.findOneAndUpdate({_id: req.params.id}, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  })
});

//delete a todo, given an id
app.delete('/todos/:id', (req, res) => {
  Todo.remove({_id: req.params.id}, (err, data) => {
    if (err) console.error('Mongoose delete error', err);
    else console.log('Delete successful');
  });
});

//send back 'index.html' file for all other requests
//react-router then takes over once index.html is loaded by the browser
app.get('/*', (req, res) => {
  res.sendFile(`${rootPath}/front/index.html`);
});

//make sure database connection is open before starting server
db.on('open', () => {
  console.log('db connection opened!');
  app.listen(1111, () => {
    console.log('Listening on port 1111');
  });
})

db.on('error', () => {
  console.log('error in db connection!');
})
