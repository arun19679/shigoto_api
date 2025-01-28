const express = require('express');
const router = express.Router();

const GetJobOpenings = require('../controller/getopenings')
const ApplyJob = require('../controller/applyJob')

router.get('/getopenings', GetJobOpenings.GetJobOpenings);
router.post('/applyjob',ApplyJob.ApplyJob)

module.exports = router;