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
  studentId: ObjectId("685cdccd1ed0f42e094eeb88"),
  city: "Tokyo",
  country: "Japan",
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
    $project: { name: 1, "address.city": 1, "address.country": 1 },
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
db.comments.insertMany([
  {
    postId: ObjectId("685e27df5b326eec1b4eeb8a"),
    comment: "Comment 1",
  },
  {
    postId: ObjectId("685e27df5b326eec1b4eeb8a"),
    comment: "Comment 2",
  },
]);

db.comments.insertMany([
  {
    postId: ObjectId("685e27eb5b326eec1b4eeb8b"),
    comment: "Comment 1",
  },
  {
    postId: ObjectId("685e27eb5b326eec1b4eeb8b"),
    comment: "Comment 2",
  },
  {
    postId: ObjectId("685e27eb5b326eec1b4eeb8b"),
    comment: "Comment 3",
  },
]);

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "postId",
      as: "comments",
    },
  },
  { $unwind: "$comments" },
  {
    $project: { _id: 0, post: 1, "comments.comment": 1 },
  },
]);
db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "postId",
      as: "comments",
    },
  },
  {
    $limit: 1,
  },
]);

db.employees.aggregate([
  {
    $group: {
      department: { $eq: "IT" },
      total_expenditure: { $sum: "Salary" },
    },
  },
]);

db.Marks.insertMany([
  { name: "John", term: 1, subject: "Maths", marks: 95 },
  { name: "John", term: 2, subject: "Maths", marks: 80 },
  { name: "John", term: 3, subject: "Maths", marks: 70 },
  { name: "John", term: 1, subject: "Science", marks: 50 },
  { name: "John", term: 2, subject: "Science", marks: 60 },
  { name: "John", term: 3, subject: "Science", marks: 90 },
  { name: "Cathy", term: 1, subject: "Maths", marks: 91 },
  { name: "Cathy", term: 2, subject: "Maths", marks: 81 },
  { name: "Cathy", term: 3, subject: "Maths", marks: 71 },
  { name: "Cathy", term: 1, subject: "Science", marks: 51 },
  { name: "Cathy", term: 2, subject: "Science", marks: 61 },
  { name: "Cathy", term: 3, subject: "Science", marks: 91 },
]);
db.Marks.find({}, { _id: 0 }).sort({ term: 1 });

db.Marks.aggregate([
  { $group: { _id: "$name", totalMarks: { $sum: "$marks" } } },
]);

db.Marks.aggregate([
  { $group: { _id: "$subject", totalMarks: { $sum: "$marks" } } },
]);

//33-203

db.Marks.aggregate([
  { $group: { _id: "$term", totalMarks: { $sum: "$marks" } } },
]);

db.Marks.aggregate([
  {
    $group: {
      _id: { name: "$name", subject: "$subject" },
      totalMarks: { $sum: "$marks" },
    },
  },
]);
db.Marks.aggregate([
  {
    $group: {
      _id: { term: "$term", name: "$name" },
      totalMarks: { $sum: "$marks" },
    },
  },
  {
    $sort: { _id: 1 },
  },
]);

//Conditional Display
db.employees.aggregate([
  {
    $project: {
      name: 1,
      _id: 0,
      salary: 1,
      Grade: { $cond: [{ $gt: ["$salary", 2000] }, "Grade A", "Grade B"] },
    },
  },
]);
db.employees.aggregate([
  {
    $project: {
      name: 1,
      _id: 0,
      salary: 1,
      Grade: {
        $cond: {
          if: { $gt: ["$salary", 2000] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);

db.employees.aggregate([
  {
    $project: {
      name: 1,
      _id: 0,
      salary: 1,
      Grade: {
        $cond: {
          if: { $gt: ["$salary", 2000] },
          then: "Grade A",
          else: "Grade B",
        },
      },
    },
  },
]);

db.employees.updateMany({ department: "IT" }, { $set: { strSalary: "2000" } });
db.employees.updateMany(
  { department: { $ne: "IT" } },
  { $set: { strSalary: "1000" } }
);

db.employees.aggregate(
  {
    $project: {
      _id: 0,
      name: 1,
      department: 1,
      Sal: { $convert: { input: "$strSalary", to: "int" } },
    },
  },
  { $group: { _id: "$department", total: { $sum: "$Sal" } } }
);

//The output is stored in new collections
db.employees.aggregate(
  {
    $project: {
      _id: 0,
      name: 1,
      department: 1,
      Sal: { $convert: { input: "$strSalary", to: "int" } },
    },
  },
  { $group: { _id: "$department", total: { $sum: "$Sal" } } },
  { $out: "depWiseSalary" }
);

db.createView("depWiseSalaryView", "employees", [
  {
    $project: {
      _id: 0,
      name: 1,
      department: 1,
      Sal: { $convert: { input: "$strSalary", to: "int" } },
    },
  },
  { $group: { _id: "$department", total: { $sum: "$Sal" } } },
]);

db.createView("HighPaidEmployees", "employees", [
  {
    $match: { salary: { $gt: 3000 } },
  },
  { $project: { _id: 0, name: 1, salary: 1 } },
]);

// mongodump -d practice -o D:\Development\practice_backup

db.dropDatabase();

// mongorestore -d practice D:\Development\practice_backup\practice

db.employees.find({ name: { $regex: "Cathy" } });

db.employees.find({ name: { $regex: "cathy" } }); //Case insensitive

db.employees.find({ name: { $regex: "Cathy", $options: "i" } }); //Case sensitive

db.employees.find({ name: { $regex: "^C" } }); //All the names starting from Capital C

db.employees.find({ name: { $regex: "y$" } }); //All the names that ends in y
