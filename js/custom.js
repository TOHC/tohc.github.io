/*global $ */
"use strict";
var win = $(window),
    doc = $(document);

// after all page is loaded
win.on("load", function () {

    $("#preloader").fadeOut(800, function () {
        $("#name").typed({
            strings: ["toronto hacker club"],
            typeSpeed: 50,
            showCursor: false,
            callback: function () {
                $("#job").typed({
                    strings: ["web &amp; graphic designer"],
                    typeSpeed: 30,
                    showCursor: false,
                    callback: function () {
                        $("#b-portfolio").css({
                            opacity: 1
                        });
                        $("#b-contact").css({
                            opacity: 1
                        });
                    }
                });
            }
        });

    });

});
// after document is ready
doc.ready(function () {
    var flag1 = 0,
        flag2 = 0,
        htmlBody = $("html, body"),
        about = $("#about"),
        services = $("#services"),
        portfolio = $("#portfolio"),
        team = $("#team"),
        blogs = $("#blogs"),
        pricing = $("#pricing"),
        contact = $("#contact"),
        mainNav = $("#main-nav"),
        navLogo = $("#nav-logo"),
        navList = $("#main-nav ul"),
        navLi = $("#main-nav ul li"),
        navlink = $("#main-nav ul li a"),
        navLink1 = $("#main-nav ul li:nth-of-type(1)"),
        navLink2 = $("#main-nav ul li:nth-of-type(2)"),
        navLink3 = $("#main-nav ul li:nth-of-type(3)"),
        navLink4 = $("#main-nav ul li:nth-of-type(4)"),
        navLink5 = $("#main-nav ul li:nth-of-type(5)"),
        navLink6 = $("#main-nav ul li:nth-of-type(6)"),
        navLink7 = $("#main-nav ul li:nth-of-type(7)"),
        navLink8 = $("#main-nav ul li:nth-of-type(8)"),
        bars = $("#bars"),
        toTopButton = $("#to-top");

    // trigger mixitup library
    $("#portfolio").mixItUp({
        activeClass: 'on'
    });
    // nav bar links on click
    navLink1.on("click", function () {
        htmlBody.animate({
			scrollTop: 0
		}, 600);
    });

    navLink2.on("click", function () {
        htmlBody.animate({
			scrollTop: about.offset().top - 65
		}, 600);
    });

    /*navLink3.on("click", function () {
        htmlBody.animate({
			scrollTop: services.offset().top - 65
		}, 600);
    });*/

    navLink4.on("click", function () {
        htmlBody.animate({
			scrollTop: portfolio.offset().top - 65
		}, 600);
    });

    navLink5.on("click", function () {
        htmlBody.animate({
			scrollTop: team.offset().top - 65
		}, 600);
    });

    /*navLink6.on("click", function () {
        htmlBody.animate({
			scrollTop: blogs.offset().top - 65
		}, 600);
    });*/

    navLink7.on("click", function () {
        htmlBody.animate({
			scrollTop: pricing.offset().top - 64
		}, 600);
    });

    navLink8.on("click", function () {
        htmlBody.animate({
			scrollTop: contact.offset().top - 64
		}, 600);
    });
    // down icon on click
    $("#down-icon").on("click", function () {
        htmlBody.animate({
			scrollTop: about.offset().top - 65
		}, 800);
    });

    //header buttons on click
    $("#b-portfolio").on("click", function () {
        htmlBody.animate({
			scrollTop: portfolio.offset().top - 65
		}, 800);
    });

    $("#b-contact").on("click", function () {
        htmlBody.animate({
			scrollTop: contact.offset().top - 64
		}, 800);
    });


    // bars icon on click
    bars.on("click", function () {
        navList.slideToggle(500);
    });

    // work with me button on click
    $("#work-wz-me").on("click", function () {
        htmlBody.animate({
			scrollTop: contact.offset().top - 64
		}, 800);
    });

    // to top button on click
    toTopButton.on("click", function () {
        htmlBody.animate({
			scrollTop: 0
		}, 800);
    });

    // on scrolling functions
    win.on("scroll", function () {

        //navbar background change
        if (win.scrollTop() >= 100) {
            mainNav.css({
                backgroundColor: "rgba(25, 25, 25, 0.95)",
                height: '65px',
                lineHeight: '65px'
            });
            navLogo.css("height", "35px");
            if (bars.css("display") === "none") {
                navList.css("height", "65px");
                navLi.css("height", "65px");
                navlink.css({
                    height: "65px",
                    lineHeight: "65px"
                });
            }
            bars.css({
                lineHeight: "65px"
            });
        } else {
            mainNav.css({
                backgroundColor: "transparent",
                height: '75px',
                lineHeight: '75px'
            });
            navLogo.css("height", "40px");
            if (bars.css("display") === "none") {
                navList.css("height", "75px");
                navLi.css("height", "75px");
                navlink.css({
                    height: "75px",
                    lineHeight: "75px"
                });
            }
            bars.css({
                lineHeight: "75px"
            });
        }

        // navbar active link
        if (win.scrollTop() < about.offset().top - 66) {
            navLink1.addClass("active").siblings().removeClass("active");
        }

        if (win.scrollTop() >= about.offset().top - 66) {
            navLink2.addClass("active").siblings().removeClass("active");
        }

        /*if (win.scrollTop() >= services.offset().top - 66) {
            navLink3.addClass("active").siblings().removeClass("active");
        }*/

        if (win.scrollTop() >= portfolio.offset().top - 66) {
            navLink4.addClass("active").siblings().removeClass("active");
        }

        if (win.scrollTop() >= team.offset().top - 66) {
            navLink5.addClass("active").siblings().removeClass("active");
        }

        /*if (win.scrollTop() >= blogs.offset().top - 66) {
            navLink6.addClass("active").siblings().removeClass("active");
        }*/

        if (win.scrollTop() >= pricing.offset().top - 66) {
            navLink7.addClass("active").siblings().removeClass("active");
        }

        if (win.scrollTop() >= contact.offset().top - 66) {
            navLink8.addClass("active").siblings().removeClass("active");
        }

        // skills section animation
        /*if (win.scrollTop() >= $("#skills").offset().top - 250 && flag1 === 0) {
            $("#s-html").stop(700).animate({
                width: '95%'
            }, 700);
            $("#s-javascript").stop(700).animate({
                width: '80%'
            }, 700);
            $("#s-jquery").stop(700).animate({
                width: '85%'
            }, 700);
            $("#s-bootstrap").stop(700).animate({
                width: '75%'
            }, 700);
            $("#s-photoshop").stop(700).animate({
                width: '95%'
            }, 700);
            $("#s-marketing").stop(700).animate({
                width: '80%'
            }, 700);
        }*/

        // statistics section counting
        if (win.scrollTop() >= $("#statistics").offset().top - 200 && flag2 === 0) {
            $('#num-of-hackathons').countTo({
                from: 0,
                to: 4,
                speed: 500
            });

            $('#num-of-workshops').countTo({
                from: 0,
                to: 3,
                speed: 500
            });

            $('#num-of-schools').countTo({
                from: 0,
                to: 30,
                speed: 500
            });

            $('#num-of-members').countTo({
                from: 0,
                to: 500,
                speed: 500
            });
            flag2 = 1;
        }

        // about section animations
        if (win.scrollTop() >= about.offset().top - 200) {
            $("#about .about-left .card img").css("transform", "rotate(0deg)");
        }



        // to top button
        if (win.scrollTop() >= 500) {
            toTopButton.css({
                opacity: 1,
                right: 20
            });
        } else {
            toTopButton.css({
                opacity: 0,
                right: -50
            });
        }
    });

    // on resizing functions
    win.on("resize", function () {
        if (bars.css("display") === "block") {
            navList.css({
                height: "auto",
                display: "none"
            });
            navLi.css({
                height: "38px",
                lineHeight: "38px"
            });
            navlink.css({
                height: "38px",
                lineHeight: "38px"
            });
        } else {
            if (win.scrollTop() >= 100) {
                navList.css({
                    height: "65px",
                    display: "block"
                });
                navLi.css({
                    height: "65px",
                    lineHeight: "65px"
                });
                navlink.css({
                    height: "65px",
                    lineHeight: "65px"
                });
            } else {
                navList.css({
                    height: "75px",
                    display: "block"
                });
                navLi.css({
                    height: "75px",
                    lineHeight: "75px"
                });
                navlink.css({
                    height: "75px",
                    lineHeight: "75px"
                });
            }
        }
    });


    // magnific popup trigger

    $('.popup-link').magnificPopup({
        type: 'inline'
    });

    // trigger owl coursel slider for team section
	$("#team-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 3,
        loop: true,
        autoplay: true,
		autoplayTimeout : 3500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            }
        }
	});

    // trigger owl coursel slider for blogs section
	/*$("#blogs-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            690: {
                items: 2
            },
            992: {
                items: 3
            }
        }
	});

    // trigger owl coursel slider for testimonials
	$("#comments").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 1,
        loop: true,
        autoplay: true,
		autoplayTimeout : 3500
	});*/

    // trigger owl coursel slider for partners
	$("#partners-slider").owlCarousel({
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 5,
        loop: true,
        autoplay: true,
		autoplayTimeout : 2800,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            327: {
                items: 2
            },
            619: {
                items: 3
            },
            941: {
                items: 4
            },
            1119: {
                items: 5
            }
        }
	});

    // play video
    $("#play-button").on("click", function () {
        $("#video-playing").fadeIn(500);
    });

    // exit video
    $("#exit-video").on("click", function () {
        $("#video-playing").fadeOut(500);
        // stop video when exit
        $('#vid')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });

    //exit video using esc
    doc.keyup(function (e) {
        if (e.keyCode === 27) {
            $("#video-playing").fadeOut(500);
            // stop video when exit
            $('#vid')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        }
    });

    //trigger parallax
    $('.parallax-window').parallax({
        speed: .5
    });
});
