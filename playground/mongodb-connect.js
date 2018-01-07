//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Uncable to connect');
  }
  console.log('success');
  
  const collection = db.collection('Todos');
  
  collection.insertOne({
    // document
    text: 'something new-2',
    completed: true
  }, (err, result) => {
    if (err) {
      console.log('unable to insert todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    //console.log(result.ops[0]._id.getTimestamp());
  });
  
  db.close();
});