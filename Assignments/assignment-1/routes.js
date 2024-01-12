const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {

    res.setHeader('Content-Type', 'text/html');
    res.write(
      '<html><head> <title>USER</title></head><body> <p>Hi There !!</p> <br /> <form action="/create-user" method="POST"> <input type="text" name="user-namme" /> <button>Create User</button> </form></body></html>'
    );
    return res.end();
  }

  if (url === "/users") {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      "<html><head> <title>USER</title></head><body> <p>List of Users !!</p> <br /> <ul> <li>User1</li> <li>User2</li> <li>User3</li> </ul></body></html>"
    );
    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (data) => {
      body.push(data);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const userName = parsedBody.split("=")[1];
      console.log("User : ", userName);
      res.setHeader("content-type", "text/html");
      res.setHeader("Location", "/");
      res.statusCode = 302;
      return res.end();
    });
  }
  
  res.end()
};

module.exports = {
  handler: requestHandler,
  text: "Importing Rotes",
};
