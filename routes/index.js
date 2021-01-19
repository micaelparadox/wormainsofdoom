var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

//email used for sending password reset info.
var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      user: 'youngceoshootz@gmail.com',
      pass: '91215920d'
  }
});

/* GET Index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Warmains' });
});

/* GET changelog page. */
router.get('/changelog', function(req, res, next) {
  res.render('changelog', { title: 'Warmins - Changelog' });
});

/* GET feedback page. */
router.get('/feedback', function(req, res, next) {
  res.render('feedback', { title: 'Warmains - Feedback'})
});

module.exports = router;
