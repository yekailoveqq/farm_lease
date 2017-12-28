package com.simple.farm.dao.sptest;

import com.simple.farm.bean.sptest.TestTable;

import tk.mybatis.mapper.common.Mapper;

public interface TestTableMapper extends Mapper<TestTable>{
    int spInsert(TestTable record);
    
    int spInsert2(TestTable record);
}