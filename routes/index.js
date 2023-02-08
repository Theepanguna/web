/* routes/index.js
   Pratheepan Gunaratnam
   Student id :- 301320478
   06-02-23

*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project page' });
});
/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('services', { title: 'Service page' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
