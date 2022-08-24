$(function() {
    $('.single-item').slick({
        arrows: false,
        autoplay: true
    });
    $('.store_slider').slick({
        arrows: false,
        autoplay: true,
        dots: true
    });
    $('.more_detail').on('click', ()=> {
        overlayToggle();
    });
    $('.overlay_close').on('click', ()=> {
        overlayToggle();
    });
    function overlayToggle() {
        $('.detail_overlay').toggleClass('active');
    }
});