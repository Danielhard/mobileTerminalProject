var username = document.querySelector("#login-account");
var passname = document.querySelector("#login-password-input");
var Loginbtn = document.querySelector("#login-button");
Loginbtn.addEventListener(touchstart,function(){
	myajax.post{'http://h6.duchengjiu.top/shop/api_user.php',{
		status: 'login',
    username: oUsername.value,
    password: oPassword.value
	},function(error, responseText){
		var json = JSON.parse(responseText);
		console.log(json)
	}
	}
})