var express = require('express');
var router = express.Router();
const products = require('../Data/Products/Products')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send(products);
});

module.exports = router;
