import mongoose from 'mongoose'

const donationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    transactionId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['PENDING','SUCCESS'],
        default:'PENDING'
    }
},{timestamps:true})

const Donation = mongoose.model('Donation',donationSchema);

export default Donation