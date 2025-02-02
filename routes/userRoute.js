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
    })

export default router;