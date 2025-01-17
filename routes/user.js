const express = require('express');
const router = express.Router();
const InsertUserApi = require('../controller/signup')
const GetUserApi = require('../controller/getuser')
const LoginApi = require('../controller/login')

router.post('/signup', InsertUserApi.InsertUserData);
router.get('/getuser', GetUserApi.GetUser);
router.get('/login', LoginApi.Login)

module.exports = router;