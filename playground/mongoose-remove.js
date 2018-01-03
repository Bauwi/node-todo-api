const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

//Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: "5a4cd30a5b5ed96027bd81bc" }).then(todo => {});

Todo.findByIdAndRemove("5a4cd30a5b5ed96027bd81bc").then(todo => {
  console.log(todo);
});
