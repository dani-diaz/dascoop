const Restaurant = require('../models/restaurant');

module.exports = {
  index,
  new: newRestaurant,
  show,
  create,
  edit
};

function index(req, res) {
  Restaurant.find({}, function(err, restaurants) {
    res.render('restaurants/index', { title: 'All Restaurants', restaurants });
  });
}


function newRestaurant(req, res) {
  res.render('restaurants/new', { title: 'Add Restaurant' });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    Restaurant.create(req.body, function (err, restaurant){
        if (err) return res.redirect('/restaurants/new');
        res.redirect('/restaurants');
    });  
  }

  function show(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
      res.render('restaurants/show', { title: 'Restaurant Info', restaurant });
    });
  }

function edit(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    res.render('restaurants/edit', { title: 'Edit Restaurant Info', restaurant });
  });
}