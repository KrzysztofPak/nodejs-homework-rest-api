const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSub = require("./updateSub");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  updateSub,
  updateAvatar,
  verify,
  resendVerify,
};
