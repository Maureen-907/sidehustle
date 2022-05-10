const mySql = require('mysql');


const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sideHustle'
})

connection.connect(function(err) {
    if(err) throw err;
    console.log("Database Connected");
})

module.exports = connection;