const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//setting server to listen port 5000
app.listen(5001, () => {
  console.log(`Server is running on port 5001.`);
});

const sayHi = (req, res) => {
    res.send("Hi!");
  };
  
  app.get("/", sayHi);
//send data to REST server
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send(`The sum is: ${a + b}`);
  });

