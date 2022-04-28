const express = require('express');
const router = express.Router();
// You Do - require the yet to be created
// reviews controller
const reviewsCtrl = require('../controllers/reviews');


// You Do - Define the Route
// POST restaurants/:id/reviews
router.post('/restaurants/:id/reviews', reviewsCtrl.create);
// DELETE /reviews/:id
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;
