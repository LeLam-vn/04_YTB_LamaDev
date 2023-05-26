const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('BE_Connect MongoDB successfully!'))
    .catch((error) => {
        console.log('BE_Error connect to MongoDB: ', error)
    });

app.use(express.json())
//Test API endpoint
app.get('/api/test', () => {
    console.log('BE_Test is successfully!')
})

app.use('/api/users', userRoute)

app.listen(process.env.PORT || 5003, () => {
    console.log('Server is running')
})