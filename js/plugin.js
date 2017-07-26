$(document).ready(function() {

    $("html").niceScroll();
    // Nav-Bar
    var navItem = $(".nav .right ul li a,.nav .right ul li i,.nav .left a p ,.nav .left a p span");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 550) {
            $(".nav").css("background", "rgba(33,33,33,0.9)")
            $(".nav").css("position", "fixed")
            navItem.css("color", "white")
                //  console.log($(window).scrollTop());
        } else {
            $(".nav").css("background", "transparent")
            $(".nav").css("position", "absolute")
            navItem.css("color", "white")
        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 4770) {
            $(".nav").css("background", "rgba(255,255,255,0.9)")
            navItem.css("color", "black")
        }
    });





    // Search Animation On Click To Show Search Tab
    // And Show Hide Icon
    $(".nav-search").on("click", function() {
        $(this).fadeOut(0);
        $(".search").css({
            visibility: 'visible'
        }, 0);

        $(".search").animate({
            width: '0'
        }, 0);
        $(".search").animate({
            width: '18%'
        }, 1000);
    });
    // Search Animation On Mouse Leave To Hide Search Tab
    // And Show Search Icon
    $(".search").on("mouseleave", function() {
        $(".search").animate({
            width: '18%'
        }, 0);
        $(".search").animate({
            width: '0%'
        }, 500);
        $(".search").hide(0);
        $(".nav-search").delay(490).fadeIn();
    });

    function slider() {
        $(".img-slider:nth-child(1)").delay(10000).animate({
            opacity: '0',
        }, 2000)
        $(".img-slider:nth-child(2)").delay(20000).animate({
            opacity: '0',
        }, 2000)

        $(".img-slider:nth-child(3)").delay(30000).animate({
            opacity: '0',
        }, 2000)

        $(".img-slider:nth-child(3)").delay(40000).animate({
            opacity: '1',
        }, 1000)

        $(".img-slider:nth-child(2)").delay(41000).animate({
            opacity: '1',
        }, 1000)
        $(".img-slider:nth-child(1)").delay(42000).animate({
            opacity: '1',
        }, 1000, slider)

    }
    slider();



    $(".selector ul li").on("click", function() {
        $(this).addClass("selector-active");
        $(this).siblings().removeClass("selector-active");
    });
    /*
    $(window).on("resize", function() {

        if ($(window).width() > 1200) {
            $(".group-dropdown").on("mouseenter", function() {
                $(".search-link").slideDown(600);
            });
            $(".group-dropdown").on("mouseleave", function() {
                $(".search-link").slideUp(600);
            });
        }

    });
*/











    $(".img-one").on("mouseenter", function() {
        $(".content-one").slideDown(500);
    });
    $(".img-one").on("mouseleave", function() {
        $(".content-one").slideUp(500);
    });



    $(".img-two").on("mouseenter", function() {
        $(".content-two").slideDown(500);
    });
    $(".img-two").on("mouseleave", function() {
        $(".content-two").slideUp(500);
    });


    $(".img-three").on("mouseenter", function() {
        $(".content-three").slideDown(500);
    });
    $(".img-three").on("mouseleave", function() {
        $(".content-three").slideUp(500);
    });


    $(".img-four").on("mouseenter", function() {
        $(".content-four").slideDown(500);
    });
    $(".img-four").on("mouseleave", function() {
        $(".content-four").slideUp(500);
    });
    /* Progress Bar Animate 
        $(".skills-progress section:nth-child(1) .progress div").on("click", function() {
            $(this).animate({
                width: '0',
            }, 10)
            $(this).animate({
                width: '20%',
            }, 500)

            $(this).animate({
                width: '40%',
            }, 1500)
            $(this).animate({
                width: '55%',
            }, 100)
            $(this).animate({
                width: '70%',
            }, 300)
            $(this).animate({
                width: '80%',
            }, 500)
            $(this).animate({
                width: "95%",
            }, 900)
        });
        */
    /* Will Use To Animate Progress Bar 
    $(window).on("scroll", function() {
        console.log($(window).scrollTop());
    }); 
    */



    /* To Change Tweet Color 
        $(".latest-tweet p").on("mouseenter", function() {
            $(".latest-tweet p .fa").css("color", "#c77a08")
            $(".latest-tweet p span:nth-of-type(1)").css("color", "#c77a08")
        });

        $(".latest-tweet p").on("mouseleave", function() {
            $(".latest-tweet p .fa").css("color", "#fff")
            $(".latest-tweet p span:nth-of-type(1)").css("color", "#fff")
        });
    */




    /* Fit Text
    $(".news-images div p").fitText(1, {
            minFontSize: '13px',
            maxFontSize: '17px'
        });
        $(".latest-news p ").fitText(2.5, {
            minFontSize: '13px',
            maxFontSize: '16px'
        });
    */




    $(".footer .footer-tabs ul li").on("click", function() {
        $(this).addClass("footer-active")
        $(this).siblings().removeClass("footer-active")
    });

    /*
        $(".web-specification").css({
            top: $(".header").height()
        });
        var offset = $(".web-specification").position();
        $(".our-portfolio").css({
            top: offset.top,
        });
    */



    /*
        $(".web-specification div:even").css({
            backgroundColor: '#f0fafe',
        });
    */
});