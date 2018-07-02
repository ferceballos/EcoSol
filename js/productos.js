$(document).ready(() => {

    function injectinfo() {

        var panels = [{
            name: 'seraphim360',
            brand: 'Seraphim',
            power: '360',
            img: 'cover.png',
            logo: 'seraphim.png'
        }];

        var cards = "";

        var seraphim360 = {
            name: 'seraphim360',
            brand: 'Linuo',
            power: '360',
            img: 'cover.png',
            logo: 'linuo.png'
        }

        panels.push(seraphim360);

        panels.forEach(e => {
            cards += '<div class="col m4 gridbrick" data-groups=\'["' + e.brand + '"]\' data-title="320">' +
                '                        <div class="card">' +
                '                            <div class="card-image">' +
                '                                <img src="img/paneles/' + e.img + '" class="responsive-img" alt="">' +
                '                                <span class="card-title"></span>' +
                '                            </div>' +
                '' +
                '                            <div class="card-action">' +
                '                                <div class="card-action">' +
                '                                    <div class="row center valign-wrapper no-gapb">' +
                '                                        <div class="col s6">' +
                '                                            <p class="grey-text text-darken-2">' + e.power + ' Watts</p>' +
                '                                        </div>' +
                '' +
                '                                        <div class="col s6 valign-wrapper">' +
                '                                            <img class="responsive-img card-logo" src="img/logos/' + e.logo + '" alt="">' +
                '                                        </div>' +
                '                                    </div>' +
                '                                </div>' +
                '                            </div>' +
                '                        </div>' +
                '                    </div>';
        });


        console.log("Array: " + panels);
        console.log("Cards: " + cards);

        $("#cards").html(cards);


    }

    injectinfo();

    var elem = document.querySelector('.dropdown-trigger');
    var instance = M.Dropdown.init(elem, { alignment: 'left', constrainWidth: false, coverTrigger: false, hover: true, autoTrigger: false });

    let duration = 180;
    let radius = ['0em', '10em'];

    /* Animations */
    var panel = anime({
        targets: '.panelimg',
        opacity: .8,
        borderRadius: radius,
        easing: 'easeInOutQuad',
        scale: 0.6,
        duration: duration,
    });

    var calentador = anime({
        targets: '.calentadorimg',
        opacity: .8,
        borderRadius: radius,
        easing: 'easeInOutQuad',
        scale: 0.6,
        duration: duration,
    });

    var inversor = anime({
        targets: '.inversorimg',
        opacity: .8,
        borderRadius: radius,
        easing: 'easeInOutQuad',
        scale: 0.6,
        duration: duration,
    });

    /*
    panel.pause();
    panel.reverse(); 
    calentador.pause();
    calentador.reverse(); 
    inversor.pause();
    inversor.reverse(); 
    */

    $("#panel").mouseenter(() => {
        panel.play();
        panel.reverse();
    });

    $("#panel").mouseleave(() => {
        panel.play();
        panel.reverse();
    });

    $("#calentador").mouseenter(() => {
        calentador.play();
        calentador.reverse();
    });

    $("#calentador").mouseleave(() => {
        calentador.play();
        calentador.reverse();
    });

    $("#inversor").mouseenter(() => {
        inversor.play();
        inversor.reverse();
    });

    $("#inversor").mouseleave(() => {
        inversor.play();
        inversor.reverse();
    });




    var Shuffle = window.Shuffle;

    window.shuffleInstance = new window.Shuffle(document.getElementById('cards'), {
        itemSelector: '.gridbrick',
        sizer: '.sizer',
    });


    var shipturflag = false;

    $("#seraphim").click(() => {
        shipturflag ? shuffleInstance.filter() : shuffleInstance.filter('Seraphim');
        shipturflag ? $("#seraphim").removeClass('active-brand') : $("#seraphim").addClass('active-brand');
        //shipturflag ? $("#seraphim").addClass('active-brand'): $("#seraphim").removeClass('active-brand');


        shipturflag = !shipturflag;
    });
});
