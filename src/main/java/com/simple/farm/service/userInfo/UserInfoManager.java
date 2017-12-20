package com.simple.farm.service.userInfo;

import java.util.Map;

/**
 * 用户管理接口
 * @author geliang
 *
 */
public interface UserInfoManager {

	/**
	 * 根据用户手机号 创建登录验证码
	 * @param phoneNum
	 * @return
	 */
	boolean createValiateCode(String phoneNum);
	
	
	Map<String, Object> userLogin(String userPhone,String valiateCode);

}
