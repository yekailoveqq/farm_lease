package com.simple.farm.common;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * 日志处理公用类
 * @author geliang
 *	
 */
public class SpLogUtil {

   public static  Logger asynclogger = LogManager.getLogger("asynclog"); //异步记录日志
   
   public static  Logger logger = LogManager.getLogger("asynclog"); //同步记录日志
   

   /**
    * 输出info信息到日志
    * @param obj 输出对象
    * @param isAsy 是否异步
    */
   public static void infoToFile(Object obj,boolean isAsy){
	   String message = "";
	   if(obj instanceof Throwable){
		   message = ExceptionUtils.getStackTrace((Throwable) obj);
	   }
	   else{
		   message = obj.toString();
	   }
	   if(isAsy){
		   asynclogger.info(message);
	   }
	   else{
		   logger.info(message);
	   }
   }
   
   
   /**
    * 输出错误日志
    * @param obj
    * @param isAsy
    */
   public static void errorToFile(Object obj,boolean isAsy){
	   String message = "";
	   if(obj instanceof Throwable){
		   message = ExceptionUtils.getStackTrace((Throwable) obj);
	   }
	   else{
		   message = obj.toString();
	   }
	   if(isAsy){
		   asynclogger.error(message);
	   }
	   else{
		   logger.error(message);
	   }
   }
	
}
