const config = require("../config/db");

// ======================================================================================
// @desc      Request Payment
// @route     GET /api/product
// @access    Public
// ======================================================================================

exports.getProduct = (req, res) => {
	config.getConnection(function (err, connection) {
		var sql = "SELECT * FROM `products`";
		connection.query(sql, (err, results, fields) => {
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
// @desc      Response Payment
// @route     POST /api/product
// @access    Public
// ======================================================================================
exports.postProduct = (req, res) => {
	// res.json({ data: "post Product" });
	config.getConnection(function (err, connection) {
		// do whatever you want with your connection here
	});
};

// var sql = "INSERT INTO `products`SET `id`=?, `name`=?, `price`=?, `date`=?";
