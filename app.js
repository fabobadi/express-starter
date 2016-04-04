const express = require('express')
const morgan = require('morgan')
const app = express()
var comments = [];
var last;
app.use(morgan('tiny'))
app.set("view engine","jade");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
  res.render("index");
})
app.post("/savedata",function(req, res){
  last =req.body.data;
  res.render("save", {data: last});
  comments.push(last);
})
app.get("/showdata", (req, res) => {
  res.render("data",{data: comments});
})
module.exports = app
