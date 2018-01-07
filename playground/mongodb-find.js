const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Uncable to connect');
  }
  console.log('success');
  
  const collection = db.collection('Todos');
  
  collection.find({_id: ObjectId("5a51baa18d97e80c5633362c")}).toArray().then((docs) => {
    
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('err', err);
  });
  
  db.close();
});