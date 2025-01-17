const SignupSchema = require('../model/signup');

const LocalDb = require('../config/database');

const InsertUserData = (req, res) => {

    const { emlId, pass, fName, lName, role, stat } = req.body;

    const UserData = SignupSchema.UserDetails();

    UserData.emailId = emlId;
    UserData.password = pass;
    UserData.firstName = fName;
    UserData.lastName = lName;
    UserData.role = role;
    UserData.status = stat;
    UserData.createdBy = emlId;
    UserData.createdDate = new Date();
    UserData.updatedBy = emlId;
    UserData.updatedDate = new Date();

    LocalDb.UserData.push(UserData);

    console.log("Data", LocalDb.UserData);
    

    res.send("Data Inserted Successfully");
};

module.exports = { InsertUserData };