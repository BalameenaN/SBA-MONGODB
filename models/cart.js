import mongoose from "mongoose"

//schema for the nested array in cartschema
const itemSchema = new mongoose.Schema({
      
    productId: Number,
    quantity: Number

})

const cartSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true
    },
    items:[itemSchema],
    totalCost: Number,
    tax: Number,
    shippingCost: Number
},{
    timestamps:true
});

const cartModel = mongoose.model("cart",cartSchema);
export default cartModel;