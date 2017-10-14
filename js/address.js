/**
 * Created by sunchenshidabendan on 2017/10/11.
 */
// 添加收货地址
(function () {


  var addButton = document.querySelector("#add-button");
  var addMessage = document.querySelector("#address-message");
  addButton.addEventListener("touchstart", function () {
    oHidden.style.display = "block";
    addMessage.style.display = "none";
  }, false);
// 返回收货地址
  var returnback = document.querySelector("#returnback");
  returnback.addEventListener("touchstart", function () {
    oHidden.style.display = "none";
    addMessage.style.display = "block";
  }, false);
// 新增收货地址
  var newAdd = document.querySelector("#newadd");
  var oAgree = document.querySelector("#agree");
  newAdd.addEventListener("touchstart", function () {
    oHidden.style.display = "block";
    addMessage.style.display = "none";
  }, false);
  oAgree.addEventListener('touchstart', function () {
    location.href = 'checkout.html';
  }, false);
// 默认按钮
  var open = document.querySelectorAll("span")[1];
  open.addEventListener("touchstart", function () {
    if (open.className == "default-button") {
      open.className = "default-open"
    } else {
      open.className = "default-button"
    }
  }, false);
  var oArea = document.querySelector("#area-box");
  var oHidden = document.querySelector("#hidden");
  var oChoose = document.querySelector("#address-choose");

// 城区选择
  oArea.addEventListener("touchstart", function () {
    oHidden.style.display = "none";
    oChoose.style.display = "block";
  }, false);

// 返回地址信息添加
  var oBack = document.querySelector("#back");
  oBack.addEventListener("touchstart", function () {
    oChoose.style.display = "none";
    oHidden.style.display = "block";
  }, false);

// 收货地址返回个人中心
  var oReturnPersonal = document.querySelector('#returnPersonal');
  oReturnPersonal.addEventListener('touchstart', function () {
    location.href = 'personalCenter.html';
  }, false);

  var oLi = document.getElementsByTagName("li");
  var oNav = document.querySelector("#address-nav");
  var oText1 = document.querySelector("#text1");
  var oProvince = document.querySelectorAll("ul")[1];
  var oCity = document.querySelectorAll("ul")[2];
  var oRegion = document.querySelectorAll("ul")[3];
  var opinion = document.createElement("li");
  var opinion1 = document.createElement("li");
  var text2 = document.createElement("div");
  var text3 = document.createElement("div");

// 省份选择，添加城市栏
  for (var i = 0; i < oLi.length; i++) {
    (function (i) {
      oLi[i].addEventListener("touchstart", function () {
        oProvince.style.display = "none";
        oCity.style.display = "block";
        oText1.innerText = oLi[i].innerText;
        oText1.style.color = "black";
        text2.innerHTML = "请选择";
        text2.style.color = "#afa081";
        text2.className = "nav-text";
        oNav.appendChild(text2);
        opinion.className = "nav-select";
        opinion.innerHTML = oLi[i].innerText;
        oCity.appendChild(opinion);
      }, false);
    })(i)
  }

// 城市选择，添加区县栏
  opinion.addEventListener("touchstart", function () {
    oCity.style.display = "none";
    oRegion.style.display = "block";
    text2.innerHTML = opinion.innerHTML;
    text3.innerHTML = "请选择";
    text3.className = "nav-text";
    text2.style.color = "black";
    oNav.appendChild(text3);
    if (opinion.innerHTML == "北京") {
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
    } else {
      opinion1.innerHTML = opinion.innerHTML;
      opinion1.className = "nav-select";
      oRegion.appendChild(opinion1);
    }
  }, false);

// 区县选择，添加到所在区域内容
  opinion1.addEventListener("touchstart", function () {
    oChoose.style.display = "none";
    oHidden.style.display = "block";
    areadetail.innerHTML = oText1.innerHTML + "-" + text2.innerHTML + "-" + opinion1.innerHTML;
  }, false);
  oRegion.addEventListener('touchstart', function (e) {
    var event = event || window.event;
    event.preventDefault();
    oChoose.style.display = "none";
    oHidden.style.display = "block";
    areadetail.innerHTML = oText1.innerHTML + "-" + text2.innerHTML + "-" + event.target.innerText;
  }, false);

// 重新选择省份
  oText1.addEventListener("touchstart", function () {
    oProvince.style.display = "block";
    oCity.style.display = "none";
    oRegion.style.display = "none";
    oText1.style.color = "#afa081";
    var allDiv = oNav.querySelectorAll("div");
      if(allDiv.length===3){
        oNav.removeChild(text2);
        oNav.removeChild(text3);
      }else if(allDiv.length===2){
        oNav.removeChild(text2);
      }else
      {return;}

    // if (text2) {
    //   oNav.removeChild(text2);
    // }
    // if (text3) {
    //   oNav.removeChild(text3);
    // }
  }, false);

// 重新选择城市
  text2.addEventListener("touchstart", function () {
    oProvince.style.display = "none";
    oCity.style.display = "block";
    oRegion.style.display = "none";
    text2.style.color = "#afa081";
    if (text3) {
      oNav.removeChild(text3);
    }
  }, false);
  
// 保存收货地址
  var oSave = document.querySelector("#save");
  var addBox = document.querySelector("#add-box");
  var addFoot = document.querySelector("#add-foot");
  var areadetail = document.querySelector("#area-detail");
  var piece = document.querySelector("#address-piece");
  oSave.addEventListener("touchstart", function () {
    var name = document.querySelector("#name").value;
    var phone = document.querySelector("#tel").value;
    var detail = document.querySelector("#detail-address").value;
    var areadetail = document.querySelector("#area-detail");
    var areadetailTxt = areadetail.innerText;
    piece.style.display="block";
    oHidden.style.display = "none";
    addMessage.style.display = "block";
    addBox.style.display = "none";
    addFoot.style.display = "block";
    $$.Ajax.saveAddress(name, phone, areadetailTxt, detail, function (data) {
      console.log(data);
      getaddressMethod();
    });
  });
  
  // 删除地址
  var selected_address_id = 0;
  piece.addEventListener("touchstart",function (event) {
    event = event || window.event;
    var target = event.target;
    if (target.className === 'delete') {
        var address_id = target.dataset.id;
        console.log(address_id);
        $$.Ajax.deleteaddress(address_id,function (data) {
          console.log(data);
          if (data.code === 0) {
            target.parentNode.parentNode.removeChild(target.parentNode);
          }
        })
      }

      // 选择一个地址
    if (target.nodeName === 'LI') {
      //点击LI元素选择一个收货地址
      target.className = "touch";
      localStorage.address_id = parseInt(target.dataset.id);
      console.log(localStorage.address_id);
      console.log(target.childNodes)
      localStorage.setItem('consignee',''+target.childNodes[1].innerText+'')
      localStorage.setItem('mobile',''+target.childNodes[3].innerText+'')
      localStorage.setItem('district',''+target.childNodes[5].innerText+'')
    } else if (target.nodeName === 'SPAN') {
      target.parentNode.className = "touch";
      localStorage.address_id = parseInt(target.parentNode.dataset.id);
      console.log(localStorage.address_id);
      localStorage.setItem('consignee',''+target.childNodes[1].innerText+'')
      localStorage.setItem('mobile',''+target.childNodes[3].innerText+'')
      localStorage.setItem('district',''+target.childNodes[5].innerText+'')
    }
  });

  // 获取地址方法
  function getaddressMethod() {
    $$.Ajax.getaddress(function (data) {
      console.log(data);
      var dataArr = data['data'];
      var addressCount = dataArr.length;
      console.log(dataArr);
      for (var i = dataArr.length - 1; i >= 0; i--) {
        var obj = dataArr[i];
        piece.innerHTML += `
                   <li class="information" data-id="${obj.address_id}">
                    <span class="adds">${obj.consignee}</span>
                    <span class="adds adds1">${obj.mobile}</span>
                    <span class="adds adds2">${obj.district}-${obj.address}</span><br/>
                    <input class="delete" type="button" value="删除" data-id="${obj.address_id}">
                   </li>
              `;
      }

      if(addressCount!=0){
        piece.style.display = "block";
        addBox.style.display = "none";
        addFoot.style.display = "block";
      }
    });
  }
  getaddressMethod();
})();







