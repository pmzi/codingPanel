$(window).on("load",function(){
    //for question`s bottom proBar
    $("#rtSideBar>ul>li").mouseenter(function(){
        $(this).find(".proBar").css({"width":"100%"});
    })

    $("#rtSideBar>ul>li").mouseleave(function(){
        $(this).find(".proBar").css({"width":"0px"});
    })

})