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
	})
}


/**
 * 初始化表格
 * tableId 表格id
 * columnsArray 列数组
 * queryParamsFunction 获取查询参数的方法
 */
common.initTable = function(tableId,columnsArray,url,queryParamsFunction){
	$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
	$(tableId).bootstrapTable({
		columns:columnsArray,
		pagination:true,
		search:true,
		contentType:'application/json',
		url:url,
		queryParams:queryParamsFunction,
		pageSize: 10,  
		pageNumber: 1,  
		pageList: [10, 20, 50, 100, 200, 500]  
		
	});
}