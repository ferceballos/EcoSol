$(document).ready(() => {

    function injectinfo() {

        var cards = "";

        var panels = [{
            brand: 'Seraphim',
            power: '320',
            img: 'seraphim.jpg',
            logo: 'seraphim.png'
        }];

        /* Seraphim */

        var seraphim270 = {
            brand: 'Seraphim',
            power: '270',
            img: 'seraphim.jpg',
            logo: 'seraphim.png'
        }
        panels.push(seraphim270);


        /* QXPV */

        var qxpv320 = {
            brand: 'QXPV',
            power: '320',
            img: 'qxpv.jpg',
            logo: 'QXPV.jpg'
        }
        panels.push(qxpv320);

        var qxpv270 = {
            brand: 'QXPV',
            power: '270',
            img: 'qxpv.jpg',
            logo: 'QXPV.jpg'
        }
        panels.push(qxpv270);

        /* Jinko */

        var jinko340 = {
            brand: 'Jinko',
            power: '340',
            img: 'jinko.jpg',
            logo: 'jinko.png'
        }
        panels.push(jinko340);

        var jinko325 = {
            brand: 'Jinko',
            power: '325',
            img: 'jinko.jpg',
            logo: 'jinko.png'
        }
        panels.push(jinko325);

        var jinko320 = {
            brand: 'Jinko',
            power: '320',
            img: 'jinko.jpg',
            logo: 'jinko.png'
        }
        panels.push(jinko320);

        var jinko270 = {
            brand: 'Jinko',
            power: '270',
            img: 'jinko.jpg',
            logo: 'jinko.png'
        }

        panels.push(jinko270);

        panels.forEach(e => {
            cards += '<div class="col m4 gridbrick" data-groups=\'["' + e.brand + '"]\' data-title="320">' +
                '                        <div class="card hoverable">' +
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

        $("#cards").html(cards);
    }

    injectinfo();

    var elem = document.querySelector('.dropdown-trigger');
    var instance = M.Dropdown.init(elem, { alignment: 'left', constrainWidth: false, coverTrigger: false, hover: true, autoTrigger: false });

    var Shuffle = window.Shuffle;
    var seraphimflag = false;
    var qxpvflag = false;
    var jinkoflag = false;

    window.shuffleInstance = new window.Shuffle(document.getElementById('cards'), {
        itemSelector: '.gridbrick',
        sizer: '.sizer',
    });

    $("#seraphim").click(() => {
        qxpvflag = false;
        jinkoflag = false;
        $("#QXPV").removeClass("active-brand");
        $("#Jinko").removeClass("active-brand");
        seraphimflag ? shuffleInstance.filter() : shuffleInstance.filter('Seraphim');
        seraphimflag ? $("#seraphim").removeClass('active-brand') : $("#seraphim").addClass('active-brand');
        seraphimflag = !seraphimflag;
    });

    $("#QXPV").click(() => {
        seraphimflag = false;
        jinkoflag = false;
        $("#seraphim").removeClass("active-brand");
        $("#Jinko").removeClass("active-brand");
        qxpvflag ? shuffleInstance.filter() : shuffleInstance.filter('QXPV');
        qxpvflag ? $("#QXPV").removeClass('active-brand') : $("#QXPV").addClass('active-brand');
        qxpvflag = !qxpvflag;
    });

    $("#Jinko").click(() => {
        qxpvflag = false;
        seraphimflag = false;
        $("#seraphim").removeClass("active-brand");
        $("#QXPV").removeClass("active-brand");
        jinkoflag ? shuffleInstance.filter() : shuffleInstance.filter('Jinko');
        jinkoflag ? $("#Jinko").removeClass('active-brand') : $("#Jinko").addClass('active-brand');
        jinkoflag = !jinkoflag;
    });
});
