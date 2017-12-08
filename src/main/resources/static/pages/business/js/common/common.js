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
common.ajax = function(url,type,data,successFunction,errorFunction){
	$.ajax({
		   type: type,
		   url: url,
		   data: data,
		   success:successFunction,
		   error:errorFunction==null?function(e){
			   alert('ajax调用错误,'+e);
		   }:errorFunction
		});
}



/**
 * 创建地块选择界面
 * fileds 地块集合
 * colNum 需要划分的列数量
 */
common.initFiledGui = function(fileds,colNum,containerId){
	var tArray = new Array();
	//计算需要多少行
	var h = Math.ceil(fileds.length/colNum);	//向上取整
	for(var i = 0;i<h;i++){
		var hArray ="";
//		var hArray = new Array();
		for(var j = 0;j<colNum;j++){
			var index = i*colNum+j;
			if(index<fileds.length){
//				hArray.push(fileds[index]);
				hArray= hArray+'a';
			}
			else{
				hArray= hArray+'_';
			}
		}
		
//		tArray.push(hArray.toString());
		tArray.push(hArray);
	}
	var sc = $(containerId).seatCharts({
		map: tArray,
		naming  : {
			top    : false,
			left   : false,
			getId  : function(character, row, column) {
				return row + '_' + column;
			},
			getLabel : function (character, row, column) {
				//return column;
				return (row-1)*8+column;
			}
			
		}
		
	});
}