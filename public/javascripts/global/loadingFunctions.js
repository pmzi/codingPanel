//hide loading on page finish loading
$(window).on("load",function(){
    $("#mainLoading").slideUp(500);
})

// ajax loading hide/show functions

window.showLoading = ()=>{
    $("#ajaxLoading").fadeIn(500);
    $("#wrapper").addClass("loadingBlur");
}

window.hideLoading = ()=>{
    $("#ajaxLoading").fadeOut(500);
    $("#wrapper").removeClass("loadingBlur");
}