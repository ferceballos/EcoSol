$(document).ready(() => {

    /* Flags and other setup varaibles */
    var products = false;

    $("#products-wrapper").invisible();

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
        if (checkVisible($("#products-wrapper"), "visible") && !products) {
            $("#products-wrapper").visible();

            var letters = anime({
                targets: '.productsheader',
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                delay: function (productsheader, i) { return 200 + (i * 200); },
            });


            var productsAnimation = anime({
                targets: '.products',
                translateY: [60, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                delay: function (products, i) { return 800 + (i * 200); },
            });

            products = true;
        }
    }

    checkWindow();



    $(window).scroll(() => {
        checkWindow();
    });


    $(".ps").mouseenter((e) => {
        console.log(e.clientX, e.clientY)
    })

})

