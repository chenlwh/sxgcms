$().ready(function(){	
	$.post("../introduce/list",{type:$("#type").val()},function(res){
		var data = res.data;
		if(data!=null){
			$("#id").val(data.id);
//			editor.setContent(data.content);
		    editor.ready(function() {
		    	editor.setContent(data.content);
		    },2);
		}
	});

});
