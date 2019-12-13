const models = require('../models'); 

module.exports = {
  create: (req, res, next) => {
    models.Review.create(req.body)
      .then(createdReview => {
        res.send(createdReview);
      })
      .catch(next);
  },

  getAll: (req, res, next) => {
    models.Review.find()
      .then(reviews => {
        res.send(reviews)
      }).catch(next);
  },

  getByUserId: (req, res, next) => {
    const { id } = req.params;

    models.Review.find({ creatorId: id })
      .then(reviews => {
        res.send(reviews);
      }).catch(next);
  },

  getOne: (req, res, next) => {
    const { id } = req.params;

    models.Review.findById({ _id: id })
      .then(review => {
        res.send(review);
      })
      .catch(next);
  },

  update: (req, res, next) => {
    const { id } = req.params;
    const data = req.body;

    models.Review.findOneAndUpdate({ _id: id }, data)
      .then(updatedReview => {
        res.send(updatedReview);
      }) 
  }, 

  delete: (req, res, next) => {
    const { id } = req.params;

    models.Review.findByIdAndRemove({ _id: id })
      .then(removed => {
        res.send(removed);
      }).catch(next);
  }
}