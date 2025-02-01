import mongoose from "mongoose"
import express from "express"
import productModel from "../models/product";

const router = express.Router();

//reading the product using GET
router
.get("/product",async (req,res)=>{
    console.log("inside /");
    const product = await productModel.find();
    res.json(product);
});

router.post("/create",async (req,res)=>{
    console.log("inside /create");
    const user
})

export default router;