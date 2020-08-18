const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//User model
const Users = require('../modals/users')

//@desc     POST auth a user
//@api       /api/v1/auth
//@access    PUBLIC
exports.authUser = (req,res) => {
    const {email, password} = req.body;

    //basic validation
    if(!email || !password){
        return res.status(400).json({
            msg: "Please enter all fields"
        })
    }

    //check for existing user
    Users.findOne({email})
    .then(user => {
        
        if(!user){
            return res.status(400).json({
                msg: 'User does not exists. Please register. '
            })
        }

        //validate the hashed password
        //return a promise , a boolean
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                jwt.sign(
                    { id: user.id},
                    config.get('jwtSecret'),
                    {expiresIn: 1800},
                    (err,token) => {
                        if(err) throw err;
                        res.json({
                            token: token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }
                )

                
            })
        


    })

   
}