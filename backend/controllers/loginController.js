const UserModel = require("../models/usermodel");
const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const userExist = await UserModel.findOne({ Email });
        if (userExist) {
            if (userExist.Password === Password) {
                return res.status(200).json({ msg: "User Login successful" });
            }
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        return res.status(400).json({ msg: "Invalid credentials" });
    }
    catch (error) {
        res.status(400).json({ msg: "Error:" + error });
    }
}
module.exports = Login;
