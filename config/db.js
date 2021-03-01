const mysql = require("mysql");

// module.exports = class Mysql {
// 	static connect() {
// 		// establish connection
// 		const databaseOptions = mysql.createConnection({
// 			connectionLimit: 10,
// 			host: process.env.DB_HOST,
// 			port: process.env.DB_PORT,
// 			user: process.env.DB_USER,
// 			password: process.env.DB_PASS,
// 			database: process.env.DB_NAME,
// 		});
// 		// connect to database
// 		databaseOptions.connect((err) => {
// 			if (err) {
// 				throw err;
// 			}
// 			console.log("✅ My SQL Connected...");
// 		});
// 		return databaseOptions;
// 	}
// };

const databaseOptions = mysql.createPool({
	connectionLimit: 10,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});
console.log("✅ My SQL Connected...");

module.exports = databaseOptions;
