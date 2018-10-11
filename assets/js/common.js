(function($) {
    
    $(window).on("scroll", function() {
        ($(this).scrollTop() > 0)
            ? $('body').addClass('scrolled')
            : $('body').removeClass('scrolled')
    });
    
})(jQuery);