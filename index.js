const express = require('express');
const port = 4200;
const app = require('./server/app')
const { mssql, poolPromise } = require('./server/dbUtil')



app.listen(port, () => {
    console.log(`Connecting Server Success on port ${port}`)
})

