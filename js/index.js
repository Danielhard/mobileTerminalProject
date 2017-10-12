(function(){
  // 利用swiper制作首页banner
  var mySwiper = new Swiper('.swiper-container', {
    // 自动播放
    autoplay: 6000,
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination'
  })

  // 底部导航的js代码,点击那个跳转到哪一页并改变相应的li的样式
  $('.index-nav-list').each(function(i,item){
    $(item).on('click',function(){
      $(this).addClass('selected').siblings().removeClass('selected');
    })
  });

  //判断是否登录，有则跳转个人中心，没有则返回登陆
  $('.personalCenter').on('touchstart',function () {
      if(localStorage.username) {
           location.href = 'personalCenter.html';
      } else{
           location.href='login.html';
     }
   })
    $('.search-box').on('touchstart',function () {
        location.href='searchPage.html';
    })


  })();