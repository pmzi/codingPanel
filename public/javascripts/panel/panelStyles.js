$(window).on("load", function () {
    //for question`s bottom proBar
    $("#rtSideBar>ul>li").mouseenter(function () {
        $(this).find(".proBar").css({
            "width": "100%"
        });
    })

    $("#rtSideBar>ul>li").mouseleave(function () {
        $(this).find(".proBar").css({
            "width": "0px"
        });
    })

    //for tabs progress bar
    $(".tab").mouseenter(function () {

        $(this).find(".tabProgress").css({
            "width": "100%"
        })
    })
    $(".tab").mouseleave(function () {

        $(this).find(".tabProgress").css({
            "width": "0px"
        })
    })

    //sliding click of the tabs

    $(".tab").click(function(){
        $("#slidesCont").css({"transform":"translateX("+$(this).index() * $(".slide").width()+"px)"})
    })

})

//sliding of the main;)

$(window).on("load resize",function(){

    $(".slide,#slideCont").width(($("#mainContent").width()-30)+'px');

    $("#slidesCont").width(($(".slide").length * $(".slide").width()) + 'px');

})