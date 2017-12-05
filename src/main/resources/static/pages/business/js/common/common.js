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
 */
common.initTable = function(tableId,columnsArray){
	$('#table').bootstrapTable({
		columns:columnsArray,
		pagination:true,
		search:true
		
	});
}