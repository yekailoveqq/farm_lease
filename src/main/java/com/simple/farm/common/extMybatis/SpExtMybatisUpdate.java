package com.simple.farm.common.extMybatis;

import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.UpdateProvider;

public interface SpExtMybatisUpdate<T> {
	 	@UpdateProvider(type = SpExtDaoSqlProvider.class, method = "spUpdate")
	 	@Options(useCache = false, useGeneratedKeys = false)
	    int spUpdate(UpdateCondition<T> updateCondition);
	
}
