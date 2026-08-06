const express = require("express");
const { registration, userLogin, changePassword, getAllUsers } = require("../controller/user.controller");
const { authCheck } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/registration", registration);
userRouter.post("/login", userLogin);
userRouter.post("/change-password", authCheck, changePassword);
userRouter.get("/users", getAllUsers);

module.exports = {
    userRouter
}
