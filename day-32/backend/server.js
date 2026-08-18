const express = require("express");
const session = require("express-session");
const {passport } = require("./passport/google");
const cors = require("cors");
const { userRouter } = require("./routes/user.auth");
const { connection } = require("./config/db");


const app = express();

app.use(cors());
app.use(express.json());


app.use(
    session({
        secret:"PBEL",
        resave:false,
        saveUninitialized:false
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", userRouter);

app.listen(process.env.PORT, async()=>{
    try {
        await connection;
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }

    console.log("Running on port 8000")
})