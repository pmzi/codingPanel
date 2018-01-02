$(function() {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });
})

$(window).on("scroll load", function () {
    
    /* Every time the window is scrolled ... */

    /* Check the location of each desired element */
    $('[data-animation]').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height()+200;
        var top_of_window = $(window).scrollTop()-200;
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object && top_of_window < bottom_of_object) {


            $(this).css({"opacity":"100"}).animateCss($(this).attr("data-animation")).removeAttr("data-animation");

        }

    });

    
    
})