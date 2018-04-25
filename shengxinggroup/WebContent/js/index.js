/**
 * Created by Pactera on 2017/5/12.
 */
window.onload=function(){
    var width=$(window).width();
    var height=$(window).height();
    set_video_rate(width, height, $(".video-container"));
    if ($("#video").length != 0) {
        document.getElementById('video').play();
    }
	var news_contaner=$(".news-background").height();
	var technology_contaner=$(".technology-picture").height();
	var about_container=$(".banner").height();
	set_picture_rate(width, height, $(".cut-background"));
	set_picture_rate(width, height, $(".cut-bg"));
	set_picture_rate(width,news_contaner,$(".news-bg"));
	set_picture_rate(width,technology_contaner,$(".cut-technology"));
	set_picture_rate(width,about_container,$(".cut-about"));
	setInterval(function (){ pull();},500);
	$(".scroll").css("margin-bottom",$(".advertisement").height());
	var num={"red":13,"orange":6,"yellow":8,"green":2,"grey":5,"blue":1};
	$(".map-container .button-list .button-column div").click(function () {
	    
        mySwiper2.stopAutoplay();
		if($(this).hasClass("active")){
            $(this).removeClass("active");
            judge($(this),num,"none");
        }
        else{
            $(this).addClass("active");
            judge($(this),num,"block");
        }
		if($(".pagination-stop img").hasClass("start")){
			mySwiper2.stopAutoplay();
		}else{
			setTimeout(function(){
				mySwiper2.startAutoplay();
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
    mySwiper2.reInit();
    set_video_rate(width,height,$(".video-container"));
    document.getElementById('video').play();
    var news_contaner=$(".news-background").height();
    var technology_contaner=$(".technology-picture").height();
    var about_container=$(".banner").height();
    set_picture_rate(width, height, $(".cut-background"));
    set_picture_rate(width, height, $(".cut-bg"));
    set_picture_rate(width,news_contaner,$(".news-bg"));
    set_picture_rate(width,technology_contaner,$(".cut-technology"));
    set_picture_rate(width,about_container,$(".cut-about"));
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