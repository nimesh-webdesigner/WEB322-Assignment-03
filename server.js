var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
var handlebars = require("express-handlebars");

app.use(express.static("static"));

function onHttpStart(){
    console.log("Express http server listening on; " + HTTP_PORT);
  }
  
app.engine(".hbs", handlebars.engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');


app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "static/index.html"));
});

app.get("/article", function(req, res) {
    res.sendFile(path.join(__dirname, "static/article.html"));
});

app.get("/registration", function(req, res) {
    res.render("registration", { layout: false });
});

app.get("/login", function(req, res) {
    res.render("login", { layout: false });
});

app.use(function(req,res){
    res.status(404).send("Page not found");
})

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
