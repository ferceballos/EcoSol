$(document).ready(function () {

    // Navbar dropdown
    var elem = document.querySelector('.dropdown-trigger');
    var instance = M.Dropdown.init(elem, { alignment: 'left', constrainWidth: false, coverTrigger: false, hover: true, autoTrigger: false });

    // Gallery options
    $('#gallery').slick({
        infinite: true,
        dots: false,
        slidesToShow: 4,
        swipeToSlide: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<a class="left-button btn-floating btn-small waves-effect waves-light orange darken-1"><i class="material-icons">chevron_left</i></a>',
        nextArrow: '<a class="right-button btn-floating btn-small waves-effect waves-light orange darken-1"><i class="material-icons">chevron_right</i></a>',
        centerMode: true,
        focusOnSelect: false,
        pauseOnHover: true,
        initialSlide: 0
    });

    // Parallax init
    $('.parallax').parallax();
});