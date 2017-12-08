/**
 * 地块选择操作
 */
var chooseFile = new Object();

chooseFile.chooseChantId = '';	//记录当前选中的商家


/**
 * 弹出选择界面
 */
chooseFile.showModel = function(){
	//清空临时变量
	chooseFile.chooseChantId = '';
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
	chooseFile.forbidTab();
}


/**
 * 取消tab页切换
 */
chooseFile.forbidTab = function(){
	//阻止标签页手动切换
	$('a[role="tab"]').on('show.bs.tab', function(e) {
		  e.preventDefault();
		});
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
	common.initTable("#chooseFiled_shopper_table",cols,'/merchant/query',chooseFile.queryParams,chooseFile.clickRow);
	
	//注册表格点击事件
/*	$("#chooseFiled_shopper_table").on('click-row.bs.table', function (e, row, element){
		$('.success').removeClass('success');//去除之前选中的行的，选中样式
		$(element).addClass('success');//添加当前选中的 success样式用于区别
		var index = $('#formTempDetailTable_new').find('tr.success').data('index');//获得选中的行的id
		}); */
	
	
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

/**
 * 单击行触发的方法
 */
chooseFile.clickRow = function(row){
	chooseFile.chooseChantId = row.id;	//将当前选中的商家id赋值给临时变量
}

/**
 * 下一步操作内容
 */
chooseFile.next = function(step) {
	$('a[role="tab"]').unbind();
	switch (step) {
	case 1:
		if(chooseFile.chooseChantId==''){
			alert('请选择商家后进行下一步操作！')
		}
		else{
			//步骤跳转
			$(".chooseFiled_ystep").nextStep();
			//tab跳转下一个面板 地块选择
			$('a[href="#chooseFiled_field"]').tab('show');
			
			//开始设置可选地块界面
			chooseFile.initFieldBlock();
			
		}
		break;
	}
	chooseFile.forbidTab();
}




/**
 * 初始化地块
 */
chooseFile.initFieldBlock = function(){
	//后台查询当前商家的地块信息
	common.ajax('/merchant/getFileds','GET','merChantId='+chooseFile.chooseChantId,function(result){
		console.log(result);
		//根据返回结果创建map
		common.initFiledGui(result,8,"#filed_gui");
	});
}