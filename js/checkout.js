jQuery(function ($) {
    var xiaoji = localStorage.cartgoods_sum
    $('.checkout_xiaoji').html('' + xiaoji + '')
    var yingfu = xiaoji - 50
    $('.checkout_yingfu').html('' + yingfu + '.00')
    var heji = $('.checkout_yingfu').html()
    $('.checkout_heji').html('' + heji + '')
})