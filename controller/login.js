const LoginSchema = require('../model/login');

const LocalDb = require('../config/database');

const Login = (req, res) => {

    console.log("Login(+)");

    LoginSchema.LoginResp.status = "S";
    const { emlId, pass } = req.body;
    const UserData = LocalDb.UserData.find((user) => user.emailId === emlId && user.password === pass);
    if (UserData) {
        LoginSchema.LoginResp.message = "Login Success";
    } else {
        LoginSchema.LoginResp.status = "E";
        LoginSchema.LoginResp.message = "Login Failed";
    }
    res.send(LoginSchema.LoginResp);

    console.log("Login(-)");
}

module.exports = { Login };