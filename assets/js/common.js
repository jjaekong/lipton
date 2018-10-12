(function($) {
    
    $(window).on("scroll", function() {
        ($(this).scrollTop() > 0)
            ? $('body').addClass('scrolled')
            : $('body').removeClass('scrolled');
    });
    
    $(window).on('load', function() {
        $("html, body").removeClass("loading");
        $("#loading").hide();
    });
    
})(jQuery);