var express = require('express');
var router = express.Router();
var fs = require('fs');

// login page

router.get("/",function(req,res,next){

  res.render("panel/index",{title:"پنل"});

})

module.exports = router;
