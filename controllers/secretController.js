const secrets = require('../modals/secrets');


// why next ?

//@desc     GET secrets
//api       /api/v1/secrets
//access    PUBLIC
exports.getSecrets = (req, res, next) => {
    res.send('Get secrets');
}


//@desc     POST secrets
//api       /api/v1/secrets
//access    PUBLIC
exports.postSecrets = (req, res, next) => {
    res.send('POST secrets');
}