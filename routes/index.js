var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MQTT broker at mqtt.chadconway.info' });
});

module.exports = router;
