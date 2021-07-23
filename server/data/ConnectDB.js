const mysql = require("mysql");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Pizzas",
  password: "root"
});

connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


 module.exports = connection;