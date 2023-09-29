const handleErrors = require("./handleErrors");
const ctrlWrapper = require("./ctrlWrapper");
const RequestError = require("./RequestError");
const sendEmail = require("./sendEmail");
const createVerifyEmail = require("./createVerifyEmail");

module.exports = {
  ctrlWrapper,
  handleErrors,
  RequestError,
  sendEmail,
  createVerifyEmail,
};
