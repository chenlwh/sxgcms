/**
 * 
 */
$().ready(function(){	
	$.post("footer/list",{},function(res){
		var data = res.data;
		if(data!=null){
			$("#homeAddress").html(data.address);
			$("#homeContract").html(data.contract);
			$("#homeEmail").html(data.email);
			$("#homeCopyRight").html(data.copyright);
		}
	});
	


});




