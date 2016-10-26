var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('shulewangDatabase.db');
 
db.serialize(function() {
	initalize();
	
  db.run("CREATE TABLE Persons(id int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255))");
  db.run("CREATE TABLE Friends(id int,LastName varchar(255),FirstName varchar(255),wholeName varchar(255))");
  db.run("CREATE TABLE OrderList(id int,wholeName varchar(255),product varchar(255),comment varchar(255))");
  
  
  db.run("INSERT INTO Persons(LastName,FirstName) VALUES (?, ?)", "Ma", "dongmei2");
 
 
  db.each("SELECT rowid AS id, LastName,FirstName FROM Persons", function(err, row) {
      console.log(row.id + ": " + row.LastName + " " + row.FirstName);
  });
  
  db.run("INSERT INTO Friends(LastName,FirstName,wholeName) VALUES (?,?,?)","Ma", "dongmei2", "hao jian");
  
  db.each("SELECT rowid AS id, LastName,FirstName,wholeName FROM Friends", function(err, row) {
      console.log(row.id + ": " + row.LastName + " " + row.FirstName + " has friends " + row.wholeName);
  });
  
  db.run("INSERT INTO OrderList(wholeName,product,comment) VALUES (?,?,?)","hao jian", "apple", "good");
  
  db.each("SELECT rowid AS id, wholeName,product,comment FROM OrderList", function(err, row) {
      console.log(row.id + ": " + row.wholeName + " buy " + row.product + " with comment " + row.comment);
  });
  
});
 
db.close();

function initalize(){
	
	db.run("DROP TABLE Persons");
	db.run("DROP TABLE Friends");
	db.run("DROP TABLE OrderList");
}