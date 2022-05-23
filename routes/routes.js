const express = require("express");
const home = require("./home");
const auth = require("./auth");
const signup = require("./signup");
const signin = require("./signin");
const logout = require("./logout");
const subscriptions = require("./subscriptions");

module.exports = function (app) {
    app.use(express.json());

    app.use("/", home);
    app.use("/signup", signup);
    app.use("/signin", signin);
    app.use("/logout", logout);
    app.use("/auth", auth);
    app.use("/subscriptions", subscriptions);
};
