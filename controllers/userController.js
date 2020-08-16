const Users = require('../modals/users')
const bcrypt = require('bcryptjs');

//@desc     POST register a user
//@api       /api/v1/users
//@access    PUBLIC
exports.registerUser = (req,res) => {
    const {name, email, password} = req.body;

    //basic validation
    if(!name || !email || !password){
        return res.status(400).json({
            msg: "Please enter all fields"
        })
    }

    //check for existing user
    Users.findOne({email})
    .then(user => {
        if(user){
            return res.status(400).json({
                msg: 'User already exists. Please log in. '
            })
        }

        const newUser = new Users({
            name,
            email, 
            password
        })

        //Create salt and hash for password
        bcrypt.genSalt(10,(err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash)=> {
                if(err) throw err;
                newUser.password=hash;
                newUser.save()
                    .then(user => {
                        res.json({
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                    })
            })
        })


    })

   
}