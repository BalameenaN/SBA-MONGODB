import mongoose from "mongoose"

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    subscription: String,
    address: {
        type: String,
        required: true
    },
    loyalty_point: Number,
    email: String
},
    { timestamps: true });

    //included index for name field
    userschema.index({name:1});

const userModel = mongoose.model("user", userschema);
export default userModel;
