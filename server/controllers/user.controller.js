const userService = require("../service/user.service");

class UserController {
	async registration(req, res, next) {
		try {
			const { email, password } = req.body;
			const userData = await userService.registration(email, password);
			res.cookie("refreshToken", userData.refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			});
			return res.json(userData);
		} catch (e) {
			console.log(e);
			res.status(400).json({ message: "Registration Error" });
		}
	}

	async login(req, res, next) {
		try {
		} catch (e) {}
	}

	async logout(req, res, next) {
		try {
		} catch (e) {}
	}

	async active(req, res, next) {
		try {
		} catch (e) {}
	}

	async refresh(req, res, next) {
		try {
		} catch (e) {}
	}

	async getUsers(req, res, next) {
		try {
		} catch (e) {}
	}
}

module.exports = new UserController();
