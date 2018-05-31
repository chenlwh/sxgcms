/**
 * 
 */
$().ready(function() {
	
	var series = [ {
		"id" : "1",
		"text" : "1"
	}, {
		"id" : "2",
		"text" : "2"
	}, {
		"id" : "3",
		"text" : "3"
	}, {
		"id" : "4",
		"text" : "4"
	} , {
		"id" : "5",
		"text" : "5"
	} , {
		"id" : "6",
		"text" : "6"
	} , {
		"id" : "7",
		"text" : "7"
	} , {
		"id" : "8",
		"text" : "8"
	} ];
	$("#series").combobox("loadData", series);
	
//	$("#accessid").combobox("setValue", "newscenter.html");
	
	
	var id = GetQueryString("id");
	$.post("../module/findById",{id:id},function(res){
	    var data = res.data;
	    if(data){
		    $("#id").val(data.id);
//		    $("#accessid").combobox("setValue", data.accessid);
		    $("#title").val(data.title);
		    $("#introduce").val(data.introduce);
		    editor.setContent(data.content);
//		    $("#imageFile").val(data.picPath);
		    $("#series").combobox("setValue", data.series);
	    }
	});

});

function GetQueryString(param){
	var reg = new RegExp("(^|&)"+ param +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null){
		return unescape(r[2]);
	}else{
		return null;
	}
}
