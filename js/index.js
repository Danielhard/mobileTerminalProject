(function(){
  // 利用swiper制作首页banner
  var mySwiper = new Swiper('.swiper-container', {
    // 自动播放
    autoplay: 6000,
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination'
  });


  // 首页热门商品数据请求
  var page = 1;      // 初始时请求第一页的数据
  var canadd = false;
  function fetHotProductMethod(page,pagesize){
    $$.Ajax.fetchHotProduct(page,pagesize,function(data){
      var dataArr = data['data'];
      for(var i = 0; i < dataArr.length; i ++){
        console.log(dataArr[i]);
        $("#pro-list").append($$.createDom(dataArr[i]));
      }
      canadd = true;
    });
  }
  fetHotProductMethod();
  $(window).on('scroll',function(event){

    if(!canadd){
      return ;
    }
    // 利用文档的高度减去屏幕高度获取到滚动体可以滚动的最大高度
    var maxHeight = $(document).height() - $(window).height();
    event.preventDefault();
    var nowHeight = $(document).scrollTop();

    if(nowHeight / maxHeight >= 0.8) {
      console.log(page);
      page ++ ;
      fetHotProductMethod(page,20);
      canadd = false;
    }
  });


  // 底部导航的js代码,点击那个跳转到哪一页并改变相应的li的样式,并进行相应的页面跳转
  $('.index-nav-list').each(function(i,item){
    $(item).on('touchstart',function(){

      // 改变li样式
      $(this).addClass('selected').siblings().removeClass('selected');
    })
  });
})();