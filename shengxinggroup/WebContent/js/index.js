window.onload=function(){
    var width=$(window).width();
    var height=$(window).height();
    set_video_rate(width, height, $(".video-container"));
    if ($("#video").length != 0) {
        document.getElementById('video').play();
    }
    
    $().ready(function(){	
    	$.post("introduce/list",{type:"4"},function(res){
    		var data = res.data;
    		if(data!=null){
    			$("#homeGroup").html(data.content);
    		}
    	});

    });
    
	var news_contaner=$(".news-background").height();
	var technology_contaner=$(".technology-picture").height();
	var about_container=$(".banner").height();
	setInterval(function (){ pull();},500);
	$(".scroll").css("margin-bottom",$(".advertisement").height());
	var num={"red":13,"orange":6,"yellow":8,"green":2,"grey":5,"blue":1};
	
	$.post("news/list",{accessid:"page3"},function(res){
	    var dataList = res.data;
	    var page3html = "";
	    var length = dataList.length;
	    if(length>5){
	    	length = 5;
	    }
	    for(var i=0;i<length;i++){
	    	var data = dataList[i];
	    	page3html += "<div class='production-model"+ (i+1)+" model'>";
	    	page3html += "<img src='"+data.picPath+"' class='img-responsive'>";
	    	page3html += "<div class='model-opacity'>";
	    	page3html += "<div class='opacity-text'>";
	    	page3html += "<h4 class='p'>"+data.title+"</h4>";
	    	page3html += "</div><img src='images/p_"+ (i+1)+".png'></div><div class='model-text top-model'>";
	    	page3html += "<h3 class='min-h3'>"+data.title+"</h3>";
	    	page3html += "<p>"+data.content.substring(0,45)+"</p>";
	    	page3html += "<a href='#'>查看更多 &gt;</a><img src='images/p_"+ (i+1)+"_red.png'></div></div>";
	    }
	    page3html +="<script>$('.production-container .model').click(function(e){" +
	    		"var show=$('.show'),bottom_model=$('.bottom-model');show.css('display','none');show.css('height','0');" +
	    		"show.css('width','0');bottom_model.css('top','100%');bottom_model.css('left','100%');show.removeClass('show');" +
	    		"if($(this).find('.model-text').hasClass('top-model')){" +
	    		"$(this).find('.model-text').stop().show().animate({'width':'200%','height':'200%'},400);" +
	    		"$(this).find('.model-text-mobile').stop().show().animate({'width':'300%','height':'300%'},400);" +
	    		"$(this).find('.model-text').addClass('show');" +
	    		"$(this).find('.model-text-mobile').addClass('show');" +
	    		"}else if($(this).find('.model-text').hasClass('bottom-model')){" +
	    		"$(this).find('.model-text').stop().show().animate({'width':'200%','height':'200%','top':'-100%','left':'-100%'},400);" +
	    		"$(this).find('.model-text-mobile').stop().show().animate({'width':'300%','height':'300%'},400);" +
	    		"$(this).find('.model-text').addClass('show');" +
	    		"$(this).find('.model-text-mobile').addClass('show');}e.stopPropagation();});</script>";
	    $("#page3content").html(page3html);
	    
	});
	
	$.post("news/list",{accessid:"page4"},function(res){
	    var dataList = res.data;
	    var page4html = "";
	    var length = dataList.length;
	    if(length>10){
	    	length = 10;
	    }
	    for(var i=0;i<length;i++){
	    	var data = dataList[i];
	    	page4html += "<a href='news.html?id="+data.id+"' class='news' style='display:block;background-image:url("+data.picPath+")' target='_blank'>";
	    	page4html += "<div class='news-opacity'><div class='opacity-txt'><div class='line'></div>";
	    	page4html += "<p>"+data.title+"</p></div></div></a>";
	    }

	    $("#page4news").html(page4html);
	    
	});	
	
	$(".map-container .button-list .button-column div").click(function () {
	    
		if($(this).hasClass("active")){
            $(this).removeClass("active");
            judge($(this),num,"none");
        }
        else{
            $(this).addClass("active");
            judge($(this),num,"block");
        }
		if($(".pagination-stop img").hasClass("start")){
		}else{
			setTimeout(function(){
			},3000);
		}
    });
	$(".left-button").click(function(){
			if($(".map-container .button-list .button-column div").hasClass("trans")){
			$(".map-container .button-list .button-column div").removeClass("trans");
			}
		});
	$(".right-button").click(function(){
			if(!$(".map-container .button-list .button-column div").hasClass("trans")){
			$(".map-container .button-list .button-column div").addClass("trans");
			}
	});
}
/*the animate of pull button*/
function pull(){
    var ys = $(".bottom-pull");
    $(ys).animate({"bottom":"10px"},1000).animate({"bottom":"30px"},1000);
}
$(window).resize(function () {
    var width=$(window).width();
    var height = $(window).height();
    $(".swiper-slide,.scroll,.news-container").width(width);
    $(".scroll,.news-container").height("auto!important");
    $(".navigation").css("top", "24px");
    $(".scroll").css("top", "0");
    $(".swiper-slide").css("transition-duration", "0");
    $(".swiper-slide").css("transform", "none");
    set_video_rate(width,height,$(".video-container"));
    document.getElementById('video').play();
    var news_contaner=$(".news-background").height();
    var technology_contaner=$(".technology-picture").height();
    var about_container=$(".banner").height();
    setInterval(function (){ pull();},500);
    $(".scroll").css("margin-bottom",$(".advertisement").height());
});
var judge=function(node,numObject,show){
    switch(node.index()){
        case 0: for(var i=1;i<=numObject.red;i++){
            $(".cut-box .red-"+i).css("display",show);
             }
            break;
        case 1:for(var i=1;i<=numObject.orange;i++){
            $(".cut-box .orange-"+i).css("display",show);
            }
            break;
        case 2:for(var i=1;i<=numObject.yellow;i++){
            $(".cut-box .yellow-"+i).css("display",show);
        }
            break;
        case 3:for(var i=1;i<=numObject.green;i++){
            $(".cut-box .green-"+i).css("display",show);
        }
            break;
        case 4:for(var i=1;i<=numObject.grey;i++){
            $(".cut-box .grey-"+i).css("display",show);
        }
            break;
        case 5:for(var i=1;i<=numObject.blue;i++){
            $(".cut-box .blue-"+i).css("display",show);
        }
            break;
    }
}

var set_video_rate=function(width,height,node){
    node.height(height);
    node.width(height*1920/1080);
    var pwidth=node.width();
    var pheight=node.height();
    cut_background(pwidth,pheight,width,height,1920/1080,node);
}
var set_picture_rate=function(width,height,node){
    var imgSrc = node.attr("src");
    getImageWidth(node,imgSrc,function(w,h,node){
        var c=w/h;
        node.height(height);
        node.width(height*c);
        var pwidth=node.width();
        var pheight=node.height();
        cut_background(pwidth,pheight,width,height,c,node);
    });
}
/*获取图片真实的高度和宽度*/
function getImageWidth(node,url,callback){
    var img = new Image();
    img.src = url;
    // 完全加载完毕的事件
    img.onload = function(){
        callback(img.width, img.height,node);
    }
}
/*对图片进行裁切*/
var cut_background=function(pwidth,pheight,width,height,c,node){
    if(width>=pwidth){
        node.width(width);
        node.height(width/c);
        node.css("left",0);
    }
    else if(width<pwidth){
        var w=(pwidth-width)/2;
        node.css("left",-w);
    }
}
$(".button-column .menu-button").click(function(){
    $(".list").show().animate({"height":"100%"},500);
});
$(".close-button").click(function(){
    $(".list").animate({"height":"0px"},500,function(){$(this).hide();});
});
$(".search-button").click(function(){
    $(this).hide();
    $(".list-container").hide();
    $(".list .list-search").show();
});
$(".list .scroll-button").click(function(){
    $(".list .list-search").hide();
    $(".search-button,.list-container").show();
});
function set_height(height,node,bottom,rate){
/*    console.log(height);*/
    node.height(height-bottom);
    node.width(height*rate);
}