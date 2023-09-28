const { User } = require("../../models/user");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  try {
    const { id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    //
    const resizeAvatar = await Jimp.read(tempUpload);
    resizeAvatar
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER || Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(tempUpload);
    //
    const extention = originalname.split(".").pop();
    const filename = `${id}.${extention}`;
    const resultUpload = path.join(avatarsDir, filename);

    await fs.rename(tempUpload, resultUpload);

    const avatartURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(id, { avatartURL });
    res.json({
      avatartURL,
    });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
