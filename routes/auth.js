const jwt = require('express-jwt');

const getTokenFromHeaders = (req) => {
  const { headers: { authorization } } = req;

  if(authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }
  return null;
};

const auth = {
  required: jwt({
    secret: 'secret',
    userProperty: 'payload',
    algorithms: ['sha512'],
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: 'secret',
    userProperty: 'payload',
    algorithms: ['sha512'],
    getToken: getTokenFromHeaders,
    credentialsRequired: false,
  }),
};

module.exports = auth;