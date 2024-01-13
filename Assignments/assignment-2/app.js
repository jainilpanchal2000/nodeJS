const express = require("express");
const PORT = 4200;

const app = express();

// Task1
// app.use((req, res, next) => {
//     console.log("first middleware");
//     next();
// });
// app.use((req, res, next) => {
//     console.log("second middleware");
//     res.send("<h1>heyy</h1>");
// });


// Task2
app.use("/users", (req, res, next) => {
    console.log("In middleware path = '/users'");
    res.send("<h1>Show Users</h1>");
});
app.use("/", (req, res, next) => {
    console.log("In middleware path = '/' & it will run always");
    res.send("<h1>Hello from Express JS</h1>");
});
app.listen(PORT);
