const LocalDb = require('../config/database');
const multiparty = require('multiparty')
const fs = require('fs')
const ApplyJobSchema = require('../model/applyJob')

const ApplyJob = (req, res) => {
    console.log('ApplyJob(+)')

    // const form = new multiparty.Form();
    const form = new multiparty.Form({
        maxFieldsSize: 10 * 1024 * 1024,
    });

    form.on('progress', (bytesReceived, bytesExpected) => {
        console.log(`Progress:${bytesReceived} / ${bytesExpected}`)
    });

    var lApplyJobReq = ApplyJobSchema.ApplyJobReq
    var lApplyJobResp = ApplyJobSchema.ApplyJobResp
    lApplyJobResp.status = "S"



    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log("ApplyJob:Error01", err);
            lApplyJobResp.status = "E"
            lApplyJobResp.message = "ApplyJob:Error01:" + err
            return
        } else {
            var jdata = fields.jData
            lApplyJobReq = JSON.parse(jdata[0])
            
            var lFile = files.file[0]

            // Read the file
            fs.readFile(lFile.path, (err, data) => {
                if (err) {
                    console.error("Error reading file:", err);
                    return;
                }

                // Convert to Base64
                var base64String = data.toString('base64');
                lApplyJobReq.resume = base64String
                AssignAppliedJob(lApplyJobReq)
                lApplyJobResp.message = "Insert Successful";
                res.send(lApplyJobResp);
            });
        }
    })



    console.log('ApplyJob(-)')
}

function AssignAppliedJob(pApplyJobReq) {
    console.log("AssignAppliedJob(+)");

    LocalDb.JobApplications.push(pApplyJobReq)

    console.log("AssignAppliedJob(-)");
}

module.exports = { ApplyJob }