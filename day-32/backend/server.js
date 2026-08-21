const express = require("express");
const session = require("express-session");
const {passport } = require("./passport/google");
const cors = require("cors");
const { userRouter } = require("./routes/user.auth");
const { connection } = require("./config/db");
const http = require("http");
const { Server } = require("socket.io");


const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:"http://localhost:5173",
        methods:["GET", "POST"]
    }
});

io.on("connection", (socket)=>{
    console.log("connected");

    socket.on("send_message", (data)=>{
        io.emit("receive_message", data)
    });

    socket.on("disconnected", ()=>{
        console.log("connection disconnected");
    })
})


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

server.listen(process.env.PORT, async()=>{
    try {
        await connection;
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }

    console.log("Running on port 8000")
})


//TCP- Transmission Control Protocol