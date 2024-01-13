const express = require("express");

const app = express();

// app.use((req, res, next) => {
//     console.log("In Middleware 1");
//     next(); // allow the request to continue to next middleware in line
// });

app.use('/',(req, res, next) => {
    console.log("this always runs");
    next();
});


app.use('/add-product',(req, res, next) => {
    console.log("In Middleware 2");
    res.send("<h1>Adding Product</h1>");
});

app.use('/',(req, res, next) => {
    console.log("In Middleware 0");
    res.send("<h1>Hello from Express</h1>");
});
 
// const server = http.createServer(app);
// server.listen(4200);

app.listen(4200);
