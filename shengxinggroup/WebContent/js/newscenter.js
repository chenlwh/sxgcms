/**
 * 
 */
$().ready(function(){	
	$.post("news/list",{accessid:"2",pageIndex:"1"},function(res){
	    var dataList = res.data;
	    var newscenter = "";
	    var length = dataList.length;
	    var size = parseInt(length/2);
	    var index = 0;
	    for(var i=0;i<size;i++){	    	
	    	newscenter += "<div class='txt-column'>";
	    	for(var j=0; j<2; j++){
	    		index = 2*i+j;
	    		var data = dataList[index];
	    		
	    		if(j==0){
	    			newscenter += "<a href='news.html?id="+data.id+"' style='border-right: 1px solid #e1e1e1;' class='dvb-txt clearfix' target='_blank'>";
	    		}else{
	    			newscenter += "<a href='news.html?id="+data.id+"' style='padding-left:30px;' class='dvb-txt clearfix' target='_blank'>";
	    		}
		    	newscenter += "<div class='news-bg' style='background-image:url("+data.picPath+")'></div>";
		    	if(j==0){
		    		newscenter += "<div class='news-txt'>";
	    		}else{
	    			newscenter += "<div class='news-txt' style='padding-left:30px;'>";
	    		}
		    	newscenter += "<h3 class='min-h4'>"+data.title+"</h3>";
		    	newscenter += "<p class='min-p hidden-xs hidden-mxs hidden-sm'>";
		    	newscenter += "<span>新闻</span><span>"+convertToDate(data.releaseTime)+"</span></p></div></a>";
	    		
	    	}
	    	newscenter += "</div>";
	    }
	    index = index+1;
	    if(index<length){
	    	var data = dataList[length-1];
	    	newscenter += "<div class='txt-column' style='width:50%;'>";
	    	newscenter += "<a href='news.html?id="+data.id+"' style='border-right: 1px solid #e1e1e1;' class='dvb-txt clearfix' target='_blank'>";
	    	newscenter += "<div class='news-bg' style='background-image:url("+data.picPath+")'></div>";
		    newscenter += "<div class='news-txt'>";
	    	newscenter += "<h3 class='min-h4'>"+data.title+"</h3>";
		    newscenter += "<p class='min-p hidden-xs hidden-mxs hidden-sm'>";
		    newscenter += "<span>新闻</span><span>"+convertToDate(data.releaseTime)+"</span></p></div></a>";
	    	newscenter += "</div>";
	    }

	    $("#newscenter").html(newscenter);
	    
	    var newsmobile = "";
	    for(var i=0;i<length;i++){
	    	var data = dataList[i];
	    	
	    	newsmobile += "<a href='news.html?id="+data.id+"' class='picture clearfix'>";
	    	newsmobile += "<div class='news-pic' target='_blank' style='background-image:url("+data.picPath+")'></div>";
	    	newsmobile += "<div class='right-txt hidden-md hidden-lg' target='_blank'>";
	    	newsmobile += " <h3 class='min-h4'>"+data.title+"</h3>";	    	
	    	newsmobile += "<span class='introduce'><span>新闻</span><span>|</span><span>"+convertToDate(data.releaseTime)+"</span></span></div></a>";
	    }
	    
	    $("#newscenter_mobile").html(newsmobile);
    
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


