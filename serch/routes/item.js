var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var pool = mysql.createPool({
	host	  : "localhost",
	user 	  : "root",
	password  : "123456",
	database  : "xin"
})

/* GET home page. */
router.post('/list', function(req, res, next) {
	var abc = req.body.abc;
	console.log(abc);
	pool.query("SELECT * FROM gao WHERE money LIKE '"+abc+"'",function(err,rows,deilt){
		res.header('Access-Control-Allow-Origin','*');
		console.log(rows);
		res.send(rows);
	})
});

module.exports = router;
