const LocalDb = require('../config/database');

const GetUser = (req, res) => {
    if (LocalDb.UserData.length === 0) {
        return res.send("No Data Found");
    } else {
        res.send(LocalDb.UserData);
    }
};

module.exports = { GetUser };