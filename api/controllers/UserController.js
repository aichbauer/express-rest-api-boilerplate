const User = require('../models/User');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const UserController = () => {
  const create = (req, res) => {
    const body = req.body;

    User.create({
      username: body.username,
      password: body.password,
    })
      .then((user) => res.status(200).json({ user }))
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      });
  };

  const getAll = (req, res) => {
    User.findAll()
      .then((users) => res.status(200).json({ users }))
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      });
  };

  const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
      User.findOne({
        where: {
          username,
        },
      })
        .then((user) => {
          if (!user) {
            return res.status(400).json({ msg: 'Bad Request: User not found' });
          }

          if (bcryptService.comparePassword(password, user.password)) {
            return res.status(200).json({ token: authService.issue({ id: user.id }) });
          }

          return res.status(401).json({ msg: 'Unauthorized' });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ msg: 'Internal server error' });
        });
    }
  };

  return {
    getAll,
    create,
    login,
  };
};

module.exports = UserController;
