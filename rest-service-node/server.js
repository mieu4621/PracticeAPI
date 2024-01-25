const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

const sayHi = (req, res) => {
    res.send("Hi!");
  };
  
  app.get("/", sayHi);
