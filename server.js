//express server
// const express = require("express");
// const app = express();

// app.get('/home',(req,res) => {
//     res.send("Hello from practice")
// })

// app.listen((9000), () => {
//     console.log("server is running");
// })


//inbuilt middleware & params
// const express = require("express");
// const app = express();
// app.use(express.json())
//  app.get('/user/:id',(req,res) => {
//     res.send(`This is user number ${req.params.id}`)
//  })
//  app.listen((9000), () => {
//     console.log("server is running");
// })


// sum of 2 numbers using route params
// const express = require("express");
// const app = express();
// app.use(express.json())
// app.get('/sum/:num1/:num2',(req,res) => {
//     const num1 = Number(req.params.num1);
//     const num2 = Number(req.params.num2);
//     const sum = num1+num2;
//     res.send(`The sum of two numbers ${sum}`)
//  })
//  app.listen((9000), () => {
//     console.log("server is running");
// })

//error handling middleware
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.get('/home',(req,res,next) => {
//     const error = new Error('Manual error');
//     next(error);
// });
// app.use((err,req,res,next) => {
//     res.status(500).send(`
//         <h1>404 - Page Not Found</h1>
//         <p>This page Not available!</p>
//        <a href = '/'>Go To Home Page</a>
//         `);
// })
// app.listen((9000), () => {
//     console.log("server is running");
// })

//router lvl middleware
// const express = require("express");
// const app = express();
// const router = express.Router();
// app.use(express.json());
// router.use((req,res,next) => {
//     console.log("Time:", new Date().toLocaleTimeString());
//     next();
// })
// router.get('/login',(req,res) => {
//     res.send("User Login")
// })
// router.get('/home',(req,res) => {
//     res.send("user Home")
// })
// app.use('/user',router);
// app.listen((9000), () =>{
//   console.log("server is running")
// })

//application lvl middleware
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.use((req,res,next) => {
// console.log("This is logger middleware", new Date().toLocaleTimeString(), req.method, req.url);
//     next();
// })
// app.get('/login',(req,res) => {
//     res.send("User Login")
// })
// app.listen((9000), () =>{
//   console.log("server is running")
// })

//query params
// const express = require('express');
// const app = express();
// app.get('/products',(req,res) => {
//     const sort = req.query.sort;
//     const category = req.query.category;
//     res.send(`category: ${category}, sort by: ${sort}`)
// })
// app.listen((9000), () => {
//     console.log("server is running")
// })

//sum of sumbers using query params
// const express = require('express');
// const app = express();
// app.get('/sum',(req,res) => {
//     const a = Number(req.query.a);
//     const b = Number(req.query.b);
//     res.send(`The sum is ${a+b}`)
// })
// app.listen((9000), () => {
//     console.log("server is running")
// })





