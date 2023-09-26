const express = require("express");
const { validation, isValidId, favoriteValidation } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getByid));

router.post("/", validation(schemas.addSchema), ctrlWrapper(ctrl.add));

router.put("/:id", isValidId, validation(schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch(
  "/:id/favorite",
  isValidId,
  favoriteValidation(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

module.exports = router;
