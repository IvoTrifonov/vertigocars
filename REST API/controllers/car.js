const models = require('../models'); 

module.exports = {
  create: (req, res, next) => {
    models.Car.create(req.body)
      .then(createdCar => {
        res.send(createdCar);
      })
      .catch(next);
  },

  getCar: (req, res ,next) => {
    const { id } = req.params;

    models.Car.findById({ _id: id })
      .then(car => {
        res.send(car);
      })
      .catch(next);
  },

  getCars: (req, res, next) => {
    let query = { ...req.body };
    
    Object.keys(query).forEach(key => {
      if (!query[key] || key === 'maxPrice') {
        delete query[key];
      }
    });

    models.Car.find(query)
      .then(foundCars => {
        if (req.body.maxPrice) {
          foundCars = foundCars.filter(c => +c.price <= +req.body.maxPrice)
        }

        res.send(foundCars)
      })
      .catch(next);
  },

  updateCar: (req, res, next) => {
    const { id } = req.params;
    const { userId } = req.body;
    const data = req.body;

    models.Car.findOneAndUpdate({ _id: id }, !userId ? data : 
    { $push: {'likedBy': userId }, new: true })
      .then(updatedCar => {
        res.send(updatedCar)
      })
  },

  getCarsByUserId: (req, res, next) => {
    const { id } = req.params;

    models.Car.find({ ownerId: id })
      .then(receivedCars => {
        res.send(receivedCars);
      }).catch(next);
      
  },

  getSavedCars: (req, res, next) => {
    let { ids } = req.params;
    const arrayIds = ids !== 'empty' ? ids.split(',') : null;

    models.Car.find({ '_id': arrayIds })
      .then(cars => {
        res.send(cars);
      }).catch(next);
  },

  delete: (req, res, next) => {
    const { id } = req.params;

    models.Car.findByIdAndRemove({ _id: id })
      .then(removed => {
        res.send(removed);
      }).catch(next);
  }

}