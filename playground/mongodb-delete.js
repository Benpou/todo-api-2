const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Uncable to connect');
  }
  console.log('success');
  
  
  const collection = db.collection('Todos');
  
  collection.deleteOne({_id: ObjectId("5a51baa18d97e80c5633362c")}).then((result) => {

    console.log(result)
  }, (err) => {
    console.log('err', err);
  });
  
  //findOneAndDelete
  collection.findOneAndDelete({completed: true}).then((result) => {
    console.log(result)
  }, (err) => {
    console.log(err);
  });
  
  
  db.close();
});