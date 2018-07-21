$(document).ready(function () {
    var power = $('input:radio[name=sunpower]:checked').val();
    var voltage = 0;
    comusage = 0;
    var activeinversor = true;
    var usedenergy = 0;

    //setup slider
    noUiSlider.create(slider, {
        start: [0, 0],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
            'min': -100,
            'max': 100
        },
        format: wNumb({
            decimals: 0
        }),
        // Show a scale with the slider
        pips: {
            mode: 'positions',
            values: [0, 50, 100],
            density: 4,
            format: wNumb({
                decimals: 0,
                suffix: '%'
            })

        },
        tooltips: [true, true],

    });


    $("input:radio").click(function () {
        checkPower();
    })

    checkPower();




    // To disable
    //slider.setAttribute('disabled', true);




    $('#80').click(function () {
        slider.noUiSlider.set([0, 80]);
    })



    function checkPower() {


        power = $('input:radio[name=sunpower]:checked').val();

        if (power == 0) {
            console.log("Power is 0");
            voltage = 0;
            $('#sun').html('<img src="img/animation/moon.svg" class="powersvg-sm center-block" alt="">')
            $('#voltage').html(voltage);
        }

        else if (power == 1) {
            console.log("Power is 1");
            voltage = 1500;
            $('#sun').html('<img src="img/animation/p1.svg" class="powersvg center-block" alt="">')
            $('#voltage').html(voltage);
        }

        else if (power == 2) {
            console.log("Power is 2");
            voltage = 3000;
            $('#sun').html('<img src="img/animation/p23.svg" class="powersvg-sm center-block" alt="">')
            $('#voltage').html(voltage);
        }

        else if (power == 3) {
            console.log("Power is 3");
            voltage = 4600;
            $('#sun').html('<img src="img/animation/p23.svg" class="powersvg center-block" alt="">')
            $('#voltage').html(voltage);
        }

        comusage = ((voltage - usedenergy) * 100) / 4600;
        console.log(comusage);
        slider.noUiSlider.set([comusage, 0]);
        slider.noUiSlider.set([0, comusage]);

        $('#comission').hover(function () {
            if (comusage < 0) {
                $(".noUi-handle-lower").addClass('noUi-active');
            }

            else {
                $(".noUi-handle-upper").addClass('noUi-active');
            }
        }, function () {
            if (comusage < 0) {
                $(".noUi-handle-lower").removeClass('noUi-active');
            }

            else {
                $(".noUi-handle-upper").removeClass('noUi-active');
            }
        })



    }

});