const { MongoClient, ObjectID } = require("mongodb");

const obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("connected to MongoDB server");
  const myDB = db.db("TodoApp");

  //deleteMany

  // myDB
  //   .collection("Todos")
  //   .deleteMany({ text: "Eat lunch" })
  //   .then(results => {
  //     console.log(results);
  //   });

  //deleteOne
  // myDB
  //   .collection("Todos")
  //   .deleteOne({ text: "Eat lunch" })
  //   .then(results => {
  //     console.log(results);
  //   });

  //findOneAndDelete

  myDB
    .collection("Todos")
    .findOneAndDelete({ completed: false })
    .then(result => {
      console.log(result);
    });

  // db.close();
});
