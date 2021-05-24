const express = require('express');

const { users, bootcamp_lists, reviews, Sequelize:{Op} } = require('../../models')

const router = express.Router();

/**
 * /api/camp/add
 */

router.post('/add', (req, res) => {
    console.log(req.body);
    bootcamp_lists.create({
        title: req.body.title,
        price : req.body.price,
        personCount : req.body.personCount
    }).then(() => {
        console.log('Bootcamp create successfully')
        return res.status(200).json({message: '부트캠프가 새로 생성되었습니다'})
    }).catch((err) => {
        console.log(err)
        return res.status(400).json({message: '부트캠프 생성에 실패했습니다.'})
    })
})

module.exports = router;