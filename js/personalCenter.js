(function () {
    var oInfo=document.querySelector('.info');
    var oFlux=document.querySelector('.f_lux');
    var oUpInfo=document.querySelector('.upInfo');
    var oSz=oInfo.querySelector('.sz');
    var oReturnLast=oUpInfo.querySelector('.return_last');
    var oAddressJump=oUpInfo.querySelector('#address_jump');
    var oUser_login_name=oInfo.querySelector('.user_login_name');
    var oUpInfo_username=oUpInfo.querySelector('.upInfo_username');
     oSz.addEventListener('touchstart',function () {
         oInfo.style.display='none';
         oFlux.style.display='block';
         setTimeout(function () {
             oFlux.style.display='none';
             oUpInfo.style.display='block';
         },200);
      })
     oReturnLast.addEventListener('touchstart',function () {
         oUpInfo.style.display='none';
         oFlux.style.display='block';
         setTimeout(function () {
             oFlux.style.display='none';
             oInfo.style.display='block';
         },200);
     })
    console.log(oUser_login_name);
    oUser_login_name.innerText='用户名：'+localStorage.username;
    oUpInfo_username.innerText=localStorage.username;
    if(!localStorage.username){
        oUser_login_name.innerText='用户名：';
        oUpInfo_username.innerText='';
    }

    // 个人中心管理收货地址
    oAddressJump.addEventListener('touchstart',function () {
         location.href='address.html';
    })

  //判断是否登录，有则跳转到购物车页面，没有则返回登陆
  $('#cart').on('touchstart',function () {
    if(localStorage.token) {
      location.href = 'cart.html';
    } else{
      location.href='login.html';
    }
  });
  })()