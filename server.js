const express = require("express");
const dotenv = require("dotenv");
const cors = require("express");
dotenv.config();
const morgan = require("morgan");

// import connection of database
const config = require("./config/db");

// import routes
const usertRoutes = require("./routes/User.Routes");
const productRoutes = require("./routes/Product.Routes");

const app = express();

app.use(morgan("dev"));
app.use(cors(""));

// connect database
// config.connect();

// test the server if it work
app.get("/", (req, res) => {
	res.json({ data: "Hello World" });
});

// routes & middleware
app.use("/api", usertRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
