const { User } = require("../../models/user");
const logout = async (req, res) => {
  const { id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });
  res.json({
    message: "Logout success",
  });
};

module.exports = logout;
