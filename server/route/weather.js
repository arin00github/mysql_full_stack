const express = require('express');
const { QueryTypes } = require('sequelize');



const { users, bootcamp_lists, users_bootcamp, svgmap, reviews, Sequelize:{Op}, sequelize } = require('../../models')
const router = express.Router();




router.get('/nationwide', (req,res) => {
    
})








module.exports = router;