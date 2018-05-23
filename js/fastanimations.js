/* We hide the elements to be animated; so they don't show until the animation starts */
$(document).ready(() => {
    $('.logo .el').invisible();
    $('#benefits').invisible();
});

/* Animations go on load (after all DOM and graphics are loaded) to make them run smoother; 
if we were using a lot more resources and the loading time were bigger i would use another method, but this one works just perfect */
$(window).on('load', () => {

    /* Flags and other setup varaibles */
    let contact = false;
    let brands = false;
    let benefits = false;

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

    $('.scrollspy').scrollSpy(
        {
            getActiveElement: (id) => {
                if (id == "contact" && !contact) {
                    console.log(id);

                    var contactInfo = anime({
                        targets: '.fadedIn .el',
                        translateX: [200, 0],
                        opacity: [0, 1],
                        easing: 'easeInOutQuad',
                        delay: function (el, i) { return 400 + (i * 140); },
                    });

                    var map = anime({
                        targets: '.map',
                        translateY: [200, 0],
                        opacity: [0, 1],
                        easing: 'easeInOutQuad',
                        delay: 300
                    });

                    contact = true;
                }

                else if (checkVisible($("#marcas"), "visible") && !brands) {
                    $('.logo .el').visible();

                    var logos = anime({
                        targets: '.logosanime .logo .el',
                        translateY: [100, 0],
                        opacity: [0, 1],
                        easing: 'easeInOutExpo',
                        delay: function (el, i) { return 100 + (i * 140); },
                    });

                    brands = true;
                }

                else if (checkVisible($("#benefits"), "visible") && !benefits) {

                    $('#benefits').visible();

                    var bentitles = anime({
                        targets: '.benefitstitle',
                        translateY: [100, 0],
                        opacity: [0, 1],
                        easing: 'easeInOutQuad',
                        delay: function (benefitstitle, i) { return 0 + (i * 140); },
                    });

                    var logos = anime({
                        targets: '.benefits',
                        translateY: [100, 0],
                        opacity: [0, 1],
                        easing: 'easeInOutExpo',
                        delay: function (benefits, i) { return 280 + (i * 140); },
                    });

                    benefits = true;
                }
            }
        }
    );
})

