/**
 * 
 */
$().ready(function(){	
	$.post("news/list",{accessid:"2",pageIndex:"1"},function(res){
	    var dataList = res.data;
	    var newscenter = "";
	    var length = dataList.length;
	    var size = length/2;
	    for(var i=0;i<size;i++){	    	
	    	newscenter += "<div class='txt-column'>";
	    	for(var j=0; j<2; j++){
	    		var index = 2*i+j;
	    		var data = dataList[index];
	    		
	    		newscenter += "<a href='news.html?id="+data.id+"' class='dvb-txt clearfix' target='_blank'>";
		    	newscenter += "<div class='news-bg' style='background-image:url("+data.picPath+")'></div>";
		    	newscenter += "<div class='news-txt'>";
		    	newscenter += "<h3 class='min-h4'>"+data.title+"</h3>";
		    	newscenter += "<p class='min-p hidden-xs hidden-mxs hidden-sm'>";
		    	newscenter += "<span>新闻</span><span>"+data.releaseTime+"</span></p></div></a>";
	    		
	    	}
	    	newscenter += "</div>";
	    }

	    $("#newscenter").html(newscenter);
	    
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


