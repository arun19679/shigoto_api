require('dotenv').config();

const express = require('express');
const app = express();
const userRoutes = require('./routes/user')

app.use(express.json());
app.use('/user',userRoutes);

const Port = process.env.PORT || 29091;

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});