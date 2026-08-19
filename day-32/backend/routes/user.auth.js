const express = require("express");
const passport = require("passport");
const userRouter = express.Router();

userRouter.get("/api/google", passport.authenticate("google", { scope: ["profile", "email"] }));

userRouter.get(
  "/api/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/" }),
  (req, res) => {
    res.redirect("http://localhost:5173/home");
  }
);


module.exports = {
    userRouter
}