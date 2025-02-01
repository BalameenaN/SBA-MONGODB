import mongoose from "mongoose"
import express from "express"
import productModel from "../models/product.js";

const router = express.Router();
//body parser middleware(it is to be given in the file which has post method)
router.use(express.json());

//creating the product details
router.post("/create",async (req,res)=>{
    console.log("inside product/create");
    console.log(req.body.title,"body");
    try{
    const product= new productModel( {
        title: req.body.title,
        description: req.body.description,
        price:req.body.price,
        discount: req.body.discount,
        rating: req.body.rating,
        brand: req.body.brand,
        category: req.body.category,
    });
    console.log("product created successfully");
    await product.save();
    res.json(product);
}catch(e){
    console.log('inside catch');
        console.log(e);
        res.json(e);
}
});


//reading the product using GET
router
.get("/details",async (req,res)=>{
    console.log("inside product /");
    const product = await productModel.find();
    res.json(product);
});

export default router;