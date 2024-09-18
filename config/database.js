const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo Connected');        
    }catch (error){
        console.error('Error Connecting to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
