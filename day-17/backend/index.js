const express = require("express");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(cors());


app.get("/", (req, res) => {
    res.send(`<h2 style="color:teal; text-align:center">Welcome to FS Server</h2>`);
});

const users = [
    {
        "name":"Mahavir",
        "uni":"ADTU"
    },
    {
        "name":"Ruth",
         "uni":"ADTU"
    },
    {
        "name":"Anreev",
         "uni":"ADTU"
    },
    {
        "name":"Aman",
         "uni":"ADTU"
    }
]

app.get("/users", (req, res)=>{
    res.send(users)
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})



