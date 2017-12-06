package com.simple.farm.service.merChant;

import java.util.List;

import com.github.pagehelper.Page;
import com.simple.farm.bean.common.PageBean;
import com.simple.farm.bean.merChant.MerchantInfo;

public interface MerChantService {

	/**
	 * 分页查询商家记录
	 * @param merChantInfo
	 * @param pageInfo
	 * @return
	 */
	Page<MerchantInfo> getMerChanInfoList(MerchantInfo merChantInfo,PageBean<MerchantInfo> pageInfo);
	
}
