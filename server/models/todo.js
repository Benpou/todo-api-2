const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};



// const newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((docs) => {
//   console.log(docs)
// }, (e) => {
//   console.log(e)
// });

