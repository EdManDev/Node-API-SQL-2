// ======================================================================================
// @desc      Request Payment
// @route     GET /api/user
// @access    Public
// ======================================================================================

exports.getUser = (req, res) => {
	res.json({ data: "get user " });

	config.getConnection(function (err, connection) {
		// do whatever you want with your connection here

		connection.release();
	});
};

// ======================================================================================
// @desc      Response Payment
// @route     POST /api/user
// @access    Public
// ======================================================================================
exports.postUser = (req, res) => {
	res.json({ data: "post user" });

	config.getConnection(function (err, connection) {
		// do whatever you want with your connection here

		connection.release();
	});
};
