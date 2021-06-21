const express = require('express');

const { users, bootcamp_lists, reviews, Sequelize:{Op} } = require('../../models')

const router = express.Router();



router.post('/profile', async(req, res) => {
    console.log(req.body);

    try{
        await users.findOne({where: {name: req.body.name}})
        .then((result)=> {
            //console.log('login success', result)
            res.status(200).json(result)
        })
        
        
        
    }catch(err){
        console.log('error',err)
        res.status(400).json()
    }
    
})


router.get('/read', async(req, res) => {

    try{
        const results = await users.findAll();
        console.log(results);
        if(!results) throw Error("No Data");
        res.status(200).json(results)
    }catch(err){
        console.log('error',err)
        res.status(400).json()
    }
    
})

/**
 * 데이터 생성
 * /api/users/add
 */
router.post('/add', (req, res) => {
    //console.log("req.body",Object.keys(req.body));
    const getData = req.body;
    console.log("req.body", req.body);
    users.create({
        name: getData.name,
        email: getData.email,
        role: getData.role,
        active: getData.active
    }).then((result)=> {
        console.log('Data create successfully!!')
        return res.status(200).json({message: '데이터가 새로 저장되었습니다.'})
    }).catch((err)=> {
        console.log(err)
        return res.status(400).json({message: '데이터 생성에 실패했습니다'})
    })
})


router.delete('/delete', (req, res) => {
    users.destroy({where: {name: req.body.name}})
    .then((result) => {
       console.log('')
       return res.status(200).json({message: '데이터가 삭제되었습니다.'})      
    }).catch(err => {
        console.log(err);
        return res.status(400).json({message: '데이터 삭제에 실패하였습니다'})
    }) 
})



module.exports = router;



