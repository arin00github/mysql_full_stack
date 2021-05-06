const express = require('express');
const port = 4200;
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./models').sequelize;

const app = express();

const dataRoute = require('./server/route/dataRoute')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


sequelize.sync();

const {users, Sequelize:{Op}} = require('./models')



app.use('/api/data' , dataRoute)






app.listen(port, () => {
    console.log(`Connecting Server Success on port ${port}`)
})

