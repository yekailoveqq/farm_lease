package com.simple.farm.common;

import org.junit.Test;

import com.simple.farm.FarmLeaseApplicationTests;

public class LogUtilTest extends FarmLeaseApplicationTests {

	@Test
	public void testInfoAndErrorLog() throws Exception{
		SpLogUtil.infoToFile("this is info", true);
		SpLogUtil.infoToFile("this is info2", false);
		
		SpLogUtil.errorToFile("this is error", true);
		SpLogUtil.errorToFile("this is error2", false);
		
		Thread.sleep(10000);
	}
	
}
