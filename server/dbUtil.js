const mssql = require('mssql');
const dotenv = require('dotenv');
dotenv.config()

const dbConfig = {
    server: process.env.MSSQL_SERVER,
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASSWORD,
    database: process.env.MSSQL_DATABASE,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

const poolPromise = new mssql.ConnectionPool(dbConfig).connect()
.then((pool)=> {console.log("Connected to MSsql successfully!!"); return pool})
.catch((err)=> console.log('Database MSsql Connection Failed !! ', err))

module.exports = {
    mssql,
    poolPromise,
    dbConfig
}

