import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import router from "./routes/productRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"

const app = express()
const port = 5000

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MONGODB Connected successfully"))

//route middleware
app.use("/product", router);
app.use("/user", userRouter);
app.use("/cart",cartRouter);

//body parser middleware
app.use(express.json());

app.get("/home", (req, res) => {
    console.log("inside /home");
    res.send("Welcome Home!");
})
app.listen(port, () => {
    console.log("Server connected successfully in port:", port);
})

