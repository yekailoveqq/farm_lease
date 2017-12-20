package com.simple.farm.web.controller.userInfo;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	public Map<String, Object> userLogin(String userPhone,String valiateCode){
		return null;
	}
	
	
}
