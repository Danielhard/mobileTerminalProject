(function () {
    var oListUl=document.querySelector('.hot-con');
    //搜索框跳转页
     $('.search-text').on('keyup',function (event) {
        event=event||window.event;
          event.preventDefault();
          if(event.keyCode===13){
              if(!localStorage.value){
                  localStorage.value=$(this).val();
              }else{
                  localStorage.value += '&' + $(this).val();
              }
              location.href='goodsSearch.html?search_text='+$(this).val();
          }
     })
    //获取商品列表
      $$.Ajax.fetchProductList(function (data) {
          console.log(data);
           var dataList=data['data'];
          console.log(dataList);
           for(var i=0;i<dataList.length;i++){
               var obj=dataList[i]
              oListUl.innerHTML+=`<li class="hotList"><a href="goodsList.html?cat_id=$                                             {obj.cat_id}">${obj.cat_name}</a></li>`
           }
      })

 })()
