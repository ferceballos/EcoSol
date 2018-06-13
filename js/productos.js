$(document).ready(() => {

    /* Flags and other setup varaibles */
    var products = false;
    var InversorAnimation = anime.timeline();

    InversorAnimation
        .add({
            targets: '#inversorpan',
            backgroundColor: '#AFF8DB',
            easing: 'easeInOutQuart',
            translateY: [-100, 0],
            elasticity: 200,
            duration: 300
        })
        .add({
            targets: '#inverButton',
            rotate: {
                value: 180,
                duration: 100,
                easing: 'easeInOutSine'
            }
        })
        ;

    InversorAnimation.pause();
    InversorAnimation.reverse();


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

    $("#inversors").mouseenter(() => {
        console.log("enter");
        InversorAnimation.play();
        InversorAnimation.reverse();
    })

    $("#inversors").mouseleave(() => {
        console.log("leave");
        InversorAnimation.play();
        InversorAnimation.reverse();


    })


    $(".ps").mouseenter((e) => {
        console.log(e.clientX, e.clientY)
    })

})

