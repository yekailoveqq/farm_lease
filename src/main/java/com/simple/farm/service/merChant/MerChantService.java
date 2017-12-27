package com.simple.farm.service.merChant;

import java.util.List;
import java.util.Map;

import com.github.pagehelper.Page;
import com.simple.farm.bean.common.PageBean;
import com.simple.farm.bean.merChant.FiledInfo;
import com.simple.farm.bean.merChant.MerchantInfo;

public interface MerChantService {

	/**
	 * 分页查询商家记录
	 * @param merChantInfo
	 * @param pageInfo
	 * @return
	 */
	Page<MerchantInfo> getMerChanInfoList(MerchantInfo merChantInfo,PageBean<MerchantInfo> pageInfo);
	
	/**
	 * 根据商家id 获取当前商家的所有地块信息
	 * @param merChantId
	 * @return
	 */
	List<FiledInfo> getFiledsByMerChantId(int merChantId);
	
	/**
	 * 地块锁定状态的切换
	 * @param state
	 * @param filedId
	 * @return
	 */
	boolean changeFiledLockState(String state,int filedId);
	
	/**
	 * 根据id 修改 锁定的状态 回撤为可选
	 * @param ids
	 * @return
	 */
	int removeLockState(List<Integer> ids);
	
	/**
	 * 根据地块id集合获取地块详细信息
	 * @param ids
	 * @return
	 */
	List<FiledInfo> getFiledInfos(List<Integer> ids);
	
	
//	boolean finishedPay()
	
}
