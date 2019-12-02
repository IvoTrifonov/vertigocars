const models = require('../models');

module.exports = {
  create: (req, res, next) => {
    models.Car.create(req.body)
      .then(createdCar => {
        res.send(createdCar);
      })
      .catch(next);
  },

  getCars: (req, res, next) => {
    let query = { ...req.body };
    
    Object.keys(query).forEach(key => {
      if (!query[key] || key === 'price') {
        delete query[key];
      }
    });

    models.Car.find(query)
      .then(foundCars => {
        if (req.body.price) {
          foundCars = foundCars.filter(c => +c.price <= +req.body.price)
        }

        res.send(foundCars)
      })
      .catch(next);
  },
}