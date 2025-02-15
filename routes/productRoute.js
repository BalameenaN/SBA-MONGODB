import mongoose from "mongoose"
import express from "express"
import productModel from "../models/product.js";

const router = express.Router();
//body parser middleware(it is to be given in the file which has post method)
router.use(express.json());

//creating the product details
router.post("/create", async (req, res) => {
    console.log("inside product/create");
    console.log(req.body.title, "body");
    try {
        const product = new productModel({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            rating: req.body.rating,
            brand: req.body.brand,
            category: req.body.category,
        });
        console.log("product created successfully");
        await product.save();
        res.json(product);
    } catch (e) {
        console.log('inside catch');
        console.log(e);
        res.json(e);
    }
});

//reading the product using GET
router
    .get("/details", async (req, res) => {
        console.log("inside product /");
        try {
            const product = await productModel.find();
            res.json(product);
        } catch (e) {
            console.log('inside catch');
            console.log(e);
            res.json(e);
        }
    });

//displaying the product based on the category
router
    .get("/details/filter/:name", async (req, res) => {
        console.log("inside product/filter");
        try {
            const product = await productModel.find({"category":req.params.name});
            res.json(product);
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    });

//route to display the indexes
router
 .get("/indexes",async (req,res)=>{
       try{
        const index = await productModel.listIndexes();
        res.json(index);
       }catch(e){
        console.log(e);
        res.json(e);
       }
 })

//updating the certain field 
router
.put("/update/:id",async (req,res) =>{
    console.log("inside /update");
    const updatedProd =await productModel.findByIdAndUpdate(req.params.id,req.body);
    console.log(updatedProd);
    res.json("Product changes are updated");
});

//deleting certain document from the collection
router
.delete("/delete/:id", async (req,res)=>{
    console.log("inside /prod/delete");
    const deletedProd = await productModel.findByIdAndDelete(req.params.id);
    console.log(deletedProd);
    res.json("Product deleted");

})

export default router;