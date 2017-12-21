package com.simple.farm.web.controller.userInfo;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

import com.simple.farm.service.userInfo.UserInfoManager;

/**
 * 用户管理controller
 * @author geliang
 *
 */
@RestController
@RequestMapping("/user")
public class UserManagerController {

	@Autowired
	private UserInfoManager userInfoManager;
	
	/**
	 * 创建短信验证码
	 * @return
	 */
	@RequestMapping("/createVerificationCode")
	public boolean ceateVerificationCode(String phoneNumer){
		return userInfoManager.createValiateCode(phoneNumer);
	}
	
	/**
	 * 用户登录
	 * @param userPhone
	 * @param valiateCode
	 * @return
	 */
	@RequestMapping(value = "/userLogin",method = RequestMethod.POST)
	public Map<String, Object> userLogin(String userPhone,String valiateCode,HttpServletRequest request){
		Map<String, Object> result = userInfoManager.userLogin(userPhone, valiateCode);
		//登录成功
		if(StringUtils.equals("success", (String)result.get("state"))){
			WebUtils.setSessionAttribute(request, "NOW_USER_PHONE", userPhone);
		}
		System.out.println(WebUtils.getSessionAttribute(request, "NOW_USER_PHONE"));
		return result;
	}
	
	
}
