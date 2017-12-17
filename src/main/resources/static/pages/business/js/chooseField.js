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
		
	case 2:
		var showTabId = 'a[href="#chooseFiled_field"]';
		$(".chooseFiled_ystep").prevStep();
		chooseFile.showTab(showTabId);
		break;
		
		
	case 3:
		var showTabId = 'a[href="#chooseFiled_term"]';
		$(".chooseFiled_ystep").prevStep();
		chooseFile.showTab(showTabId);
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
	switch (step) {
	case 1:
		if(chooseFile.chooseChantId==''){
			alert('请选择商家后进行下一步操作！');
		}
		else{
			//步骤跳转
			$(".chooseFiled_ystep").nextStep();
			//tab跳转下一个面板 地块选择
			chooseFile.showTab('a[href="#chooseFiled_field"]');
			
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
			//初始化选择地块和租期选择
			chooseFile.initTermGui();
			chooseFile.showTab('a[href="#chooseFiled_term"]');
			$('#chooseFiled_term_table').bootstrapTable('refresh');
			//chooseFile.caculateMoney();

		}
		break;
	
	case 3:
		$(".chooseFiled_ystep").nextStep();
		chooseFile.showTab('a[href="#chooseFiled_finishd"]');
		break;
	}
}


/**
 * 初始化租期选择界面
 */
chooseFile.initTermGui = function(){
	//先清空表格内容
	//$('#chooseFiled_term_table').bootstrapTable('removeAll');
	var obj = new Object();
	obj.url = '/merchant/showTermData';
	obj.method = 'post';
	//obj.showFooter = true;
	
	var cols = new Array();
	cols.push({field:'id',title:'地块编号',footerFormatter:function(datas){
		return "总计";
	}});
	cols.push({field:'size',title:'地块大小',footerFormatter:function(datas){
		var allSize = 0;
		$.each(datas,function(k,v){
			allSize = allSize+v.size;
		});
		return allSize;
	}});
	/*cols.push({field:'term',title:'租期',formatter:function(value,row,index){
		return "<input type='number' min='1' value="+value+" change=chooseFile.caculateMoney()></input>";
	}});*/
	
	cols.push({field:'term',title:'租期',editable:{type:'number',defaultValue:1,mode:"inline",validate:function(value){
		if(value<0){
			alert("租期不能小于1个月");
			value = 1;
		}
		
	}}});
	cols.push({field:'del',title:'操作',formatter:function(value,row,index){
		return "<a href='#' onclick='chooseFile.delRow("+row.id+")'>删除</a>";
	}});
	obj.columns = cols;
	obj.pagination = false;
	obj.queryParams = function(params) {
		return chooseFile.sc.find("a.selected").seatIds;
	},
	common.initTableWithOption("#chooseFiled_term_table",obj);
	$("#chooseFiled_term_table").on("editable-save.bs.table",function(field, row, oldValue, $el) {
		chooseFile.caculateMoney();
//        return false;
    });
	
	//
	$("#chooseFiled_term_table").on("load-success.bs.table",function(data) {
		chooseFile.caculateMoney();
//        return false;
    });
}

/**
 * 计算总金额
 */
chooseFile.caculateMoney = function(){
	var allPrice = 0;
	var allDatas = $("#chooseFiled_term_table").bootstrapTable('getData');
	$.each(allDatas,function(k,v){
		allPrice = allPrice+v.term*v.size*3;
	});
	$("p[name='chooseFile_showPrice']").empty();
	$("p[name='chooseFile_showPrice']").append("总金额为:"+allPrice+"元");
}




/**
 * 删除行
 */
chooseFile.delRow = function(idValue){
	var o = new Object();
	o.field = "id";
	o.values = [idValue];
	if($("#chooseFiled_term_table").bootstrapTable('getData').length<=1){
		alert("至少选择一个地块!");
	}
	else{
		$("#chooseFiled_term_table").bootstrapTable('remove', o);
		//同时清除锁定状态
		common.ajax("/merchant/removeLockState","POST",JSON.stringify(o.values),function(result){
			//修改状态
			/*$.each(obj.ids, function(i, v){
				chooseFile.sc.status(v, 'available');
				});*/
			
			$.each(chooseFile.sc.find('a.selected').seats,function(k,v){
				if(v.settings.id==idValue){
					v.status('available');
				}
			});			
		});	
	}
	chooseFile.caculateMoney();
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


