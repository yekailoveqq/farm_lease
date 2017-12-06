/**
 * 地块选择操作
 */
var chooseFile = new Object();

/**
 * 弹出选择界面
 */
chooseFile.showModel = function(){
	//没有加载
	if(!$("#chooseFieldModal").length>0){
		common.loadHtmlToBody("#indexBody","/pages/business/chooseField.html");
	}
	$('#chooseFieldModal').modal('show');
	
	//注册模态框 用户可见时候的事件
	$('#chooseFieldModal').on('shown.bs.modal',function(){
		//是否初始化步骤条
		if($('.chooseFiled_ystep > .ystep-container').length>0){
			 $(".chooseFiled_ystep").setStep(1);
		}
		else{
			//设置步骤显示
		    $(".chooseFiled_ystep").loadStep({
		        //ystep的外观大小
		        //可选值：small,large
		        size: "large",
		        //ystep配色方案
		        //可选值：green,blue
		        color: "green",
		        //ystep中包含的步骤
		        steps: [{
		          //步骤名称
		          title: "商家过滤"
		        },{
		          title: "选定地块"
		        },{
		          title: "租期选址"
		        },{
		          title: "支付"
		        }]
		      });
		}

	});
	
	//初始化表格
	chooseFile.initTable();
}


/**
 * 初始化表格
 */
chooseFile.initTable = function(){
	//设置列
	var cols = new Array();
	cols.push({field:'merchantName',title:'商家名字'});
	cols.push({field:'merchantAddress',title:'详细地址'});
	cols.push({field:'merchantFieldSize',title:'占地面积'});
	cols.push({field:'merchantPhone',title:'联系电话'});
	common.initTable("#chooseFiled_shopper_table",cols,'/merchant/query',chooseFile.queryParams);
}

/**
 * 获取查询条件
 */
chooseFile.queryParams = function(queryParams){
	queryParams.provice = $("#chooseFiled_provice").val();
	queryParams.city = $("#chooseFiled_city").val();
	queryParams.town = $("#chooseFiled_town").val();
	return queryParams;
}

/**
 * 点击查询时候 从新查询表格内容
 */
chooseFile.buttonQuery = function(){
	$("#chooseFiled_shopper_table").bootstrapTable('refresh', {});
}