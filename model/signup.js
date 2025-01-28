const UserDetails = () => ({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    dob:"",
    role: "",
    status: "Y",
    createdBy: "",
    createdDate: new Date,
    updatedBy: "",
    updatedDate: new Date
});

SignupResp =  {
    status: "",
    message: "",
}

module.exports = {UserDetails,SignupResp};