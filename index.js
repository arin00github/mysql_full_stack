const express = require('express');
const port = 4200;
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./models').sequelize;

const app = express();

const usersRoute = require('./server/route/usersRoute');
const reviewRoute = require('./server/route/reviewRoute');
const campRoute = require('./server/route/campRoute');

const authRoute = require('./server/route/authRoute');
const corsOptions = {
    
    origin: "http://localhost:3700",
    credentials: true
  }


app.use(express.json())
app.use(express.urlencoded())
app.use(cors(corsOptions))
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())


sequelize.sync();

const {users, Sequelize:{Op}} = require('./models')



app.use('/api/users', usersRoute);
app.use('/api/review', reviewRoute);
app.use('/api/camp', campRoute);


app.use('/api/auth', authRoute);



app.listen(port, () => {
    console.log(`Connecting Server Success on port ${port}`)
})

