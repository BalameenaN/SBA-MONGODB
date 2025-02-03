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

//updating the certain field 
router
.put("/update/:id",async (req,res) =>{
    console.log("inside /update");
    const updatedProd =await cartModel.findByIdAndUpdate(req.params.id,req.body);
    console.log(updatedProd);
    res.json("Changes to the cart are updated");
});

//deleting certain document from the collection
router
.delete("/delete/:id", async (req,res)=>{
    console.log("inside /prod/delete");
    const deletedProd = await cartModel.findByIdAndDelete(req.params.id);
    console.log(deletedProd);
    res.json("Cart item deleted");

})

export default router;
