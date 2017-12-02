package com.simple.farm.dao.world;

import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.simple.farm.FarmLeaseApplicationTests;
import com.simple.farm.bean.world.TestTable;

public class TestTableDb extends FarmLeaseApplicationTests {

	@Autowired
	private TestTableDao testDao;
	
	
	@Test
	public void testSelectAll(){
		List<TestTable> list = testDao.selectAll();
		System.out.println(list);
	}
}
