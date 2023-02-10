$(function () {

    var mixer = mixitup('.directions-list');

    $('.directions-fillter_btn').on('click', function () {
    $('.directions-fillter_btn').removeClass('directions-fillter_btn--active')
    $(this).addClass('directions-fillter_btn--active')
    })


    $('.team_slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
       
    })
})
