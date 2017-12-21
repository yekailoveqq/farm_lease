/**
 *  公用js
 */
var common = new Object();

/**
 * 加载html文件到body中
 */
common.loadHtmlToBody = function(id,path) {
	$.ajax({
		url : path,
		global : false,
		type : "GET",
		dataType : "html",
		async : false,
		success : function(data) {
			//加载到页面
			$(id).append(data);
		}
	});
}



/**
 * 根据自定义设置的参数 初始化表格
 */
common.initTableWithOption = function(tableId,opration){
	$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
	var initOperation = new Object();
	initOperation.pagination = true;
	initOperation.search = false;
	initOperation.contentType = 'application/json';
	initOperation.pageSize = 5;
	initOperation.pageNumber = 1;
	initOperation.pageList = [5,10, 20, 50, 100, 200, 500];
	$.extend(opration, initOperation);//合并自定义属性 和 默认属性
	$(tableId).bootstrapTable(opration);
}

/**
 * 初始化表格
 * tableId 表格id
 * columnsArray 列数组
 * queryParamsFunction 获取查询参数的方法
 */
common.initTable = function(tableId,columnsArray,url,queryParamsFunction,clickFunction){
	$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
	$(tableId).bootstrapTable({
		columns:columnsArray,
		pagination:true,
		search:false,
		contentType:'application/json',
		url:url,
		queryParams:queryParamsFunction,
		pageSize: 5,  
		pageNumber: 1,  
		pageList: [5,10, 20, 50, 100, 200, 500],
		height:'350px'
	});
	//鼠标点击行事件
	$(tableId).on('click-row.bs.table', function (e, row, element){
		$('tr.success').removeClass('success');//去除之前选中的行的，选中样式
		$(element).addClass('success');//添加当前选中的 success样式用于区别
		//var index = $('#formTempDetailTable_new').find('tr.success').data('index');//获得选中的行的id
		//执行单击行触发的方法
		if(clickFunction!=null){
			clickFunction(row);
		}
	}); 
}

/**
 * 封装ajax调用方法
 */
common.ajax = function(url,type,data,successFunction,errorFunction,isasync,contentType){
	$.ajax({
		   type: type,
		   url: url,
		   //contentType:"application/json",
		   data: data,
		   traditional: true,
		   contentType:contentType==null?"application/json":contentType,
		   async:isasync==null?true:isasync,
		   success:successFunction,
		   error:errorFunction==null?function(e){
			   alert('ajax调用错误,'+e);
		   }:errorFunction
		});
}
