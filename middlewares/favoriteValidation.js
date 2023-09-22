const createError = require("http-errors");

const favoriteValidation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw createError(400, `Missing field favorite`);
    }
    next();
  };
};

module.exports = favoriteValidation;
