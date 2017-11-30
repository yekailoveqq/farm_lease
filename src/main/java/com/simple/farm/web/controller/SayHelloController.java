package com.simple.farm.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simple.farm.bean.world.City;
import com.simple.farm.dao.world.WorldDao;

/**
 * 
 * @author geliang
 * 下午3:56:55
 * SayHelloController.java
 * controller层列子
 */
@RestController
public class SayHelloController {

	@Autowired
	private WorldDao worldDao;
	
	@RequestMapping("/sayHello")
	public String sayHello() {
		List<City> citys = worldDao.selectAll();
		System.out.println(citys);
		return "hello world";
	}
	
}
