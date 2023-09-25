const { Contact } = require("../../models/contact");

const getByid = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  res.json(result);
};

module.exports = getByid;
