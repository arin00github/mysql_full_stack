const express = require('express');

const {
    users,
    bootcamp_lists,
    reviews,
    Sequelize: {
        Op
    }
} = require('../../models')

const router = express.Router();



const db_config = require('../database');
const conn = db_config.init();

db_config.connect(conn);

/**
 * /api/review/add
 */


router.get('/download', async (req, res) => {

    const order = 'SELECT geojson FROM svgmap'

    try {
        conn.query(order, function (err, rows, fields) {
            if (err) console.log('query is not excuted.' + err);
            //console.log("rows",rows);
            const result = rows[0].geojson
            const convert = JSON.parse(result)
           // console.log(rows[0].geojson);
            //const sendData = JSON.parse(rows);
            console.log("server", typeof result)
            console.log("server convert", convert.name);
            res.status(200).json(rows);

        })


    } catch (err) {
        console.log('error', err)
        res.status(400).json()
    }
})

router.post('/download-sm', async (req, res) => {
    console.log("req.body", req.body.name);

    const order = `SELECT geojson FROM svgmap where name = '${req.body.name}' `

    try {
        conn.query(order, function (err, rows, fields) {
            if (err) console.log('query is not excuted.' + err);
            // console.log("rows", typeof rows);
            // const result = rows[0].geojson
            // const convert = JSON.parse(result)
            // console.log(rows[0].geojson);
            //const sendData = JSON.parse(rows);
            //console.log("server", typeof result)
            //console.log("server convert", convert.name);
            res.status(200).json(rows);

        })


    } catch (err) {
        console.log('error', err)
        res.status(400).json()
    }
})

module.exports = router;