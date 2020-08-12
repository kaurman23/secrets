const express = require('express');
const router = express.Router();
const {getSecrets, postSecrets} = require('../controllers/secretController');


router
    .route('/')
    .get(getSecrets)
    .post(postSecrets);

module.exports = router;