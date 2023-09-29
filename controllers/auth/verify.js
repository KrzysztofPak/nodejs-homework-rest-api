const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  console.log(verificationToken);
  const user = await User.findOne({ verificationToken });
  console.log(user);
  if (!user) {
    throw RequestError(404);
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });
  res.json({
    message: "Email verify success",
  });
};

module.exports = verify;
