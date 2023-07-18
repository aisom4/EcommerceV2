//required packages to start the server.

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors()); //cross origin resource sharing
app.use(express.json()); //JSON parsing for the database api request

const data = mysql.createConnection({
  //variable set for configuration of the mysql database connection
  host: "localhost",
  user: "root",
  password: "PASSWORD",
  database: "vinylVisionsProducts",
});

data.connect((err) => {
  //attempting to connect to the database with the variable set above
  //Code set to catch errors gracefully if there is an error it will be caught with error handling.
  if (err) {
    console.log(err);
    return err;
  } else {
    //if there is no error there will be a successful connection message.
    console.log("Database Connected!");
  }
});

app.get("/api/products", (req, res) => {
  //API endpoint get request to pull all the products from tthe vinylProducts database
  data.query("SELECT * FROM vinylProducts", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("ERROR ERROR ERROR"); // if there is an error an 500 status code will be sent
    } else {
      //If there is a success the results will show as a json
      res.json(result);
    }
  });
});

app.listen(3333, () => {
  //server listening for the proper port.
  console.log(`Console server listening on port 3333.`);
});
