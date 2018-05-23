/**
 * 
 */
$().ready(function(){	
	$.post("news/list",{accessid:"4",pageIndex:"1"},function(res){
	    var dataList = res.data;
	    var newscenter = "";
	    var length = dataList.length;

	    for(var i=0;i<length;i++){	
	    	var data = dataList[i];	
	    	newscenter += "<div class='list-item'>";
	    	newscenter += "<a href='news.html?id="+data.id+"' class='item-small' target='_blank'>";
	    	newscenter += "<p class='p-time'>"+convertToDate(data.releaseTime)+"</p>";
	    	newscenter += "<p class='p-title' style='text-decoration: none;'>"+data.title+"</p>";
	    	newscenter += "<p class='p-type'><span class='span-type'>重要公告</span>来自 <span class='span-from'>"+data.creater+"</span></p>";
	    	newscenter += "</a></div>";
	    }

	    $("#researchList").html(newscenter);
	    
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


