const jwt=require('jsonwebtoken');
const UserModel = require("../models/usermodel");
const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const userExist = await UserModel.findOne({ Email });
        if (userExist) {
            if (userExist.Password === Password) {
                let payload = {
                    user:
                    {
                        id: userExist.id
                    }
                }
                jwt.sign(payload, "jwtpassword", { expiresIn: 360000000 }, (err, token) => {
                    if (err) throw err;
                    return res.json({ token, msg: "user login successful" });
                });
            }
            else {
                return res.status(400).json({ msg: "Invalid credentials" });
            }
        }
        else {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
    }
    catch (error) {
        res.status(400).json({ msg: "Error:" + error });
    }
}
module.exports = Login;
