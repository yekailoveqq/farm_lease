package com.simple.farm.common.extMybatis;

import org.apache.ibatis.jdbc.SQL;

import com.simple.farm.common.SpStringUtil;

public class SpExtDaoSqlProvider{

    public <T> String spUpdate(final UpdateCondition<T> updateCondition) {
    	SQL sql = new SQL(){
    		{  
                UPDATE(SpStringUtil.camel2Underline(updateCondition.getRecord().getClass().getSimpleName()));  
                for(String col:updateCondition.getCols()){
                	SET(SpStringUtil.camel2Underline(col)+" = #{record."+col+"}");  
            	}
                for(String condition:updateCondition.getWheres()){
                	WHERE(SpStringUtil.camel2Underline(condition)+" = #{record."+condition+"}");  
            	}
            }  
    	};
    	return sql.toString();
    	/*
        StringBuilder sql = new StringBuilder();
        //添加表头
        sql.append(SqlHelper.updateTable(t.getClass(), SpStringUtil.camel2Underline(t.getClass().getSimpleName()),t.getClass().toString()));
        //设置修改项目
        if(cols!=null&&cols.size()>0){
        	sql.append("<set> ");
        	for(String col:cols){
        		sql.append(SpStringUtil.camel2Underline(col)+" = #{"+col+"},");
        	}
        	sql.append(" </set>");
        }
        //设置条件
		if (conditions != null && conditions.size() > 0) {
			sql.append("<where> ");
			for(String condition:conditions){
        		sql.append("and "+SpStringUtil.camel2Underline(condition)+" = #{"+condition+"}");
        	}
			sql.append(" </where>");
		}
        return sql.toString();*/
    }
}
