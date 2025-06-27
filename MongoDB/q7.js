db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { name: 1, salary: 1 } },
  { $sort: { salary: 1 } },
  { $limit: 3 },
]);

db.employees.aggregate([
  { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

// [
//   { _id: 'IT', total: 7912 },
//   { _id: 'HR', total: 2000 },
//   { _id: 'Admin', total: 1500 }
// ]

db.employees.aggregate([{ $project: { name: 0 } }]);
db.employees.aggregate([{ $project: { empName: "$name" } }]);

db.employees.aggregate([
  { $project: { name: 1, salary: 1, bonus: { $multiply: ["$salary", 2] } } },
]);
//Write a query to display name ,email, and salary for It employees
db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { name: 1, email: 1, salary: 1 } },
]);

db.employees.aggregate([
  { $project: { name: 1, annual_slary: { $multiply: ["$salary", 12] } } },
]);

db.employees.aggregate([
  { $match: { salary: { $gt: 3000 } } },
  { $project: { name: 1, CTC: "$salary" } },
]);

db.students.insertOne({
  name: "Alice Jhonson",
  age: 23,
  courses: ["Math", "Physics"],
  enrolled: true,
});

db.students.insertMany([
  { name: "Tom", age: 22 },
  { name: "Sora", age: 24 },
  { name: "Mike", age: 21 },
]);

db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);
db.students.updateOne({ name: "Alice Jhonson" }, { $set: { age: 24 } });

db.students.updateMany({}, { $addToSet: { courses: "Chemitry" } });
db.students.updateMany({}, { $unset: { course: "" } });

db.students.updateMany({}, { $inc: { age: 1 } });

db.students.aggregate([{ $project: { name: 1, age: 1, _id: 0 } }]);

db.students.updateOne(
  { name: "Alice Jhonson" },
  { $pull: { courses: "Physics" } }
);

db.address.insertOne({
  studentId: ObjectId("685cdccd1ed0f42e094eeb88"),
  city: "New York",
  country: "USA",
});

db.address.insertOne({
  studentId: ObjectId("685cdd5a1ed0f42e094eeb8b"),
  city: "LA",
  country: "USA",
});

db.address.insertOne({
  student_id: ObjectId("685cdd5a1ed0f42e094eeb89"),
  city: "London",
  country: "UK",
});

db.students.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "studentId",
      as: "address",
    },
  },
  {
    $unwind: "$address",
  },
  {
    $project: { name: 1, "$address.city": 1, "$address.country": 1 },
  },
]);

db.employees.aggregate([
  { $project: { name: 1, location: 1 } },
  { $unwind: "$location" },
]);

db.students.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "studentId",
      as: "address",
    },
  },
  { $unwind: "$address" },
  { $project: { name: 1, "address.city": 1, "address.country": 1 } },
]);
