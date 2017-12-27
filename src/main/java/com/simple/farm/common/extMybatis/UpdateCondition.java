package com.simple.farm.common.extMybatis;

import java.util.List;

public class UpdateCondition <T> {

	private T record;
	
	private List<String> cols;
	
	private List<String> wheres;

	public T getRecord() {
		return record;
	}

	public void setRecord(T record) {
		this.record = record;
	}

	public List<String> getCols() {
		return cols;
	}

	public void setCols(List<String> cols) {
		this.cols = cols;
	}

	public List<String> getWheres() {
		return wheres;
	}

	public void setWheres(List<String> wheres) {
		this.wheres = wheres;
	}
	
	
	
}
