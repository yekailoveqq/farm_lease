package com.simple.farm.dao.merChant;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.simple.farm.bean.merChant.FiledInfo;

import tk.mybatis.mapper.common.Mapper;

public interface FiledInfoMapper extends Mapper<FiledInfo>{

	/**
	 * 使用乐观锁 修改锁定状态
	 * @param filedInfo
	 * @return
	 */
	int lockState(FiledInfo filedInfo);
	
	/**
	 * 根据地块集合获取地块详细信息
	 * @param ids
	 * @return
	 */
	List<FiledInfo> getFiledInfos(@Param("ids")List<Integer> ids);
	
}