package com.simple.farm.dao.merChant;

import com.simple.farm.bean.merChant.FiledInfo;

import tk.mybatis.mapper.common.Mapper;

public interface FiledInfoMapper extends Mapper<FiledInfo>{

	/**
	 * 使用乐观锁 修改锁定状态
	 * @param filedInfo
	 * @return
	 */
	int lockState(FiledInfo filedInfo);
	
}