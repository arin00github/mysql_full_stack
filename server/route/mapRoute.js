const express = require('express');
const { QueryTypes } = require('sequelize');



const { users, bootcamp_lists, users_bootcamp, svgmap, reviews, Sequelize:{Op}, sequelize } = require('../../models')
const router = express.Router();




/**
 * /api/review/add
 */

router.get('/nationwide', async (req, res) => {
    
    try {
        const data = await sequelize.query("SELECT geojson FROM svgmap where name = 'korea'", { type: QueryTypes.SELECT })
        res.status(200).json(data);
    }catch (err) {
        console.log('error', err)
        res.status(400).json()
    }
})


router.get('/download', async (req, res) => {

    const order = 'SELECT geojson FROM application.svgmap'
    //console.log("db.sequelize.model",db.sequelize.models.svgmap)

    try {
        const data = await sequelize.query("SELECT geojson FROM `svgmap`", { type: QueryTypes.SELECT });
        //console.log(data);
        res.status(200).json(data);

    } catch (err) {
        console.log('error', err)
        res.status(400).json()
    }
})

router.post('/download-sm', async (req, res) => {
    console.log("req.body", req.body.name);
    const order = `SELECT geojson FROM svgmap where name = '${req.body.name}'`
    try {
        const data = await sequelize.query(order, { 
            type: QueryTypes.SELECT,  });
        //console.log("download-sm",data);
        res.status(200).json(data);
    } catch (err) {
        console.log('error', err)
        res.status(400).json()
    }
})

module.exports = router;