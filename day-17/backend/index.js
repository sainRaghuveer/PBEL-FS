const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { registration, userLogin, changePassword, getAllUsers } = require("./controller/user.controller");
const { authCheck } = require("./middleware/auth");
const { userProfile } = require("./controller/cart.controller");
const { userRouter } = require("./routes/user.route");
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send(`<h2 style="color:teal; text-align:center">Welcome to FS Server</h2>`);
});

app.use("/api", userRouter)


const PORT = process.env.PORT;

app.listen(PORT, async() => {
    try {
        await connection
        console.log("connection created between server and DB")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port", PORT)
})


//MVC structure
