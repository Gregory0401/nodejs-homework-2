const express = require("express")
const router = express.Router();
const {ctrlWrapper} = require("../../helpers");
const {validateBody, authenticate, upload} = require('../../middlewares');
const {schemas} = require("../../models/user");
const ctrl = require("../../controllers/auth")

router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))
router.get("/verify/:verificationCode", ctrlWrapper(ctrl.verify))
router.post("verify", validateBody(schemas.verifySchema), ctrlWrapper(ctrl.resendEmail))
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout))
router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;