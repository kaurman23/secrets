const config = require('config');
const jwt = require('jsonwebtoken');

//our middleware function
//next so that when we are done with current middleware we can move on to the next
//purpose of this middleware is to get the token that is sent from front end
function auth(res,res,next) {

    //get the token from the head
    const token = req.header('x-auth-token');

    //check for token
    if(!token) { res.status(401).json({msg: "No token. Authorization denied"}) }

    try {
        //verfiy token
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        //add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg:"Token is not valid"});
    }
}

module.exports = auth;