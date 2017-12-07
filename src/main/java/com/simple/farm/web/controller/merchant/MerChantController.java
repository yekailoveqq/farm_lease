package com.simple.farm.web.controller.merchant;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.Page;
import com.simple.farm.bean.common.PageBean;
import com.simple.farm.bean.merChant.FiledInfo;
import com.simple.farm.bean.merChant.MerchantInfo;
import com.simple.farm.service.merChant.MerChantService;

/**
 * 
 * @author geliang
 * 商家服务管理controller
 */
@RestController
@RequestMapping("/merchant")
public class MerChantController {

	@Autowired
	private MerChantService merChantService;
 	
	@RequestMapping("/query")
	public PageBean<MerchantInfo> queryList(MerchantInfo merChantInfo,PageBean<MerchantInfo> pageInfo){
		Page<MerchantInfo> page = merChantService.getMerChanInfoList(merChantInfo, pageInfo);
		pageInfo.setData(page.getResult());
		return pageInfo;
	}
	
	
	/**
	 * 查询当前商家下的所有 地块
	 * @param merChantId
	 * @return
	 */
	@RequestMapping("/getFileds")
	public List<FiledInfo> getFiledsByMerChantId(int merChantId){
		return null;
	}
	
	
}
