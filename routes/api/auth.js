const express = require("express");
const { validation, authenticate, upload } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/auth");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validation(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

router.post(
  "/verify",
  validation(schemas.verifyEmailchema),
  ctrlWrapper(ctrl.resendVerify)
);

router.post("/login", validation(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/:id/subscription",
  validation(schemas.subscrSchema),
  ctrlWrapper(ctrl.updateSub)
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
