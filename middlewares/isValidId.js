const { isValidObjectId } = require("mongoose");
const createError = require("http-errors");

const isValidId = (req, _, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    const error = createError(400, `Product with id=${id} not found`);
    next(error);
  }
  next();
};

module.exports = isValidId;
