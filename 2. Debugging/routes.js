const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello World</title></head>");
    res.write(
      "<body> <form action='/msg' method='POST'> <input type='text' name='msg'> <button type='submit'>Submit</button></form> </body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/msg" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const msg = parsedBody.split("=")[1];
      fs.writeFile("msg.txt", msg, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Hello World</title></head>");
  res.write("<body> Hello from NodeJS </body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler,
  someData: "importing from routes.js",
};
