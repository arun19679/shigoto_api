const LocalDb = require('../config/database');

const Login = (req, res) => {
    const { emlId, pass } = req.body;
    const UserData = LocalDb.UserData.find((user) => user.emailId === emlId && user.password === pass);
    if (UserData) {
        res.send("Login Success");
    } else {
        res.send("Login Failed");
    }
} 

module.exports = { Login };