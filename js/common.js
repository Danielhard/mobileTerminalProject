(function(){

  // 基本的公共方法
  function CommonJs(){
    this.token = null;
    this.username = '';
    this.password = '';
    this.Ajax = null;
    this.init();
  }

  CommonJs.prototype = {
    init : function(){
      this.Ajax = new Ajax();
      this.Ajax.commonJs = this;
    },

    /*存储,获取storage*/
    setItem : function(k,v){
      return localStorage.setItem(k, v);
    },

    getItem : function(k){
      return localStorage.getItem(k);
    },

    /*创建商品的dom元素,并返回,传入你要创建的元素的数据*/
    createDom : function(obj){
      var prePrice = (obj.price * 1.6).toFixed(2);
      var str = `<li class="pro-list-item">
            <a href="detail.html?goods_id= ${obj.goods_id}">
              <div class="pli-top">
                <img src="${obj.goods_thumb}" alt="">
              </div>
              <div class="pli-bottom">
                <h4 class="pro-name">${obj.goods_name}</h4>
                <p><span class="dis-price"><del>&yen;${prePrice}</del></span></p>
                <p class="clearfix"><span class="price"><i>&yen;</i>${obj.price}</span> <span class="sale-count">已售：9999</span></p>
              </div>
            </a>
          </li>`;

      /*注意返回的好像是一个字符串*/
      return str;
    }



  };

  // 所有的ajax请求
  function Ajax(){
    this.commonJs = '';
    this.config = {};
    this.init();
  }

  Ajax.prototype = {
    init : function(){
      this.config.API_PREFIX = "http://h6.duchengjiu.top/shop/",
      this.config.PAGESIZE = 10
    },

    /*登录*/
    login : function(username,password,callback){
      var data = {
        "status" : 'login',
        "username" : username,
        "password" : password
      };
      $.post(this.config.API_PREFIX + "api_user.php",data,callback);
    },

    /*获取热门商品*/
    fetchHotProduct : function(page,pagesize,callback){
      var data = {
        "page" : page,
        "pagesize" : pagesize
      };
      $.get(this.config.API_PREFIX + "api_goods.php",data,callback);
    }

  };


  window.$$ = new CommonJs();
})();