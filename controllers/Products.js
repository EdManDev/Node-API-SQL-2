const config = require("../config/db");

// ======================================================================================
// @desc      Request Product
// @route     GET /api/product
// @access    Public
// ======================================================================================

exports.getProduct = (req, res) => {
	config.getConnection(function (err, connection) {
		const sql = "SELECT * FROM `products`";
		connection.query(sql, (err, results) => {
			connection.end;
			if (err) {
				next(err);
			} else {
				res.json(results);
			}
		});
		connection.release();
	});
};

// ======================================================================================
// @desc      Create Product
// @route     POST /api/product
// @access    Public
// ======================================================================================
exports.postProduct = (req, res) => {
	config.getConnection(function (err, connection) {
		const sql = "INSERT INTO products SET ?";

		const post = {
			// id: req.body.id,
			name: req.body.name,
			price: req.body.price,
			date: req.body.date,
		};

		connection.query(sql, post, (err, results) => {
			connection.end;
			if (err) {
				next(err);
			} else {
				res.json(results);
			}
		});

		connection.release();
	});
};

// ======================================================================================
// @desc      Update Product
// @route     PUT /api/product
// @access    Public
// ======================================================================================
exports.putProduct = (req, res) => {
	config.getConnection(function (err, connection) {
		const sql = "INSERT INTO products(name, price) VALUES(?, ?)";

		const id = req.params.id;

		const post = {
			id: req.body.id,
			name: req.body.name,
			price: req.body.price,
			date: req.body.date,
		};

		connection.query(sql, post, (err, results) => {
			connection.end;
			if (err) {
				next(err);
			} else {
				res.json(results);
			}
		});

		connection.release();
	});
};
