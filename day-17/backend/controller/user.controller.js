const { userModel } = require("../model/user.model");

const registration = async(req, res) =>{

    const {fullName, email, password, phoneNumber} = req.body;

    if(fullName == "" || email == "" || password == "" || phoneNumber==""){
        return res.send({"message":"All fields are required"});
    }

    try {
        const user = new userModel({fullName, email, password, phoneNumber});
        await user.save();

        res.status(200).send({"message":"Registration is completed"})
    } catch (error) {
        res.status(400).send({"message":error})
    }
}


module.exports={
    registration
}