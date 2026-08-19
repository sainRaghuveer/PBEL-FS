const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const userRouter = express.Router();

userRouter.get("/api/google", passport.authenticate("google", { scope: ["profile", "email"] }));

userRouter.get(
  "/api/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      picture: req.user.picture,
    }, "PBEL", { expiresIn: "1d" });

    res.redirect("http://localhost:5173");
  }
);


module.exports = {
  userRouter
}