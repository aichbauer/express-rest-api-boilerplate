const bcrypt = require('bcrypt-nodejs');

module.exports = {
  password: (user) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(user.password, salt);

    return hash;
  },
  comparePassword: (password, hash) => (
    bcrypt.compareSync(password, hash)
  ),
};
