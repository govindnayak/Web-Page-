var express=require("express");
var app=express();

app.listen(3000, function(err){
  console.log("Hey");
})

app.get("/", function(req, res){
  res.sendFile("/home/nayak/Desktop/Web Page/index.html");
})
