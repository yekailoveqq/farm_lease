package com.simple.farm.service.userInfo.impl;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simple.farm.bean.userInfo.UserInfo;
import com.simple.farm.bean.userInfo.ValiateCode;
import com.simple.farm.common.extMybatis.UpdateCondition;
import com.simple.farm.dao.userInfo.UserInfoMapper;
import com.simple.farm.dao.userInfo.ValiateCodeMapper;
import com.simple.farm.service.userInfo.UserInfoManager;
import com.simple.farm.service.util.CodeUtil;

@Service
public class UserInfoManagerImpl implements UserInfoManager{

	@Autowired
	private ValiateCodeMapper valiateCodeMapper;
	
	@Autowired
	private UserInfoMapper userInfoManager;
	
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
		Map<String, Object> result = new HashMap<String,Object>();
		//判断当前验证码是否正确 并且在规定时间内
		ValiateCode code = new ValiateCode();
		code.setCode(valiateCode);
		code.setUserPhone(userPhone);
		code = valiateCodeMapper.selectOne(code);
		//短信验证码存在
		if(code!=null&&code.getUserPhone()!=null&&code.getCode()!=null){
			if(CodeUtil.inRightTime(code, 15)){	//验证码在15分钟内有效
				//用户登录操作
				result = dealUserLogin(userPhone);
			}
			else{
				result.put("state", "error");	//状态是不
				result.put("msg", "短信验证超时");
			}
		}
		else{
			result.put("state", "error");
			result.put("msg", "验证码错误");	
		}
		return result;
	}
	
	
	
	/**
	 * 用户登录
	 * @param userPhone
	 * @return
	 */
	private Map<String, Object> dealUserLogin(String userPhone){
		Map<String, Object> res= new HashMap<String,Object>();
		UserInfo userInfo = new UserInfo();
		userInfo.setUserPhone(userPhone);
		userInfo = userInfoManager.selectOne(userInfo);
		int resRow = 0;
		//用户不存在 直接插入用户
		if(userInfo==null||userInfo.getUserPhone()==null){
			userInfo = new UserInfo();
			userInfo.setUserPhone(userPhone);
			userInfo.setUserType("1");
			userInfo.setCreateTime(new Date());
			userInfo.setLoginTime(new Date());
			resRow = userInfoManager.insertSelective(userInfo);
		}
		//用户存在 更新用户登录日期
		else{
			userInfo.setLoginTime(new Date());
			UpdateCondition<UserInfo> userCondition = new UpdateCondition<>();
			userCondition.setRecord(userInfo);
			userCondition.setCols(Arrays.asList("loginTime"));
			userCondition.setWheres(Arrays.asList("userPhone"));
			resRow = userInfoManager.spUpdate(userCondition);
		}
		if(resRow==1){
			res.put("state", "success");
			res.put("msg", "登录成功");			
		}
		else{
			res.put("state", "error");
			res.put("msg", "登录失败");	
		}
		
		return res;
	}

}
