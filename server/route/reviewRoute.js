const express = require('express');

const { users, bootcamp_lists, reviews, Sequelize:{Op} } = require('../../models')

const router = express.Router();


/**
 * /api/review/add
 */


router.post('/add', (req, res) => {
    console.log(req.body);
    reviews.create({
        content: req.body.content
    }).then(() => {
        console.log('Bootcamp create successfully')
        return res.status(200).json({message: '리뷰가 생성되었습니다'})
    }).catch((err) => {
        console.log(err)
        return res.status(400).json({message: '리뷰 생성에 실패했습니다.'})
    })
})

module.exports = router;