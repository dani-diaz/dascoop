const Restaurant = require('../models/restaurant');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res ) {
    console.log(req.params.id)
    console.log(req.user._id)
    console.log(req.body.id)
    console.log(req.body._id)
  // Note the cool "dot" syntax to query on the property of a subdoc
 Restaurant.findOne({'reviews._id': req.params.id }, function(err, restaurant) {
    // Rogue user!
    if (!restaurant || err) return res.redirect('/restaurants');
    // Remove the review using the remove method available on Mongoose arrays
    restaurant.reviews.remove(req.params.id);
    // Save the updated restaurant
    restaurant.save( function(err) {
      // Redirect back to the restaurant's show view
      res.redirect(`/restaurants/${restaurant._id}`);
      // res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}

function create(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
      // Update req.body to contain user info
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      // Add the comment
      restaurant.reviews.push(req.body);
      restaurant.save(function(err) {
        res.redirect(`/restaurants/${restaurant._id}`);
      });
    });
  }