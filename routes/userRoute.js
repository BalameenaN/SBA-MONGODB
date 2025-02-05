import mongoose from "mongoose"
import userModel from "../models/user.js"
import express from "express"

const router = express.Router();

router.use(express.json());

//creating the new user using post method
router
    .post("/create", async (req, res) => {
        console.log("inside user/create");
        try {
            const user = new userModel({
                name: req.body.name,
                phoneNo: req.body.phoneNo,
                subscription: req.body.subscription,
                address: req.body.address,
                loyalty_point: req.body.loyalty,
                email: req.body.email
            });
            await user.save();
            res.json(user);
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    })

//displaying all the user detail 
router
    .get("/details", async (req, res) => {
        console.log("inside user/details");
        try {
            const user = await userModel.find();
            res.json(user);
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    });

//displaying the user based on the id
router
    .get("/details/filter/:name", async (req, res) => {
        console.log("inside user/filter");
        try {
            const user = await userModel.find({"name":req.params.name});
            res.json(user);
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    });

    //displaying the list of indexes for this user model
    router
 .get("/indexes",async (req,res)=>{
    console.log("inside user/index");
       try{
        const index = await userModel.listIndexes();
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
    const updatedProd =await userModel.findByIdAndUpdate(req.params.id,req.body);
    console.log(updatedProd);
    res.json("user changes are updated");
});

//deleting certain document from the collection
router
.delete("/delete/:id", async (req,res)=>{
    console.log("inside /prod/delete");
    const deletedProd = await userModel.findByIdAndDelete(req.params.id);
    console.log(deletedProd);
    res.json("user deleted");

})

export default router;