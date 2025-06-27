db.employees.getIndexes();

db.employees.createIndex({ emai: 1 });

db.employees.dropIndex("emai_1");
db.employees.find({ email: "john@gmail.com" }).explain("executionStats");
//To find the performance of a query
// Pros and cons of finding document by Index
