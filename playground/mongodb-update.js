const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Uncable to connect');
  }
  console.log('success');
  
  const collection = db.collection('Todos');
  
  collection.findOneAndUpdate({
    _id: new ObjectId('5a52b6bd8bbc91192633e197')
  }, {
    $set: {
      completed: false
    }
  }, {
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    
    console.log(result);
  })
  
  db.close();
});