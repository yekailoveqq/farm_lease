package com.simple.farm;

public class TestmAIN {
	public static void main(String[] args) {
		String s = "0510";
		if(s.endsWith("0510")){
			System.out.println("0510");
		}
		else if(s.endsWith("10")){
			System.out.println("10");
		}
		else{
			System.out.println("d");
		}
	}
}
