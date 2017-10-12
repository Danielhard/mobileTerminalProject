/**
 * Created by sunchenshidabendan on 2017/10/11.
 */
// 默认按钮
var open = document.querySelectorAll("span")[1];
open.addEventListener("touchstart",function () {
  if(open.className=="default-button"){
    open.className="default-open"
  }else {
    open.className="default-button"
  }
},false);
var oArea =document.querySelector("#area-box");
var oHidden = document.querySelector("#hidden");
var oChoose = document.querySelector("#address-choose");

// 城区选择
oArea.addEventListener("touchstart",function () {
  oHidden.style.display="none";
  oChoose.style.display="block";
},false);

// 返回地址信息添加
var oBack = document.querySelector("#back");
oBack.addEventListener("touchstart",function () {
  oChoose.style.display="none";
  oHidden.style.display="block";
},false);
var oLi = document.getElementsByTagName("li");
var oNav = document.querySelector("#address-nav");
var oText1 = document.querySelector("#text1");
var oProvince = document.querySelectorAll("ul")[0];
var oCity = document.querySelectorAll("ul")[1];
var oRegion = document.querySelectorAll("ul")[2];
var opinion=document.createElement("li");
var opinion1=document.createElement("li");
var text2=document.createElement("div");
var text3=document.createElement("div");

// 省份选择，添加城市栏
for(var i=0;i<oLi.length;i++){
  (function (i) {
    oLi[i].addEventListener("touchstart",function () {
      oProvince.style.display="none";
      oCity.style.display="block";
      oText1.innerText=oLi[i].innerText;
      oText1.style.color="black";
      text2.innerHTML="请选择";
      text2.style.color="#afa081";
      text2.className="nav-text";
      oNav.appendChild(text2);
      opinion.className="nav-select";
      opinion.innerHTML=oLi[i].innerText;
     oCity.appendChild(opinion);
    },false);
  })(i)
}

// 城市选择，添加区县栏
opinion.addEventListener("touchstart",function () {
  oCity.style.display="none";
  oRegion.style.display="block";
  text2.innerHTML=opinion.innerHTML;
  text3.innerHTML="请选择";
  text3.className="nav-text";
  text2.style.color="black";
  oNav.appendChild(text3);
  if(opinion.innerHTML=="北京"){
    oRegion.innerHTML += `
                 <li class="nav-select">东城区</li>
                 <li class="nav-select">西城区</li>
                 <li class="nav-select">海淀区</li>
                 <li class="nav-select">朝阳区</li>
                 <li class="nav-select">崇文区</li>
                 <li class="nav-select">宣武区</li>
                 <li class="nav-select">丰台区</li>
                 <li class="nav-select">石景山区</li>
                 <li class="nav-select">房山区</li>
                 <li class="nav-select">门头沟区</li>
                 <li class="nav-select">通州区</li>
                 <li class="nav-select">顺义区</li>
                 <li class="nav-select">昌平区</li>
                 <li class="nav-select">怀柔区</li>
                 <li class="nav-select">平谷区</li>
                 <li class="nav-select">大兴区</li>
                 <li class="nav-select">密云县</li>
                 <li class="nav-select">延庆县</li>
            `;
  }else {
    opinion1.innerHTML=opinion.innerHTML;
    opinion1.className="nav-select";
    oRegion.appendChild(opinion1);
  }
},false);

// 区县选择，添加到所在区域内容
var areadetail = document.querySelector("#area-detail");
opinion1.addEventListener("touchstart",function () {
  oChoose.style.display="none";
  oHidden.style.display="block";
  areadetail.innerHTML=oText1.innerHTML+"-"+text2.innerHTML+"-"+opinion1.innerHTML;
},false);
oRegion.addEventListener('touchstart',function(e){
  var event = event || window.event;
  event.preventDefault();
  oChoose.style.display="none";
  oHidden.style.display="block";
  areadetail.innerHTML=oText1.innerHTML+"-"+text2.innerHTML+"-"+event.target.innerText;
},false);

// 重新选择省份
oText1.addEventListener("touchstart",function () {
  oProvince.style.display="block";
  oCity.style.display="none";
  oRegion.style.display="none";
  oText1.style.color="#afa081";
  oNav.removeChild(text2);
  oNav.removeChild(text3);
},false);

// 重新选择城市
text2.addEventListener("touchstart",function () {
  oProvince.style.display="none";
  oCity.style.display="block";
  oRegion.style.display="none";
  text2.style.color="#afa081";
  oNav.removeChild(text3);
},false);


