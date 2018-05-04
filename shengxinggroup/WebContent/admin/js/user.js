/**
 * 
 */
$().ready(function(){	
	initUserTable();
	
	list();
	
	$("#new").click(function(){
		$('#dlg').dialog('open').dialog('setTitle','新建');
		$('#fm').form('clear');
	});

});

function list(){
	$.post("../user/list",{},function(res){
	    var data = res.data;
	    $("#dg").datagrid("loadData",data);
	});
}

function saveUser(){	
	$('#fm').form('submit',{
		url: '../user/save',
		onSubmit: function(){
			return $(this).form('validate');
		},
		success: function(result){
			var result = eval('('+result+')');
			if (result.suc=="yes"){
				$('#dlg').dialog('close');		// close the dialog
				list();
			} else {
				$.messager.show({
					title: 'Error',
					msg: result.msg
				});
			}
		}
	});
}

function editUser(){
	var row = $('#dg').datagrid('getSelected');
	if (row){
		$('#dlg').dialog('open').dialog('setTitle','修改');
		$('#fm').form('load',row);
	}else{		
		$('#messageContent').html("请选择编辑用户");
		$('#message').dialog('open').dialog('setTitle','提示');
	}
}

function removeUser(){
	var row = $('#dg').datagrid('getSelected');
	if (row){
		$.messager.confirm('确认','确定删除该用户吗?',function(r){
			if (r){
				$.post('../user/delete',{id:row.id},function(result){
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
		$('#messageContent').html("请选择删除用户");
		$('#message').dialog('open').dialog('setTitle','提示');
	}
	
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
			{field:"username",title:"用户名",width:"20%"},
			{field:"password",title:"密码",width:"20%"},
			{field:"createdTime",title:"创建时间",width:"20%"},
			{field:"showname",title:"别名",width:"20%"},
			{field:"accessid",title:"权限",width:"20%"}
		]]
	});
}


