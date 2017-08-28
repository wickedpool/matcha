var 	express = require('express'),
		connect = require('../config/database.js'),
		session = require('express-session'),
		router = express.Router();

router.get('/', function(req, res) {
	res.render('register', {
		title: 'Inscription',
		user: req.session.user
	})
})


router.post('/', function(req, res) {
	var	login = req.body.login,
		name = req.body.name,
		lastname = req.body.lastname,
		email = req.body.email,
		gender = req.body.gender,
		city = req.body.city,
		age = req.body.age;
	if (login && name && lastname && email && age && gender && city) {
		connect.query("SELECT * FROM user WHERE login = ? OR email = ?", [login, email], (err, rows, result) => {
		if (err) console.log(err)
		else if (login.length > 60 || email.length > 150 || lastname.length > 60 || name.length > 60) {
			res.redirect('/?err=oklm');
		} else {
			res.send("ON EST LA !");
		}
		})
	}
	else
		res.redirect("/");
});

module.exports = router;
