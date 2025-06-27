db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    department: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    date: Date(),
  },

  {
    name: "Rafeal",
    email: "rafeal@gmail.com",
    department: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: Date(),
  },
]);

db.employees.countDocuments();

db.employees.updateOne({ email: "jhon@gmail.com" }, { $set: { salary: 2000 } });

db.employees.updateMany({}, { $set: { points: 1 } });
//If points field is not there it will add point 1 to all the documents

db.employees.updateMany({ dapartment: "IT" }, { $inc: { points: 1 } });
//For all the employess in It department there points will be incremented by 1

db.employees.updateMany({ department: "IT" }, { $inc: { points: 3 } });

db.employees.updateMany({ department: "IT" }, { $inc: { points: -1 } });

db.employees.updateMany({}, { $rename: { points: "score" } });
// To change the field value from point to score
db.employees.updateMany({}, { $unset: { score: "" } });
//To remove the field from the database
db.employees.updateMany({}, { $push: { skills: "Java" } });
// To make a field value skills which strores an array

db.employees.updateMany(
  { email: "john@gmail.com" },
  { $pull: { skills: "Python" } }
);

db.employees.updateMany(
  { email: "john@gmail.com" },
  { $addToSet: { skills: "Python" } }
);

db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { skills: 1 } });
//Removes the last element from the skills array

db.employees.updateMany({ email: "john@gmail.com" }, { $pop: { skills: -1 } });
//Removes the first element from the skills array
db.employees.updateOne(
  { email: "brian@gmail.com" },
  { $set: { name: "Brian" } },
  { upsert: true }
);
// If the document is there it will be updated ortherwise inserted
db.employees.deleteOne({ email: "brian@gmail.com" });

db.employees.deleteMany({ daparment: "IT" });
