const express = require('express');

const { users, bootcamp_lists, reviews, Sequelize:{Op} } = require('../../models')

const router = express.Router();



const db_config = require('../database');
const conn = db_config.init();

db_config.connect(conn);

/**
 * /api/review/add
 */


router.get('/download', async(req, res) => {

    const order = 'SELECT geojson FROM svgmap'

    try{
        conn.query(order, function(err, rows, fields){
            if(err) console.log('query is not excuted.' + err);
            console.log("rows",rows);
            console.log("field", fields)
            res.send(rows)
        })
        console.log('sucess sending svgmap')
        res.status(200).json();
       
    }catch(err){
        console.log('error',err)
        res.status(400).json()
    }
    return false;
})

module.exports = router;