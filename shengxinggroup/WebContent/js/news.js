/**
 * 
 */
$().ready(function(){	
	var id = GetQueryString("id");
	$.post("news/findById",{id:id},function(res){
	    var data = res.data;
	    $("title").html(data.title);
	    $(".content-title").html(data.title);
	    $("#releaser").html(data.creater);
	    $("#releaseDate").html(convertToDate(data.createdTime));
	    $(".content-detail").html(data.content);
//	    $("#newsImage").attr("src",data.picPath);
	    var accessid= data.accessid;
	    if(accessid=="5"){
	    	$("#news").removeClass("active");
	    	$("#join").addClass("active");
	    }
	    
	    if($("nav").css('display')=="none"){
			$(".content-div img").attr("width","98%");
			$(".content-div img").attr("height","auto");
			$(".content-div img").css("display","block");
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

function convertToDate(millis){
	var date = new Date(millis);
	var year = date.getFullYear();
	var month= date.getMonth()+1;
	var day = date.getDate();
	
	if(month<10){
		month = "0"+month;
	}
	if(day<10){
		day ="0" + day;
	}

	return year+"-"+month+"-"+day;
}


