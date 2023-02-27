const Router = require("express");
const userController = require("../controllers/user.controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
	"/registration",
	body("email").isEmail(),
	body("password").isLength({ min: 6, max: 16 }),
	userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.active);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;
