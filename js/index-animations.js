$(document).ready(() => {

    /* Flags and other setup varaibles */
    let contact = false;
    let brands = false;
    let benefits = false;
    var i = 0;

    $(".logo .el").invisible();
    $("#contact").invisible();

    /* Funtion to check if an element is on screen */
    function checkVisible(elm, evalType) {
        evalType = evalType || "visible";

        var vpH = $(window).height(), // Viewport Height
            st = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (evalType === "above") return ((y < (vpH + st)));
    }

    function checkWindow() {
        if (checkVisible($("#contact"), "visible") && !contact) {
            $("#contact").visible();

            var contactInfo = anime({
                targets: '.fadedIn .el',
                translateX: [200, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                delay: function (el, i) { return 0 + (i * 300); },
            });

            contact = true;
        }

        else if (checkVisible($("#marcas"), "visible") && !brands) {
            $(".logo .el").visible();

            var logos = anime({
                targets: '.logosanime .logo .el',
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                delay: function (el, i) { return 0 + (i * 200); },
            });

            brands = true;
        }

        else if (checkVisible($("#benefits"), "visible") && !benefits) {

            $('#benefits').visible();

            var bentitles = anime({
                targets: '.benefitstitle',
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                delay: function (benefitstitle, i) { return 0 + (i * 100); },
            });

            var logos = anime({
                targets: '.benefits',
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                delay: function (benefits, i) { return 200 + (i * 200); },
            });

            benefits = true;
        }
    }

    checkWindow();

    $(window).scroll(() => {
        checkWindow();
    });

    var listOfSlogans = {
        0: "Páneles solares del pacífico",
        1: "Cuidamos nuestro planeta para las futuras generaciones",
        2: "Una mejor calidad de vida a través de la energía solar",
        3: "Las chinchillas se apoderarán del universo",
        4: "Bienestar a través del ahorro y generación de energía"
    }

    var showUp = anime({
        targets: '#slogans',
        translateY: [-30, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        autoplay: false,
    });

    var goAway = anime({
        targets: '#slogans',
        translateY: [0, 30],
        opacity: [1, 0],
        easing: 'easeInOutExpo',
        autoplay: false,
        complete: function (anim) {
            $("#slogans").html(listOfSlogans[i]);
            showUp.restart();
        }
    });



    setInterval(function () {
        if (i == 4)
            i = -1;
        goAway.restart();
        i++;
    }, 5500);
})