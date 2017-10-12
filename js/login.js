var username = document.querySelector("#login-account");
var passname = document.querySelector("#login-password-input");
var Loginbtn = document.querySelector("#login-button");
<<<<<<< HEAD
Loginbtn.addEventListener(touchstart,function(){
=======
Loginbtn.addEventListener('touchstart',function(){
>>>>>>> 33f1640664f03606c12f6de5fadef68d15a8a123
	myajax.post('http://h6.duchengjiu.top/shop/api_user.php',{
		status: 'login',
    username: oUsername.value,
    password: oPassword.value
	},function(error, responseText){
		var json = JSON.parse(responseText);
		console.log(json)
	}
	)
<<<<<<< HEAD
})
=======
});
>>>>>>> 33f1640664f03606c12f6de5fadef68d15a8a123
