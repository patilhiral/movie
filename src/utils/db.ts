import mongoose from 'mongoose';

exports.module.connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGOURI);
        console.log('Mongoose connected')
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}