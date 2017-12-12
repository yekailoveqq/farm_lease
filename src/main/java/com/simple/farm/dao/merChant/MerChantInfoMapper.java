package com.simple.farm.dao.merChant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.simple.farm.bean.merChant.MerchantInfo;

import tk.mybatis.mapper.common.Mapper;

public interface MerChantInfoMapper extends Mapper<MerchantInfo>{

	int removeLockState(@Param("ids")List<Integer> ids);
	
}