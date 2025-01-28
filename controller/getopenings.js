const LocalDb = require('../config/database');

const JobOpeningsSchema = require('../model/getopenings')

const GetJobOpenings = (req, res) => {

    console.log("GetJobOpenings(+)");
    
    JobOpeningsSchema.GetJobOpeningsResp.status = "S";


    if (LocalDb.JobOpenings.length === 0) {
        JobOpeningsSchema.GetJobOpeningsResp.message = "No Data Found";
    } else {
        JobOpeningsSchema.GetJobOpeningsResp.message = "Job Openings Found";
        JobOpeningsSchema.GetJobOpeningsResp.JobOpeningsList = LocalDb.JobOpenings
    }


    res.send(JobOpeningsSchema.GetJobOpeningsResp);

    console.log("GetJobOpenings(-)");
};

module.exports = { GetJobOpenings };