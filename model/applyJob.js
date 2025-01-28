
const ApplyJobResp = {
    status: "",
    message: "",
}

const ApplyJobReq = () => ({
    email: "",
    company: "",
    jobTitle: "",
    location: "",
    salary: "",
    exp: "",
    resume: ""
})

module.exports = { ApplyJobResp, ApplyJobReq }