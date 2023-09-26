const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const updateSub = async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(400, "Missing field subscription");
  }
  res.json(result);
};

module.exports = updateSub;
