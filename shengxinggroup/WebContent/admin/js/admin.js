/**
 * 
 */
$().ready(function(){
	$.post("../user/user",{},function(res){
	    var data = res.data;
	    if(data.type!="0"){
	    	$("#userLi").css("display","none");
	    }
	});

});

$("#admin_menu a").click(function() {
	var id = this.id;
	var action = $(this).attr("action");
	$("#admin_menu .active").removeAttr('class');
	$(this).parent().addClass("active");
	$(this).parent().parent().parent().addClass("active");
	if(action!="no"){
//		$("#contentDiv").load("../admin/"+id+".html");
		$("#contentFrame").attr("src","../admin/"+id+".html");  
	}
	
});

$("#user").parent().addClass("active");
$("#user").parent().parent().parent().addClass("active");


