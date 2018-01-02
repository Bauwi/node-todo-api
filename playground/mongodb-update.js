const { MongoClient, ObjectID } = require("mongodb");

const obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("connected to MongoDB server");
  const myDB = db.db("TodoApp");

  //findOneAndUpdate

  // myDB
  //   .collection("Todos")
  //   .findOneAndUpdate(
  //     {
  //       _id: new ObjectID("5a4b72629addce6492c321b7")
  //     },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     {
  //       returnOriginal: false
  //     }
  //   )
  //   .then(result => {
  //     console.log(result);
  //   });

  myDB
    .collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5a4b59499addce6492c31e88")
      },
      {
        $set: {
          name: "Elfie"
        },
        $inc: {
          age: 1
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
  // db.close();
});
