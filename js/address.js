/**
 * Created by sunchenshidabendan on 2017/10/11.
 */
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
oArea.addEventListener("touchstart",function () {
  oHidden.style.display="none";
  oChoose.style.display="block";
},false);

var oBack = document.querySelector("#back");
oBack.addEventListener("touchstart",function () {
  oChoose.style.display="none";
  oHidden.style.display="block";
},false);
var beijing = document.querySelector("#beijing");
var oNav = document.querySelector("#address-nav");
var oText1 = document.querySelector("#text1");
beijing.addEventListener("touchstart",function () {
  oText1.innerText=beijing.innerText;
  var text2=document.createElement("div");
  text2.className="nav-text";
  text2.innerHTML="请选择";
  oNav.appendChild(text2);
},false);
