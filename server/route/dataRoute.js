const express = require('express');

const { users, Sequelize:{Op} } = require('../../models')

const router = express.Router();

router.get('/read', async(req, res) => {

    try{
        const results = await users.findAll();
        if(!results) throw Error("No Data");
        res.status(200).json(results)
    }catch(err){
        console.log('error',err)
        res.status(400).json()
    }
    
})

/**
 * 데이터 생성
 * /api/data/add
 */
router.post('/add', (req, res) => {
    console.log("req.body",req.body);
    users.create({
        user_id: req.body.user_id,
        user_name: req.body.user_name
    }).then((result)=> {
        console.log('Data create successfully!!')
        return res.status(200).json({message: '데이터가 새로 저장되었습니다.'})
    }).catch((err)=> {
        console.log(err)
        return res.status(400).json({message: '데이터 생성에 실패했습니다'})
    })
})



module.exports = router;


