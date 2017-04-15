/*global $*/
"use strict";
// after window is loaded
var win = $(window);

// after all page is loaded
win.on("load", function () {
    $("#preloader").fadeOut(800);

});

// after document is ready functions
$(document).ready(function () {
    // caching selectors
    var mainNav = $("#main-nav"),
        navLogo = $("#nav-logo"),
        navList = $("#main-nav ul"),
        navLi = $("#main-nav ul li"),
        navlink = $("#main-nav ul li a"),
        bars = $("#bars");

    // bars icon on click
    bars.on("click", function () {
        navList.slideToggle(500);
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
    });

    // on resizing functions
    win.on("resize", function () {
        // navbar change
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
});
