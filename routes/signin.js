const express = require("express");
const router = express.Router();

router.get("/signin", (req, res) => {
    res.send("SIGN IN!");
});

module.exports = router;
