package com.simple.farm.common;

import java.util.Calendar;
import java.util.Date;

/**
 * 日期工具类
 * 
 * @author geliang
 *
 */
public class SpDateUtil {

	/**
	 * 基本的日期加减
	 * 
	 * @param nowDate
	 * @param type
	 *            1 秒 2 分 3 时 4天 5月 6年
	 * @param value
	 * @return
	 */
	public static Date addDate(Date nowDate, int type, int value) {

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(nowDate);
		switch (type) {
		case 1:
			calendar.set(Calendar.SECOND, calendar.get(Calendar.SECOND) + value);
			break;

		case 2:
			calendar.set(Calendar.MINUTE, calendar.get(Calendar.MINUTE) + value);
			break;

		case 3:
			calendar.set(Calendar.HOUR, calendar.get(Calendar.HOUR) + value);
			break;

		case 4:
			calendar.set(Calendar.DAY_OF_MONTH, calendar.get(Calendar.DAY_OF_MONTH) + value);
			break;

		case 5:
			calendar.set(Calendar.MONTH, calendar.get(Calendar.MONTH) + value);
			break;

		case 6:
			calendar.set(Calendar.YEAR, calendar.get(Calendar.YEAR) + value);
			break;

		default:
			break;
		}
		return calendar.getTime();
	}

}
