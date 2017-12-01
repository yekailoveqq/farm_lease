package com.simple.farm.dao.world;


import java.util.List;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.simple.farm.FarmLeaseApplicationTests;
import com.simple.farm.bean.world.City;
import com.simple.farm.dao.world.WorldDao;

import junit.framework.Assert;

public class WorldDaotest extends FarmLeaseApplicationTests{

	@Autowired
	private WorldDao worldDao;
	
	@Test
	public void testCityDao(){
		List<City> citys = worldDao.selectAll();
		Assert.assertNotNull(citys);
	}
	
}
