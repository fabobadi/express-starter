const express = require('express')
const morgan = require('morgan')
const app = express()
var comments = [];
var last;
app.use(morgan('tiny'))
app.set("view engine","jade");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
  res.render("index");
})
app.post("/",function(req, res){
  comments.push(req.body.data);
  res.send(req.body.data);
})
app.get("/showdata", (req, res) => {
  res.send({ data: comments });
})
module.exports = app
