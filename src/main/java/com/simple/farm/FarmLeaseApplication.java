package com.simple.farm;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.simple.farm.dao")
public class FarmLeaseApplication {

	public static void main(String[] args) {
		SpringApplication.run(FarmLeaseApplication.class, args);
	}
}
