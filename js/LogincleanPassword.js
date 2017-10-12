var oInput = document.querySelector("#login-password-input");
var oClean = document.querySelector("#clean-password");


// 图标点击事件 //
oClean.addEventListener("touchstart",function(){
	oInput.value = "";
	oClean.style.display = "none";
})


// 图标显示和隐藏 //
oInput.addEventListener('keyup',function(){
	if($(this).val() == ""){
		oClean.style.display = "none";
	}else{
		oClean.style.display = "block";
	}
})
	

// 删除文本文档1 //
var oRegisterInput = document.querySelector("#login-password-input1");
var oClean1 = document.querySelector("#clean-password1");
	oClean1.addEventListener("touchstart",function(){
		oRegisterInput.value = "";
		oClean1.style.display = "none";
	})
	
	
	// 图标显示和隐藏 //
	oRegisterInput.addEventListener('keyup',function(){
		if($(this).val() == ""){
			oClean1.style.display = "none";
		}else{
			oClean1.style.display = "block";
		}
})