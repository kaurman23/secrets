const express = require('express');
const dotenv = require ('dotenv');

const app= express();

dotenv.config({path: './config/config.env'});

app.get('/', (req,res) => {
    res.send("Hello");
})

const PORT = process.env.PORT || 5000; //in case can't fetch port from evv file

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`)
);