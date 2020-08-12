const express = require('express');
const mongoose = require('mongoose');
const dotenv = require ('dotenv');

const connectDB = require('./config/db');

const app= express();
app.use(express.json());

dotenv.config({path: './config/config.env'});

connectDB();

const secrets = require('./routes/secrets');
app.use('/api/v1',secrets)

const PORT = process.env.PORT || 5000; //in case can't fetch port from evv file

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);