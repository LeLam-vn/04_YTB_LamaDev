const express = require('express')
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('BE_Connect MongoDB successfully!'))
    .catch((error) => {
        console.log('BE_Error connect to MongoDB: ', error)
    });


app.listen(process.env.PORT || 5009, () => {
    console.log('Server is running')
})

// Test API endpoint
// app.get('/api/test', () => {
//     console.log('BE_Test is successfully!')
// })

app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/cart', cartRoute);
app.use('/api/orders',orderRoute)
