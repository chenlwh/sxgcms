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
	
	var url = window.location.pathname;
	url = url.replace("/shengxinggroup","");
	url = url.replace("/","");
	$.post("tkd/findByUrl",{model:url},function(res){
	    var data = res.data;
	    $("title").html(data.title);	    
	    $("head").append("<meta name='description' content='"+data.description+"'>");
	    $("meta[name='keywords']").attr('content',data.keywords);
	    
	});
	


});




