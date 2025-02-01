import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import product from "./models/product.js"
const app = express()
const port =5000

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("MONGODB Connected successfully"))

//route middleware
app.use("/prod",product);

app.get("/home", (req,res)=>{
    console.log("inside /home");
    res.send("Welcome Home!");
})
app.listen(port,()=>{
    console.log("Server connected successfully in port:",port);
})

