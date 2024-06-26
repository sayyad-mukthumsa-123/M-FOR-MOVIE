const UserModel = require("../models/usermodel");

const Register = async (req, res) => {
    try {
        const { Username, Email, Password, ConfirmPassword } = req.body;
        const userExist = await UserModel.findOne({ Email });
        if (Password != ConfirmPassword)
            return res.status(400).json({ msg: "Password and ConfirmPassword doesn't match" });
        if (!userExist) {
            //create object of form dat
            let newUser = new UserModel({ Username, Email, Password, ConfirmPassword });
            //save data into db
            await newUser.save();
            return res.status(200).json({ msg: "User registered successfully" });
        }
        return res.status(400).json({ msg: "email already exists" });
    }
    catch (error) {
        return res.status(400).json({ msg: "Error" + error });
    }
}
module.exports = Register;