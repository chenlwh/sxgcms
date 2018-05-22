/**
 * 
 */
$().ready(function() {

	var menu = [ {
		"id" : "2",
		"text" : "新闻"
	}, {
		"id" : "3",
		"text" : "公告"
	}, {
		"id" : "4",
		"text" : "研究"
	}, {
		"id" : "5",
		"text" : "人才招聘"
	} ];
	$("#accessid").combobox("loadData", menu);
	
	$("#accessid").val("2");
	
	$.post("../module/findById",{accessid:$("#accessid").val()},function(res){
	    var data = res.data;
	    $("#id").val(data.id);
	    $("#accessid").combobox("setValue", data.accessid);
	    $("#title").val(data.title);
	    $("#content").val(data.content);
//	    $("#imageFile").val(data.picPath);
	    
	    
	});
	
	$("#accessid").combobox({
		onChange: function (n,o) {
			$.post("../module/findById",{accessid:$("#accessid").val()},function(res){
			    var data = res.data;
			    $("#id").val(data.id);
			    $("#accessid").combobox("setValue", data.accessid);
			    $("#title").val(data.title);
			    $("#content").val(data.content);
//			    $("#imageFile").val(data.picPath);
			});
		}
	});

});
