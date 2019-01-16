var express = require('express');
var router = express.Router();
const v1Router = require('./v1');

router.use('', v1Router);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
