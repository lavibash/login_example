var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.sendfile("index.html");
});

app.post('/login',function(req,res){
 var user_name=req.body.user;
 var password = req.body.pass;
 console.log("From client post request: User name = "+user_name+" and password is "+password);
 res.end("yes")
})


app.listen(3000,function(){
    console.log("Started on PORT 3000");
})