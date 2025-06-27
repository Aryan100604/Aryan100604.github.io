db.employees.find({ department: { $eq: "IT" } });

db.employees.find({ department: { $eq: "IT" } });

db.employees.find({ salary: { $gt: 3000 } });

db.employees.find({ salary: { $gte: 3000 } });

db.employees.find({ salary: { $lt: 3000 } });
db.employees.find({ salary: { $lte: 3000 } });

db.employees.find({ salary: { $ne: 3456 } });
db.employees.find(
  { salary: { $ne: 3456 }, department: { $eq: "IT" } },
  { name: 1 }
);
db.employees
  .find({ salary: { $gt: 2000 }, department: { $eq: "IT" } }, { name: 1 })
  .sort({ name: 1 });

//Highest paid Employees top 2
db.employees.find({}, { name: 1 }).sort({ salary: -1 }).limit(2);

db.employees.find(
  { $and: [{ salary: { $gt: 2000 }, department: { $eq: "IT" } }] },
  { name: 1 }
);

db.employees.find({
  $or: [{ salary: { $gt: 2000 }, department: { $eq: "IT" } }],
});

db.students.find({ reviews: { rating: { $gte: 4 } } });
