package com.simple.farm.dao.sptest;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.simple.farm.FarmLeaseApplicationTests;
import com.simple.farm.bean.sptest.TestTable;
import com.simple.farm.dao.sptest.TestTableMapper;

public class TestTableMapperTest extends FarmLeaseApplicationTests{

	@Autowired
	private TestTableMapper testTableMapper;

	@Test
	public void testInsert(){
		TestTable record = new TestTable();
		record.setCol("1");
		record.setCol2("2");
		record.setName("323");
		testTableMapper.spInsert2(record);
	}
	
}
