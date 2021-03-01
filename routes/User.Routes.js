const express = require("express");
const router = express.Router();

const { getUser, postUser } = require("../controllers/User");

router.get("/user", getUser);
router.post("/user", postUser);

router.get("/hello", (req, res) => {
	res.send("hello there");
});

module.exports = router;
