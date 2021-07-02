const mysql = require('mysql2');
const db_info = {
    host: "localhost",
    user: "root",
    password: "mysql152361",
    database:"world",
    port:3306,
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql world databases is connected successfully!');
        });
    }
}