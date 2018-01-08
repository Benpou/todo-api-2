const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');

const app = express();

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.statusCode(400).send('error', e)
  })
});


app.get('/todos', (req, res) => {
  
  Todo.find({}).then((docs) => {
    res.send(docs);
  }, (e) => {
    res.send(e);
  });
});





app.listen(3000, () => {
  console.log('express started');
});

