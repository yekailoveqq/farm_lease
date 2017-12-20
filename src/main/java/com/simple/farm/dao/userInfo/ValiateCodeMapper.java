package com.simple.farm.dao.userInfo;

import com.simple.farm.bean.userInfo.ValiateCode;

import tk.mybatis.mapper.common.Mapper;

public interface ValiateCodeMapper extends Mapper<ValiateCode>{
   
	ValiateCode getLastValiateCode(ValiateCode valiateCode);
	
	
}