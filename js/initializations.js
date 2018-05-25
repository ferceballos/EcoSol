$(document).ready(
    function () {
        var elem = document.querySelector('.slider');
        var instance = M.Slider.init(elem, { indicators: false, interval: 7000 });

        var elem = document.querySelector('.collapsible');
        var instance = M.Collapsible.init(elem, {});

        $('#collapsibleTwo').collapsible();

        var elem = document.querySelector('.collapsibleTwo');
        var instance = M.Collapsible.init(elem, {});

        var elem = document.querySelector('.dropdown-trigger');
        var instance = M.Dropdown.init(elem, { alignment: 'left', constrainWidth: false, coverTrigger: false, hover: true });
    
        $("#whats").hover(function handlerIn() {

        }, function handlerOut() { });
    }
)

