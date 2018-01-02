const { MongoClient, ObjectID } = require("mongodb");

const obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("connected to MongoDB server");
  const myDB = db.db("TodoApp");

  // myDB
  //   .collection("Todos")
  //   .find({ _id: new ObjectID("5a4b4c73364dc55865c23994") })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("unable to fetch todos", err);
  //     }
  //   );

  // myDB
  //   .collection("Todos")
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log("Todos");
  //       console.log(`Todos count: ${count}`);
  //     },
  //     err => {
  //       console.log("unable to fetch todos", err);
  //     }
  //   );

  myDB
    .collection("Users")
    .find({ location: "Birmingham" })
    .toArray()
    .then(
      docs => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("unable to fetch todos", err);
      }
    );

  // db.close();
});
