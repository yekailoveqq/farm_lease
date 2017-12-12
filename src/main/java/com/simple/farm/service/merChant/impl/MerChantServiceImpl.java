package com.simple.farm.service.merChant.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.simple.farm.bean.common.PageBean;
import com.simple.farm.bean.merChant.FiledInfo;
import com.simple.farm.bean.merChant.MerchantInfo;
import com.simple.farm.dao.merChant.FiledInfoMapper;
import com.simple.farm.dao.merChant.MerChantInfoMapper;
import com.simple.farm.service.merChant.MerChantService;

@Service
public class MerChantServiceImpl implements MerChantService {

	@Autowired
	private MerChantInfoMapper merChantInfoMapper;
	
	@Autowired
	private FiledInfoMapper filedInfoMapper;
	
	@Override
	public Page<MerchantInfo> getMerChanInfoList(MerchantInfo merChantInfo, PageBean<MerchantInfo> pageInfo) {
		PageHelper.startPage(pageInfo.getPageNumber(),pageInfo.getPageSize());
		Page<MerchantInfo> result = (Page<MerchantInfo>) merChantInfoMapper.select(merChantInfo);
		return result;
	}

	@Override
	public List<FiledInfo> getFiledsByMerChantId(int merChantId) {
		FiledInfo filedInfo = new FiledInfo();
		filedInfo.setMerchantid(merChantId);
		return filedInfoMapper.select(filedInfo);
	}

	@Override
	public boolean changeFiledLockState(String state, int filedId) {
		/**
		 * 数据库使用乐观锁机制 防止并非选择地块 同时锁定问题
		 */
		FiledInfo filedInfo = new FiledInfo();
		filedInfo.setId(filedId);
		filedInfo = filedInfoMapper.selectOne(filedInfo);
		filedInfo.setState(state);
		int r = filedInfoMapper.lockState(filedInfo);
		return r==1?true:false;
	}

	@Override
	public int removeLockState(List<Integer> ids) {
		return merChantInfoMapper.removeLockState(ids);
	}

	
	@Override
	public List<FiledInfo> getFiledInfos(List<Integer> ids) {
		return filedInfoMapper.getFiledInfos(ids);
	}
	
	
	

}
