const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Register = require("./controllers/registerController");
const Login = require("./controllers/loginController");

//load environment variables from '.env' file into 'process.env'.
dotenv.config();
//initialize express
const app = express();

//middlewares
app.use(express.json());
//for cross origin usage(frontend) and (backend)
app.use(cors({ origin: '*' }));

//db connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.error("Database connection error:", err);
});

//routers
//home page
app.route("/").get((req, res) => {
    res.status(200).json({ msg: "Home page" })
});
//register page
app.route("/register").post(Register);
//login page
app.route("/login").get(Login);
//movie details page
app.route("/details").get((req, res) => {
    res.status(200).json({ msg: "Movie details" })
});

//server connection
app.listen(process.env.PORT, () => {
    console.log("server running at port 5000");
});