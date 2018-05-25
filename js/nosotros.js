$(document).ready(
    function () {
        $('#gallery').slick({
            infinite: true,
            dots: true,
            slidesToShow: 5,
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
            centerPadding: true,
            initialSlide: 4
        });
    }
)