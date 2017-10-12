var mySwiper = new Swiper(".swiper-container",{  
        direction:"horizontal",/*横向滑动*/  
        loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
        pagination:".swiper-pagination",/*分页器*/ 
        autoplay:5000/*每隔5秒自动播放*/
   }) ;
   var oShop = document.querySelector('.wuda');
   var oBlack = document.querySelector('.redcardbg');
   var oClose = document.querySelector('.close');
   var $oBlackDetail = $('.productParm');
   oShop.addEventListener('touchstart',function(){
   	oBlack.style.display = 'block';
   	$oBlackDetail.show();
   	$oBlackDetail.animate({"height":480},600);
   });
   oBlack.addEventListener('touchstart',function(){
   	$oBlackDetail.animate({"height":0},600);
   	setTimeout(function(){$oBlackDetail.hide();},500);
   	oBlack.style.display = 'none';
   });
   oClose.addEventListener('touchstart',function(){
   	$oBlackDetail.animate({"height":0},600);
		setTimeout(function(){$oBlackDetail.hide();},500);
   	oBlack.style.display = 'none';
   });
   
   $('.pt_list_son').each(function(i,item){
   	$(this).on('touchstart',function(){
		  $(this).addClass('ptsel').siblings().removeClass('ptsel'); 
		  $('.regular')[0].innerHTML = '颜色:' + $('.ptsel').html();
   	})
   });
   var idx = 1;
   $('.productParm .ptcon .pt_list_num .numbtn .right').on('touchstart',function(){
   	idx++;
   	$('.productParm .ptcon .pt_list_num .numbtn .center').html(idx);
   	$('.hide_price b').html(idx);
   });
   $('.productParm .ptcon .pt_list_num .numbtn .left').on('touchstart',function(){
   	idx--;
   	if (idx <= 1) {
   		idx = 1;
   	}
   	$('.productParm .ptcon .pt_list_num .numbtn .center').html(idx);
   	$('.hide_price b').html(idx);
   });
   
   
   $.getQueryString = function(name) {
     var search = location.search.substr(1);
     var reg = new RegExp('(&|^)'+name+'=([^&]*)(&|$)');
     var r = search.match(reg);
     if (r === null) return null;
     return decodeURI(r[2]);
	 };
	 var goods_id = $.getQueryString('goods_id');
   $.ajax({
    url: 'http://h6.duchengjiu.top/shop/api_goods.php',
    type: "get",
    dataType: "json",
    data: {goods_id},
    success: function (json){
      var data = json.data;
      var str1 = '';
      var str2 = '';
      var str3 = '';
      var str4 = '';
      var obj = json.data[0];
      str1 += `<span style="font-size:12px">￥</span>${obj.price}`;
      $('.detail_price .extra .price').html(str1);
      str2 += `<img height="100%" src="${obj.goods_thumb}">`;
      $('.swiper-slide').html(str2);
      $('.productParm .pttitle .ptimg').html(str2);
      str3 += `<div>${obj.goods_name}${obj.goods_desc}</div>`;
      $('.detail_text .detail_txt').html(str3);
      str4 += `<div class="name">${obj.goods_name}${obj.goods_desc}</div>
				<div class="price hide_price">￥${obj.price} x <b>1</b></div>
				<div class="regular">
					<span> 颜色:浅棕色 </span>
				</div>`;
				$('.productParm .pttitle .titleright').html(str4);
    }
  }
);
