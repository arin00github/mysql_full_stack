const express = require('express');
const port = 4200;
const cors = require('cors');
const sequelize = require('../models').sequelize;

const app = express();

const corsOptions = {
    origin: "http://localhost:3700",
    credentials: true
}

app.use(express.json())
app.use(express.urlencoded())
app.use(cors(corsOptions))

sequelize.sync();

const {users, Sequelize:{Op}} = require('../models')


const db_config = require('./database');
const conn = db_config.init();

db_config.connect(conn);


const usersRoute = require('./route/usersRoute');
const reviewRoute = require('./route/reviewRoute');
const campRoute = require('./route/campRoute');
const authRoute = require('./route/authRoute');
const mapRoute = require('./route/mapRoute');

app.use('/api/users', usersRoute);
app.use('/api/review', reviewRoute);
app.use('/api/camp', campRoute);
app.use('/api/auth', authRoute);



app.use('/api/map', mapRoute);



module.exports = app;