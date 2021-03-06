var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Willkommen' });
});

router.post('/', function(req, res) {
	if (req.body.username.trim() != '') {
		res.render('index', { title: 'Logged In', content: 'Hallo, ' + req.body.username });
	} else {
		res.redirect('/');
	}
})

module.exports = router;
