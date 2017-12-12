/**
 * 地块选择操作
 */
var chooseFile = new Object();

chooseFile.chooseChantId = '';	//记录当前选中的商家

chooseFile.chooseFiledList = new Array();

chooseFile.sc = new Object();

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
 *返回上一步
 */
chooseFile.pre = function(step){
	switch (step) {
	//返回商家选择
	case 1:
		var showTabId = 'a[href="#chooseFiled_shopper"]';
		//存在锁定地块 先清理状态
		if(chooseFile.sc.find("a.selected").length>0){
			//当前选中的ids
			var obj = new Object();
			obj.ids = chooseFile.sc.find("a.selected").seatIds;
			common.ajax("/merchant/removeLockState","POST",JSON.stringify(obj.ids),function(result){
				//修改状态
				/*$.each(obj.ids, function(i, v){
					chooseFile.sc.status(v, 'available');
					});*/
				chooseFile.sc.find('a.selected').status('available')
				
				$(".chooseFiled_ystep").prevStep();	//回撤步骤
				//显示tab页面
				chooseFile.showTab(showTabId);
			});
		}
		else{
			$(".chooseFiled_ystep").prevStep();
			chooseFile.showTab(showTabId);
		}
		break;
	}
	
	
}

/**
 * 显示tab页面
 */
chooseFile.showTab = function(id){
	$('a[role="tab"]').unbind();
	$(id).tab('show');
	chooseFile.forbidTab();
}




/**
 * 下一步操作内容
 */
chooseFile.next = function(step) {
	$('a[role="tab"]').unbind();
	switch (step) {
	case 1:
		if(chooseFile.chooseChantId==''){
			alert('请选择商家后进行下一步操作！');
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
		
	case 2:
		//判断是否有选择
		if(chooseFile.sc.find("a.selected").length<=0){
			alert('请选择地块！')
		}
		//有选择 进入下一步
		else{
			$(".chooseFiled_ystep").nextStep();
			$('a[href="#chooseFiled_term"]').tab('show');
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
//		console.log(result);
		//根据返回结果创建map
		chooseFile.initFiledGui(result,20,"#filed_gui");
	});
}

/**
 * 创建地块选择界面
 * fileds 地块集合
 * colNum 需要划分的列数量
 */
chooseFile.initFiledGui = function(fileds,colNum,containerId){
	var tArray = new Array();	//map映射图
	var tArrayData = new Array(); //map映射数据

	var seatsSet = new Object();
	//计算需要多少行
	var h = Math.ceil(fileds.length/colNum);	//向上取整
	for(var i = 0;i<h;i++){
		var hArrayStr ="";
		var hArray = new Array();
		for(var j = 0;j<colNum;j++){
			var index = i*colNum+j;
			if(index<fileds.length){
				hArray.push(fileds[index]);	//映射数据添加
				//判断当前地块状态
				if(fileds[index].state=='0'){
					hArrayStr= hArrayStr+'a';
				}
				if(fileds[index].state=='1'){
					hArrayStr= hArrayStr+'b';
				}
				if(fileds[index].state=='2'){
					hArrayStr= hArrayStr+'c';
				}
			}
			else{
				hArrayStr= hArrayStr+'_';
			}
		}
		tArrayData.push(hArray);
		tArray.push(hArrayStr);
	}
	chooseFile.sc = $(containerId).seatCharts({
		map: tArray,
		naming  : {
			top    : false,
			left   : false,
			getId  : function(character, row, column) {
				//return row + '_' + column;
				var selectItem = tArrayData[parseInt(row-1)][parseInt(column-1)];
				return selectItem.id;
				//return selectItem;
//				return {'row':row,'column':column};
			},
			getLabel : function (character, row, column) {
				return (row-1)*colNum+column;
			}
			
		},
		seats: {
			a: {
				classes : 'first-class'
			},
			b: {
				classes : 'second-class'
			},
			c: {
				classes : 'three-class'
			},
			
		},
		/*legend : {
			//node : $('#choose_filed_gui_legend'),
		    items : [
				[ 'a', 'available', '可选'],
				[ 'b', 'unavailable','在租'],
				[ 'c', 'unavailable','锁定']
		    ]					
		},*/
		click: function () {
			//var indexStr = this.settings.id;
			//var indexArray = indexStr.split('_');
			var selectItem = chooseFile.getItemById(this.settings.id,fileds);
			var result = "";
			if (this.status() == 'available') {
				chooseFile.showFiledInfo(selectItem);	//显示当前选中内容的状态
				result = 'selected';
//				alert(this.settings.id);
				//请求后台 设置状态
				common.ajax('/merchant/lockState','GET',{"state":"1","filedId":selectItem.id},function(aresult){
					//设置返回结果
					if(aresult){	//锁定成功
						result = "selected";
						selectItem.state = '1';
					}
					else{
						result = "available";
					}
					
				},null,false);
				//选择可选 地块 后台请求锁定成功后 返回 
			} else if (this.status() == 'selected') {
				//后台释放锁定内容
				result = 'available';
				//var selectItem =  this.settings.id;
				//请求后台 设置状态
				common.ajax('/merchant/lockState','GET',{"state":"0","filedId":selectItem.id},function(aresult){
					//设置返回结果
					if(aresult){	//解开锁成功
						result = "available";
						selectItem.state = '0';
					}
					else{
						result = "selected";
					}
					
				},null,false);
				chooseFile.showFiledInfo(selectItem);	//显示当前选中内容的状态
			} else if (this.status() == 'unavailable') {
				chooseFile.showFiledInfo(selectItem);	//显示当前选中内容的状态
				result =  'unavailable';
			} else {
				return this.style();
			}
			return result;
		}
	});
	chooseFile.sc.find('b.available').status('unavailable');
	chooseFile.sc.find('c.available').status('unavailable');
}

/**
 * 根据id 获取具体的选中元素
 */
chooseFile.getItemById = function(id,items){
	
	for(var i = 0;i<items.length;i++){
		if(items[i].id == id){
			return items[i];
		}
	}
	
/*	
	$.each(items, function(k, v){
		  if(v.id==id){
			  return v;
		  }
		});*/
	
}



/**
 * 点击显示选中的地块信息
 */
chooseFile.showFiledInfo = function(obj){
	$("td[name='chooseField_showFieldInfo']").empty();
	var linkD = $("<a>点击查看</a>");
	linkD.attr('href',obj.monitorurl);
	$("td[name='chooseField_showFieldInfo']")[0].append(obj.id);
	$("td[name='chooseField_showFieldInfo']")[1].append(linkD[0]);
	$("td[name='chooseField_showFieldInfo']")[2].append(obj.size);
	$("td[name='chooseField_showFieldInfo']")[3].append(obj.state);
}


