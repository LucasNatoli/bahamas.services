const msgs = require('../router/account.messages')
const jwt = require('jsonwebtoken');
const jwtSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhY2NvdW50cy5jbHViYmFoYW1hcy5maW5hbmNlIiwibmFtZSI6Ikx1Y2FzIE5hdG9saSIsImlhdCI6MTUxNjIzOTAyMn0.CeDih9NznUUNt7YNIYH_lzzpEO4iIMVOL9f9wRXhGRY';

const middlewares = {

  validateRequestEmail : (req, res, next) => {
    const email = req.body.email;
    const emailType = typeof (email)
    if (emailType === 'string' && email.length < 320) {
      next()
    } else {
      res.status(403).send(msgs.InvalidCredentials())
    }        
  },

  validateRequestPassword : (req, res, next) => {

    const password = req.body.password;
    const passwordType = typeof (password)
    if (passwordType === 'string' && password.length === 128) {
      next()
    } else {
      res.status(403).send(msgs.InvalidCredentials())
    }    
  }, 

  checkToken : (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token) {
      if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length); // Remove Bearer from string
      }
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          return res.status(400).send(msgs.InvalidToken());
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(400).send(msgs.InvalidToken());
    }    
  }
}

module.exports = middlewares