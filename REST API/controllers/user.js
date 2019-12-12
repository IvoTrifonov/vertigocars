const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");

module.exports = {
  get: (req, res, next) => {
    const { id } = req.params;

    models.User.findOne({ _id: id })
      .then(user => res.send(user))
      .catch(next);
  },

  post: {
    register: (req, res, next) => {
      const { username, password, rePassword } = req.body;
      models.User.create({ username, password })
        .then(createdUser => {
          res.send(createdUser)
        })
        .catch(err => {
          res.status(409).send('This username already exist!');
        });
    },

    login: (req, res, next) => {
      const { username, password } = req.body;
      models.User.findOne({ username })
        .then(user =>
          user
            ? Promise.all([user, user.matchPassword(password)])
            : [null, false]
        )
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send('Invalid username or password');
            return;
          }

          const token = utils.jwt.createToken({ id: user._id });
          res.cookie(config.authCookieName, token).send(user);
        }).catch(next)
    },

    logout: (req, res, next) => {
      const token = req.cookies[config.authCookieName];
      console.log("-".repeat(100));
      console.log(token);
      console.log("-".repeat(100));
      models.TokenBlacklist.create({ token })
        .then(() => {
          res.clearCookie(config.authCookieName).send("Logout successfully!");
        })
        .catch(next);
    }
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { carId, collection } = req.body;

    models.User.findOneAndUpdate(
      { _id: id },
      { $push: { [collection]: carId }, new: true }
    ).then(updatedUser => {
      res.send(updatedUser);
    });
  },

  deleteCar: (req, res, next) => {
    const id = req.params.id;
    const { carId } = req.body;

    models.User.findOneAndUpdate(
      { _id: id },
      { $pull: { ['savedCars']: carId }}
    ).then(updatedUser => {
      res.send(updatedUser);
    });
  }
};
