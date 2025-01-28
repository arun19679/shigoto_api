const SignupSchema = require('../model/signup');

const LocalDb = require('../config/database');

const InsertUserData = (req, res) => {

    console.log("InsertUserData(+)");

    SignupSchema.SignupResp.status = "S";

    const { emlId, pass, fName, lName, dob, role } = req.body;

    AssignData(emlId, pass, fName, lName, dob, role);

    SignupSchema.SignupResp.message = "User Data Inserted Successfully";

    res.send(SignupSchema.SignupResp);

    console.log("InsertUserData(-)");
};


function AssignData(emlId, pass, fName, lName, dob, role){

    const UserData = SignupSchema.UserDetails();

    UserData.emailId = emlId;
    UserData.password = pass;
    UserData.firstName = fName;
    UserData.lastName = lName;
    UserData.dob = dob;
    UserData.role = role;
    UserData.createdBy = emlId;
    UserData.createdDate = new Date();
    UserData.updatedBy = emlId;
    UserData.updatedDate = new Date();

    LocalDb.UserData.push(UserData);

};

module.exports = { InsertUserData };