const Secrets = require('../modals/users')

//@desc     POST register a user
//@api       /api/v1/users
//@access    PUBLIC
exports.registerUser = (req,res) => {
    res.send('Register');
}