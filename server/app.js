const express = require('express');
const port = 4200;
const cors = require('cors');


const app = express();

const corsOptions = {
    origin: "http://localhost:3700",
    credentials: true
}

app.use(express.json())
app.use(express.urlencoded())
app.use(cors(corsOptions))

//sequelize 동기화
const sequelize = require('../models').sequelize;
sequelize.sync().then(() => {
    console.log("application DB connected")
})





const usersRoute = require('./route/usersRoute');
const reviewRoute = require('./route/reviewRoute');
const campRoute = require('./route/campRoute');
const authRoute = require('./route/authRoute');
const mapRoute = require('./route/mapRoute');
const dataRoute = require('./route/dataRoute');

app.use('/api/users', usersRoute);
app.use('/api/review', reviewRoute);
app.use('/api/camp', campRoute);
app.use('/api/auth', authRoute);
app.use('/api/map', mapRoute);
app.use('/api/data', dataRoute);





module.exports = app;