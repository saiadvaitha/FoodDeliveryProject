const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db');

connectDB();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
    res.send('Hello World!....');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Fix string interpolation
});









// const express=require('express')
// const app=express();
// const port=5000;
// // const User = require('../models/User')
// const connectDB =require('./db')
// connectDB()


// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With,Content-Type,Accept"
//     );
//     next();
// })

// app.use(express.json())
// app.use('/api',require("./Routes/CreateUser"));
// app.use('/api',require("./Routes/DisplayData"));
// app.use('/api',require("./Routes/OrderData"));

// app.get('/',(req,res)=>{
//     res.send('Hello World!....')
// })
// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`);
// })

// // .then(() => {
// // app.get('/',(req,res)=>{
// //     res.send('Hello World!')
// // })
// // app.use(express.json())
// // app.use('/api/',require('./Routes/CreateUser'))

// // app.listen(port,()=>{
// //     console.log(`Example app ${port}`);
// // });
// // })
// // .catch((error) => {
// //     console.error('Error connecting to MongoDB:', error);
// //     process.exit(1); // Exit the process with a non-zero exit code (indicating failure)
// //   });
