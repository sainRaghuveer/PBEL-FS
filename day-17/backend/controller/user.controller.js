const { userModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registration = async (req, res) => {

    const { fullName, email, password, phoneNumber } = req.body;

    if (fullName == "" || email == "" || password == "" || phoneNumber == "") {
        return res.send({ "message": "All fields are required" });
    }

    const existUser = await userModel.findOne({email});
    console.log(existUser)

    if(existUser){
        return res.status(400).send({"message":"User already exist"})
    }

    try {
        bcrypt.hash(password, 5,  async function (err, hash) {
            if (err) {
                return res.send({ "message": "There is error while creating account" })
            } else {
                const user = new userModel({ fullName, email, password:hash, phoneNumber });
                await user.save();

                res.status(200).send({ "message": "Registration is completed" })
            }
        });

    } catch (error) {
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }
}

const userLogin = async(req, res) =>{

    const { email, password } = req.body;

    try {
        const existUser =await userModel.findOne({email});

        if(existUser){
            bcrypt.compare(password, existUser.password, function(err, result) {
                if(result){
                    const token = jwt.sign({ userId: existUser._id }, "PBEL", { expiresIn: '1h' });
                    res.status(200).send({ "message": "Login is successful", user:{user:existUser, token} })
                } else {
                    res.status(400).send({ "message": "Invalid credentials" })
                }
            });
        } else {
            res.status(400).send({ "message": "User not found" })
        }

    } catch (error) {
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }

}


module.exports = {
    registration, userLogin
}