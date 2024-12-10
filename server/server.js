const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute');
const connectDb = require('./Services/ConnectDbService')

require('dotenv').config();
// middleware apply cors add all request 
app.use(cors());
// middleware get info from client by req.body
app.use(express.json());
// connect database
connectDb();

//middleware router
app.use('/users', userRoute);

//api/auth.register ==> post
app.use('/api/auth', authRoute);
//api/auth.register ==> post

app.listen(process.env.PORT, function(){
    console.log(`sever is running ${process.env.PORT}`);
});