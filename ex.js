const http=require('http');
const fs=require('fs');
const url = require('url');
const calc = require('./calc.js');

let server= http.createServer(function(req,res){
//    req.url
   let requrl=req.url
   console.log("request recived>>>",requrl)

   if(requrl.includes("index.html")){
   fs.readFile("index.html","utf8",function(err,data){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(data)
    res.end();
   })
}

   else if(requrl.includes("main.js")){
   fs.readFile("main.js","utf8",function(err,data){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write(data)
    res.end();
   })
   
   }

   else if(requrl.includes("/calc")){
    let query = url.parse(requrl,true).query
    var queryJosn = JSON.stringify(query);
    var queryJosnObj = JSON.parse(queryJosn);
    console.log(queryJosnObj)
   let ans= calc(queryJosnObj.operation,parseInt(queryJosnObj.x),parseInt(queryJosnObj.y))
   res.writeHead(200,{"Content-Type":"text/plain"})
   let result=JSON.stringify(ans);
   res.write(result);
   res.end();
   }
})


server.listen(8080,function(err){
    console.log("running");
})


