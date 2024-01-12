// creating node JS server
// Core Modules => http https fs os path

const http = require("http");

const routes = require("./routes");
console.log(routes.someData);

const server = http.createServer(routes.handler);

server.listen(4200);
