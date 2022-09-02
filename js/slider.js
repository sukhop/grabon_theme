$(function () {
    $('.single-item').slick({
        arrows: false,
        autoplay: true
    });
    $('.store_slider').slick({
        arrows: false,
        autoplay: true,
        dots: true
    });
    $('.review_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.more_detail').on('click', () => {
        overlayToggle();
    });
    $('.overlay_close').on('click', () => {
        overlayToggle();
    });
    function overlayToggle() {
        $('.detail_overlay').toggleClass('active');
    }
    $('.offer_details').on('click', () => {
        offerOverlayToggle();
    });
    $('.offer-overlay_close').on('click', () => {
        offerOverlayToggle();
    });
    function offerOverlayToggle() {
        $('.offer-detail_overlay').toggleClass('active');
    } 
});