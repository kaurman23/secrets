const mongoose = require('mongoose');
const config = require('config');

const db=config.get('MONGO_URI');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');
    }
    catch(err) {
        console.log(`Error message ${err.message}`);
        process.exit(1);
    }

}

module.exports=connectDB;