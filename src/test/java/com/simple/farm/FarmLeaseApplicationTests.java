package com.simple.farm;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.simple.farm.bean.world.City;
import com.simple.farm.dao.world.WorldDao;

@RunWith(SpringRunner.class)
@SpringBootTest
public class FarmLeaseApplicationTests {

	@Autowired
	private WorldDao worldDao;
	
	@Test
	public void contextLoads() {
		List<City> citys = worldDao.selectAll();
		System.out.println(citys);
	}

}
