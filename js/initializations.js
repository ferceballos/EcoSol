var elem = document.querySelector('.slider');
var instance = M.Slider.init(elem, { indicators: false, interval: 7000 });

var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem, {});


$('#collapsibleTwo').collapsible();

var elem = document.querySelector('.collapsibleTwo');
var instance = M.Collapsible.init(elem, {});

var elem = document.querySelector('.panel1');
var instance = M.Materialbox.init(elem, {});

var elem = document.querySelector('.panel2');
var instance = M.Materialbox.init(elem, {});

var elem = document.querySelector('.panel3');
var instance = M.Materialbox.init(elem, {});

var elem = document.querySelector('.panel4');
var instance = M.Materialbox.init(elem, {});

var elem = document.querySelector('.panel5');
var instance = M.Materialbox.init(elem, {});

var elem = document.querySelector('.dropdown-trigger');
var instance = M.Dropdown.init(elem, { alignment: 'left', constrainWidth: false, coverTrigger: false, hover: true });

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {
        getActiveElement: function (id) {
            if (id == "contact") {
                console.log(id);
                var whats = anime({
                    targets: '#whats input',
                    value: 3121660489,
                    round: 1,
                    easing: 'easeInOutExpo',
                    duration: 2000
                });

                var phone = anime({
                    targets: '#phone input',
                    value: 3123254888,
                    round: 1,
                    easing: 'easeInOutExpo',
                    duration: 2500
                });

                var phone = anime({
                    targets: '#face input',
                    value: "EcoSol",
                    round: 1,
                    easing: 'easeInOutExpo',
                    duration: 2500
                });

            }

            else {
                console.log(id)
            }
            return 'a[href="#' + id + '"]';
        }
    });
});


