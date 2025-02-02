import mongoose from "mongoose"
import express from "express"
import cartModel from "../models/cart.js"

const router = express.Router();

router.use(express.json());

//creating cart details using POST
router
.post("/create",async (req,res) => {

    try{
    const cart = new cartModel({
        username:req.body.username,
        items:[
            {
                productId: req.body.id,
                quantity: req.body.quantity
            }
        ],
        totalCost: req.body.cost,
        tax: req.body.tax,
        shippingCost: req.body.shippingcost
    });
    console.log("cart detail added successfully");
    await cart.use();
    res.json(cart);
}catch(e){
    console.log("inside catch");
    console.log(e);
    res.json(e);
}
});

router
.get("/details",async(req,res)=>{
    console.log("inside cart/details");
    const cart = await cartModel.find();
    res.json(cart);
});

export default router;
