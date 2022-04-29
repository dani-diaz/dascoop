var express = require('express');
var router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants');
const isLoggedIn = require('../config/auth');


/* GET home page. */
router.get('/', restaurantsCtrl.index);
router.get('/new', restaurantsCtrl.new); 
router.get('/:id', restaurantsCtrl.show);
router.post('/', isLoggedIn, restaurantsCtrl.create);
router.get('/:id/edit', restaurantsCtrl.edit);
router.put('/:id', restaurantsCtrl.update);

module.exports = router;