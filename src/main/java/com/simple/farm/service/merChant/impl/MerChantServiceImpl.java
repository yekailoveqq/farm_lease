package com.simple.farm.service.merChant.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.simple.farm.bean.common.PageBean;
import com.simple.farm.bean.merChant.MerchantInfo;
import com.simple.farm.dao.merChant.MerChantInfoMapper;
import com.simple.farm.service.merChant.MerChantService;

@Service
public class MerChantServiceImpl implements MerChantService {

	@Autowired
	private MerChantInfoMapper merChantInfoMapper;
	
	@Override
	public Page<MerchantInfo> getMerChanInfoList(MerchantInfo merChantInfo, PageBean<MerchantInfo> pageInfo) {
		PageHelper.startPage(pageInfo.getPageNumber(),pageInfo.getPageSize());
		Page<MerchantInfo> result = (Page<MerchantInfo>) merChantInfoMapper.select(merChantInfo);
		return result;
	}

}
