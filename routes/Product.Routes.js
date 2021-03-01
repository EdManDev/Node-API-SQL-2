const express = require("express");
const router = express.Router();

const { getProduct, postProduct } = require("../controllers/Products");

router.get("/product", getProduct);
router.post("/product", postProduct);

router.get("/hello", (req, res) => {
	res.send("hello there");
});

module.exports = router;
