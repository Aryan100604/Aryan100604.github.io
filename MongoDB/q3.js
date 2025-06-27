db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: Date(),
  },

  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

db.employees.find().skip(1);
//Skips the first document of the collections

db.employees.find().limit(1);
//Only gets the  1st document and the rest are ignored

db.employees.find().limit(2);
//Only gets the  first two documents and the rest are ignored

db.employees.find().skip(1).limit(1);
//skips the first document and gets the second document as limit is only one
db.employees.find().sort({ name: 1 });
//Sorts the documents based on name in ascending order
db.employees.find().sort({ name: -1 });
//Sorts the documents based on name in descending order
db.employees.find().sort({ name: -1 }).limit(1);
db.employees.find({ department: "IT" });

db.employees.find({}, { name: 1 });

db.employees.find({}, { _id: 0, name: 1 });
db.employees.find({}, { _id: false, name: true });

db.employees.find({}, { _id: false, name: true, department: true });

db.employess.find({ location: "FL" });

db.employees.find({}, { EmpName: "$name" });
