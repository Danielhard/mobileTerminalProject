(function () {
    var oInfo=document.querySelector('.info');
    var oFlux=document.querySelector('.f_lux');
    var oUpInfo=document.querySelector('.upInfo');
    var oSz=oInfo.querySelector('.sz');
    var oReturnLast=oUpInfo.querySelector('.return_last');
    var oAddressJump=oUpInfo.querySelector('#address_jump');

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
    // 个人中心管理收货地址
    oAddressJump.addEventListener('touchstart',function () {
         location.href='address.html';
    })
  })()