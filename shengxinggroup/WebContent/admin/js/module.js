$().ready(function(){	
	initUserTable();
	
	list();
	
	$("#new").click(function(){
		$("#contentFrame", parent.document).attr("src","../admin/addModule.html");  
	});
	
	$("#edit").click(function(){
		var row = $('#dg').datagrid('getSelected');
		if (row){
			$("#contentFrame", parent.document).attr("src","../admin/addModule.html?id="+row.id);  
		}else{
			$('#messageContent').html("请选择修改的版块");
			$('#message').dialog('open').dialog('setTitle','提示');
		}
	});
	
	$("#delete").click(function(){
		var row = $('#dg').datagrid('getSelected');
		if (row){
			$.messager.confirm('确认','确定删除该版块吗?',function(r){
				if (r){
					$.post('../module/delete',{id:row.id},function(result){
						if (result.suc=="yes"){
							list();
						} else {
							$.messager.show({	// show error message
								title: 'Error',
								msg: result.msg
							});
						}
					},'json');
				}
			});
		}else{
			$('#messageContent').html("请选择删除版块");
			$('#message').dialog('open').dialog('setTitle','提示');
		}
	});

});

function list(){
	$.post("../module/list",{},function(res){
	    var data = res.data;
	    $("#dg").datagrid("loadData",data);
	});
}

function initUserTable(){
	$("#dg").datagrid({
		maxHeight: 500,
		striped:true,
		fitColumns: true,
		rownumbers: true,
		singleSelect:true,
		loadMsg: '正在加载，请稍候...',
		rowStyler: function(index, row) {},
		columns:[[
			{field:"id",title:"id",hidden:true},
			{field:"title",title:"标题",width:"25%"},
			{field:"series",title:"排序",width:"5%"},
			{field:"content",title:"简介",width:"70%"}
		]]
	});
}