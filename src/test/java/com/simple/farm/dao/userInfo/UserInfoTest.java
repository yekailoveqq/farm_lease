package com.simple.farm.dao.userInfo;

import java.util.Arrays;
import java.util.Date;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.simple.farm.FarmLeaseApplicationTests;
import com.simple.farm.bean.userInfo.UserInfo;
import com.simple.farm.common.extMybatis.UpdateCondition;

public class UserInfoTest extends FarmLeaseApplicationTests{

	@Autowired
	private UserInfoMapper userInfoMapper;
	
	@Test
	public void testUpdateByCondition(){
		UserInfo userInfo = new UserInfo();
		userInfo.setUserPhone("15861858916");
		userInfo.setLoginTime(new Date());
		UpdateCondition<UserInfo> updateCondition = new UpdateCondition<UserInfo>();
		updateCondition.setCols(Arrays.asList("loginTime"));
		updateCondition.setWheres(Arrays.asList("userPhone"));
		updateCondition.setRecord(userInfo);
		int r = userInfoMapper.spUpdate(updateCondition);
		System.out.println(r);
	}
	
}
