require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");
const router = require("./router");

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

const start = async () => {
	try {
		await mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(PORT, () => console.log("Server is running on PORT", PORT));
	} catch (e) {
		console.log(e);
	}
};

start();
