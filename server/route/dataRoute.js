const express = require('express');


const router = express.Router();

const {poolPromise, mssql, dbConfig} = require('../dbUtil');



/**
 * path : 'api/data/main'
 * method : get
 */

router.post('/schema', async(req, res)=> {
    //console.log(req.body);

    const order = `SELECT TOP(20) * FROM information_schema.tables WHERE table_schema LIKE '%${req.body.name}%'`

    const pool = await poolPromise;
    await pool.request().query(order, (err, result)=> {
        res.send(result);
    })
})


router.post('/table', async(req, res)=> {
    console.log(req.body);

    const order = `SELECT TOP(20) * FROM ${req.body.tableName}`

    const pool = await poolPromise;
    await pool.request().query(order, (err, result)=> {
        if(err) console.log(err)
        res.send(result);
    })
})


module.exports = router;