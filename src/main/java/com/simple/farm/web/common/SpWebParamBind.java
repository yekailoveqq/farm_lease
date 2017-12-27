package com.simple.farm.web.common;

import java.util.List;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.IOUtils;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.alibaba.fastjson.JSONObject;

public class SpWebParamBind implements HandlerMethodArgumentResolver{

	@Override
	public Object resolveArgument(MethodParameter parameter,
            ModelAndViewContainer mavContainer,
            NativeWebRequest nativeWebRequest,
            WebDataBinderFactory binderFactory) throws Exception {
//		parameter.getAnnotatedElement()
		String typeName = parameter.getGenericParameterType().getTypeName();
		ServletInputStream inputStream = nativeWebRequest.getNativeRequest(HttpServletRequest.class).getInputStream();  
		String jsonObj = IOUtils.toString(inputStream);  
		/*if(parameter.getParameterAnnotation(SpBindValue.class)!=null){
			SpBindValue spValue = parameter.getParameterAnnotation(SpBindValue.class);
			return JSONObject.parseObject(jsonObj).get(spValue.value());
		}*/

		//list类型
		if(typeName.contains("List")){
			return JSONObject.parseObject(jsonObj, List.class);
		}
		//parameter.getClass()
		return null;
	}

	@Override
	public boolean supportsParameter(MethodParameter method) {
		if(method.getParameterAnnotation(SpBindAnotation.class)!=null){
			return true;
		}
		return false;
	}

}
