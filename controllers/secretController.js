const Secrets = require('../modals/secrets');


// why next ?

//@desc     GET secrets
//api       /api/v1/secrets
//access    PUBLIC
exports.getSecrets = async (req, res, next) => {
    try {
        const secrets = await Secrets.find();

        return res.status(200).json({
            success: true,
            count: secrets.length,
            data: secrets
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


//@desc     POST secrets
//api       /api/v1/secrets
//access    PUBLIC
exports.postSecrets =async (req, res, next) => {

 
    const secrets = await Secrets.create(req.body);
    
    try {
        
        return res.status(201).json({
            success: true,
            data: secrets
        })
    } catch (error) {
        console.log(error);
    }
    
}