var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL_;)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "20IsftD25",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
});

module.exports = connection;