const { userModel } = require("../model/user.model");
const bcrypt = require("bcrypt");

const registration = async (req, res) => {

    const { fullName, email, password, phoneNumber } = req.body;

    if (fullName == "" || email == "" || password == "" || phoneNumber == "") {
        return res.send({ "message": "All fields are required" });
    }

    const existUser = userModel.findOne({email});

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
        res.status(400).send({ "message": error })
    }
}


module.exports = {
    registration
}