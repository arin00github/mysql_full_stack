const express = require('express');

const { users, Sequelize:{Op} } = require('../../models')

const router = express.Router();

router.post('/login', async(req, res) => {
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

module.exports = router;