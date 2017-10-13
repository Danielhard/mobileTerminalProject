(function () {
     $('.search-text').on('keyup',function (event) {
        event=event||window.event;
          event.preventDefault();
          if(event.keyCode===13){
              //if(!localStorage.value){
              //    localStorage.value=$(this).val();
              //}else{
              //    localStorage.value += '&' + $(this).val();
              //}
              location.href='productList.html?search_text='+$(this).val();
          }
     })
 })();
