const JWTService = require('../services/auth.service');

// usually: "Authorization: Bearer [token]" or "token: [token]"
module.exports = (req, res, next) => {
  let token;

  if (req.header('Authorization')) {
    const parts = req.header('Authorization').split(' ');

    if (parts.length === 2) {
      const scheme = parts[0];
      const credentials = parts[1];

      if (/^Bearer$/.test(scheme)) {
        token = credentials;
      } else {
        return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
      }
    } else {
      return res.status(401).json({ msg: 'Format for Authorization: Bearer [token]' });
    }
  } else if (req.body.token) {
    token = req.body.token;
    delete req.query.token;
  } else {
    return res.status(401).json({ msg: 'No Authorization was found' });
  }

  return JWTService.verify(token, (err, thisToken) => {
    if (err) return res.status(401).json({ err });
    req.token = thisToken;
    return next();
  });
};
