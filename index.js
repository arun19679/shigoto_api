require('dotenv').config();

const express = require('express');
const app = express();
const userRoutes = require('./routes/user')
const jobRoutes = require('./routes/job')

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Allow your frontend origin
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
        return res.sendStatus(204); // No content
    }

    next();
})

app.use('/user', userRoutes);
app.use('/job',jobRoutes)

const Port = process.env.PORT || 29091;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});