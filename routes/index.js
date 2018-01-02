var express = require('express');
var router = express.Router();
var fs = require('fs');

// login page

router.get("/",function(req,res,next){

  res.render("auth/login",{title:"ورود"});

})

router.post("/",function(req,res,next){

  var datas = fs.readFileSync("./datas/auth.json");

  datas = JSON.parse(datas);
  
    for(let item of datas){
      
      if(item.username.toLowerCase() == req.body.username.toLowerCase() && item.password == req.body.password){
        return res.send(JSON.stringify({"status":1}));
      }
    }
  
     return res.send(JSON.stringify({"status":-1}))

})

module.exports = router;
