package com.simple.farm.common.extMybatis;

import tk.mybatis.mapper.common.Mapper;

public interface SpMapper<T> extends Mapper<T>,SpExtMybatisUpdate<T> {

}
