const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute');
const port = 5000;
const connectDb = require('./Services/ConnectDbService')

// middleware apply cors add all request 
app.use(cors());

// connect database
connectDb();

//middleware router
app.use('/users',userRoute);
app.use('/api/auth',authRoute);

//api/auth.register ==> post

app.listen(port, function(){
    console.log(`sever is running ${port}`);
});