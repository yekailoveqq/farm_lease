package com.simple.farm.web.controller.merchant;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;

import com.github.pagehelper.Page;
import com.simple.farm.bean.common.PageBean;
import com.simple.farm.bean.merChant.FiledInfo;
import com.simple.farm.bean.merChant.MerchantInfo;
import com.simple.farm.bean.userInfo.UserFiledDetail;
import com.simple.farm.common.SpDateUtil;
import com.simple.farm.service.merChant.MerChantService;
import com.simple.farm.web.common.SpBindAnotation;

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
		pageInfo.setRows(page.getResult());
		pageInfo.setTotal(page.getTotal());
		return pageInfo;
	}
	
	
	/**
	 * 查询当前商家下的所有 地块
	 * @param merChantId
	 * @return
	 */
	@RequestMapping("/getFileds")
	public List<FiledInfo> getFiledsByMerChantId(int merChantId){
		 List<FiledInfo> result = merChantService.getFiledsByMerChantId(merChantId);
		 return result;
	}
	
	/**
	 * 地块锁定切换
	 * @param state 
	 * @param filedId
	 * @return
	 */
	@RequestMapping("/lockState")
	public boolean updateFiledState(String state,int filedId){
		return merChantService.changeFiledLockState(state,filedId);
	}
	
	
	/**
	 * 回撤锁定状态
	 * 
	 * @param merChantVo
	 */
	@RequestMapping(value = "/removeLockState",method=RequestMethod.POST)
	public int removeLockState(@SpBindAnotation List<Integer> ids){
		return merChantService.removeLockState(ids);
	}
	
	
	/**
	 * 返回租期选择界面数据
	 * @param ids
	 * @return
	 */
	@RequestMapping(value = "/showTermData",method=RequestMethod.POST)
	public List<Map<String , Object>> getFileTermGuiDate(@SpBindAnotation List<Integer> ids){
		List<FiledInfo> fileds = merChantService.getFiledInfos(ids);
		List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		if(fileds!=null&&fileds.size()>0){
			for(FiledInfo filed:fileds){
				Map<String, Object> o = new HashMap<String, Object>();
				o.put("id", filed.getId());	//编号
				o.put("size", filed.getSize()); //大小
				o.put("term", 1);	//租期 默认一个月
				o.put("price", filed.getPrice()); //价格
				o.put("del", "删除");
				result.add(o);
			}
		}
		return result;
	}
	
	
	@RequestMapping(value = "/finishedPay",method=RequestMethod.POST)
	public boolean finishPay(@SpBindAnotation List<Map<String, Object>> details,HttpServletRequest request) throws Exception{
		List<UserFiledDetail> userFiledDetails = new ArrayList<UserFiledDetail>();
		//获取当前登录用户 手机号
		String userPhone = (String) WebUtils.getSessionAttribute(request, "NOW_USER_PHONE");
		if(userPhone!=null&&details!=null&&details.size()>0){
			for(Map<String, Object> m:details){
				UserFiledDetail detail = new UserFiledDetail();
				detail.setFiledId((Integer) m.get("id"));
				detail.setTerm((Integer) m.get("term"));
				detail.setUserPhone(userPhone);
				detail.setPrice(Double.valueOf(m.get("price")+""));
				detail.setBeginTime(new Date());
				detail.setTotal(Double.valueOf( ((Integer) m.get("price")*(Integer) m.get("term"))+""));
				detail.setOeverTime(SpDateUtil.addDate(detail.getBeginTime(), 5, detail.getTerm()));
				userFiledDetails.add(detail);
			}
		}
		//调用接口保存 支付记录 和 用户交易环节
		return merChantService.finishedPay(userFiledDetails);
	}
	
}
