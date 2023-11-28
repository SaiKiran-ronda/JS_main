const http = require("http");
const fs =require("fs");
const url = require("url");
const calculator = require("./calc.js");

let server=http.createServer(function(req,res){
  //req.url
let requrl=req.url
console.log('request recevied>>>>>>>',requrl)

if(requrl.includes("index.html")){
  fs.readFile("index.html","utf8",function(err,data){
  res.writeHead(200,{"content-text":"text/html"})
  res.write(data);
  res.end();
  })
}
else if(requrl.includes("main.js")){
  fs.readFile("min.js","utf8",function(err,data){
res.writeHead(200,{"context-text":type/plain})
res.write(data);
res.end();
  })
}
else if(requrl.includes("./calc.js")){
let query=url.parse(requrl,true).query
var queryjson=JSON.stringify(query);
var queryJsonObj=JSON.parse(queryJson)
console.log(queryJsonObj)
let ans=calculator(queryJsonObj.operation,pasteInt(queryJsonObj.x),parseInt(queryJsonObj.y))
res.writeHead(200,{"context-text":type/plain})
res.write(data);
res.end();
}



})


server.listen(4040)
