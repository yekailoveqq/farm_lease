/**
 * 用户登录js
 */
var login = new Object();

login.showModel = function(){
	//清空临时变量
	chooseFile.chooseChantId = '';
	//没有加载
	if(!$("#login").length>0){
		common.loadHtmlToBody("#indexBody","/pages/business/login.html");
	}
	$('#loginModal').modal('show');
	
	login.createCode();
}


/**
 * 刷新验证码
 */
login.createCode = function() {
    code = "";
    var codeLength = 6;//验证码的长度   
    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，当然也可以用中文的   
   
    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 36);
        code += selectChar[charIndex];
    }
    
    $("#login_valiateCode").attr("class","code");
    $("#login_valiateCode").val(code);
}

/**
 * 发送短信验证码
 */
login.sendMessage = function(){
	var valiateCode =  $("#login_valiateCode").val();
	var login_phoneCode = $("#login_code").val();
	var phone = $("#login_phone").val();
	if(login_phoneCode==valiateCode&&phone!=null){
		//发送短信请求
		common.ajax('/user/createVerificationCode','GET','phoneNumer='+phone,function(result){
			if(result){
				alert("验证码发送成功！")
			}
		});
	}
	else{
		alert("输入的验证码有误");
	}
}



/**
 * 用户登录验证
 */
login.userLogin = function(){
	var sendData = new Object();
	sendData.userPhone = $("#login_phone").val();
	sendData.valiateCode = $("#login_phoneCode").val();
	common.ajax('/user/userLogin','POST',sendData,function(result){
		alert(result);
	});
	
	
}