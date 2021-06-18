const express = require('express');
const port = 4200;
const app = require('./server/app')


app.listen(port, () => {
    console.log(`Connecting Server Success on port ${port}`)
})

