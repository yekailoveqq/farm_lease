package com.simple.farm.dao.merchant;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.simple.farm.FarmLeaseApplicationTests;
import com.simple.farm.bean.merChant.MerchantInfo;
import com.simple.farm.dao.merChant.MerChantInfoMapper;

public class TestMerChantMapper extends FarmLeaseApplicationTests{

	@Autowired
	private MerChantInfoMapper merChantInfoMapper;
	
	@Test
	public void testInsert(){
		int i = 2;
		for(i=2;i<50;i++){
			MerchantInfo chantInfo = new MerchantInfo();
			chantInfo.setCity("南通");
			chantInfo.setProvice("江苏");
			chantInfo.setTown("如皋");
			chantInfo.setId(i);
			
			merChantInfoMapper.insertSelective(chantInfo);
		}
		
	}
}
