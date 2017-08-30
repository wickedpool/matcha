var 	express = require('express'),
		connect = require('../config/database.js'),
		session = require('express-session'),
		router = express.Router();

router.post('/', function(req, res) {
	var	login = req.body.login,
		name = req.body.name,
		lastname = req.body.lastname,
		email = req.body.email,
		gender = req.body.gender,
		city = req.body.city,
		age = req.body.age;
	if (login && name && lastname && email && age && gender && city) {
		//connect.query("SELECT * FROM user WHERE login = ? OR email = ?", [login, email], (err, rows, result) => {
		//if (err) console.log(err);
		if (login.length > 60 || email.length > 150 || lastname.length > 60 || name.length > 60) {
			req.session.error('trop long !');
			res.redirect('/');
		} else {
			res.send("ON EST LA !");
		}
	} else {
			req.session.error('Veuillez remplir tous les champs.');
			res.redirect('/');
	}
});

module.exports = router;
