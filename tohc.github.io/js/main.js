(function ($) {

    "use strict"; // Start of use strict

    //to smooth scroll and keep track of location
    $(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
                // Store hash
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500,
                    function () {
                    // ADD HASH
                        window.location.hash = hash;
                    });
            } // End if
        });

    });

    // Scrollspy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    //Closes responsive menu when something else is clicked
    $(document).click(function (event) {
        var clickover = $(event.target),
            $navbar = $(".navbar-collapse"),
            opened = $navbar.hasClass("in");
        if (opened === true && !clickover.hasClass("navbar-toggle")) {
            $navbar.collapse('hide');
        }

    });

})(jQuery); // End of use