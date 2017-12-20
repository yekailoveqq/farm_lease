package com.simple.farm.service.userInfo.impl;

import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simple.farm.bean.userInfo.ValiateCode;
import com.simple.farm.dao.userInfo.ValiateCodeMapper;
import com.simple.farm.service.userInfo.UserInfoManager;
import com.simple.farm.service.util.CodeUtil;

@Service
public class UserInfoManagerImpl implements UserInfoManager{

	@Autowired
	private ValiateCodeMapper valiateCodeMapper;
	
	@Override
	public boolean createValiateCode(String phoneNum) {
		ValiateCode valiateCode = new ValiateCode();
		valiateCode.setCreateTime(new Date());
		valiateCode.setUserPhone(phoneNum);
		valiateCode.setCode(CodeUtil.createRandom(true, 4));
		int r = valiateCodeMapper.insert(valiateCode);
		return r==1?true:false;
	}

	@Override
	public Map<String, Object> userLogin(String userPhone, String valiateCode) {
		//判断当前验证码是否正确 并且在规定时间内
		ValiateCode code = new ValiateCode();
		code.setCode(valiateCode);
		code.setUserPhone(userPhone);
		if(code!=null){}
		
		//用户存在 修改用户登录时间 用户不存在 新建用户
		return null;
	}

}
