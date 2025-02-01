import mongoose from "mongoose";

//schema definition
const productSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: String,
    price: {
        type:Number,
        required: true,
        message: "{value} is not a valid type",
    },
    discount: Number,
    rating: Number,
    brand: String,
    category: String
});

const productModel = mongoose.model("product",productSchema);
export default productModel;