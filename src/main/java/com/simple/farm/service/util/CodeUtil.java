package com.simple.farm.service.util;

import java.util.Date;

import com.simple.farm.bean.userInfo.ValiateCode;

public class CodeUtil {

	/**
	 * 创建指定数量的随机字符串
	 * 
	 * @param numberFlag
	 *            是否是数字
	 * @param length 长度
	 * @return
	 */
	public static String createRandom(boolean numberFlag, int length) {
		String retStr = "";
		String strTable = numberFlag ? "1234567890" : "1234567890abcdefghijkmnpqrstuvwxyz";
		int len = strTable.length();
		boolean bDone = true;
		do {
			retStr = "";
			int count = 0;
			for (int i = 0; i < length; i++) {
				double dblR = Math.random() * len;
				int intR = (int) Math.floor(dblR);
				char c = strTable.charAt(intR);
				if (('0' <= c) && (c <= '9')) {
					count++;
				}
				retStr += strTable.charAt(intR);
			}
			if (count >= 2) {
				bDone = false;
			}
		} while (bDone);
		return retStr;
	}
	
	
	/**
	 * 判断验证码是否在规定有效时间内
	 * @param code
	 * @param time
	 * @return
	 */
	public static boolean inRightTime(ValiateCode code,int time){
		long mind = new Date().getTime() - code.getCreateTime().getTime();
		if(mind/(1000*60)<=time){
			return true;
		}
		return false;
	}

}
