/**
 * 
 */

    $(".changeLang").hover(function () {
        $(".fiveLang").show("slow");
        $(".changeLang .changeLang-span").css("visibility","hidden");
    }, function () {
        $(".fiveLang").hide("slow");
        $(".changeLang .changeLang-span").css("visibility", "visible");
    });
	function isPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}


var carousel_introduce= $(".carousel-2 .introduce-container .introduce");
var carousel_span= $(".map-container .cut-box span");


var line_height=new Array(25,50,75,100);
var line_color=new Array();
var right_line=$(".right-line .line");
var right_line_column=$(".right-line");
var navigation_text = $(".header-menu li a,.changeLang,.fiveLang a");
var button_right=$(".button-column");
var button_search=$(".button-column .search-button");
var share_button=$(".share-button div img");
var mySwiper1 = new Swiper('.swiper-container-v',{
    //autoResize : true,
    resizeReInit:true,
    autoplay : false,
    loop : false,
    progress: true,
    //cssWidthAndHeight: true,
    speed:800,
    mousewheelControl : true,
    mode : 'vertical',
    autoplayDisableOnInteraction : false,
    paginationClickable: true,
    noSwiping : true,
    noSwipingClass: 'stop-swiping',
    onTouchStart:function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], 0);
        }
    },
    onSetWrapperTransition: function(swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++){
            swiper.setTransition(swiper.slides[i], speed);
        }
    },
    onFirstInit: function(swiper){
		if($(".video-container").length){
			document.getElementById('video').play();
		}
        $(".home-container-1").addClass("active");
        right_line.stop().animate({height:line_height[0]+"%"},2000);
        hover_icon(1);
    },
    onInit: function () {
        var width = $(window).width();
        $(".swiper-slide,.scroll,.news-container").width(width);
        $(".scroll,.news-container").height("auto!important");
    },
    onSlideChangeStart: function(swiper){
        switch(swiper.activeLoopIndex){
            case 0:
                $(".advertisement").hide();
		        if($(".video-container").length){
			        document.getElementById('video').play();
		        }
                right_line.stop().animate({height:line_height[0]+"%"},1000);
                right_line_column.css("z-index","0");
                button_right.removeClass("red-normal");
                button_right.addClass("normal");
                navigation_text.css("color","#fff");
                button_search.attr("src","images/search.png");
                $(".menu-button").attr("src","images/menu.png");
                add_button(share_button,left_icon,0);
                hover_icon(1);
                break;
            case 1:
                $(".advertisement").hide();
				if($(".video-container").length){
					document.getElementById('video').pause();
				}
                if($(".pagination-stop img").hasClass("start")){
                }
                else{
                }
                $(".carousel-text .picture-text").addClass("active-text");
                right_line.stop().animate({height:line_height[1]+"%"},1000);
                right_line_column.css("z-index","0");
                button_right.removeClass("normal");
                button_right.addClass("red-normal");
                navigation_text.css("color","rgba(0,0,0,0.6)");
                button_search.attr("src","images/search-red.png");
                $(".menu-button").attr("src","images/menu-grey.png");
                clear_pagination(3);
                add_button(share_button,left_icon,1);
                hover_icon(2);
                break;
            case 2:
                $(".advertisement").hide();
                var i=0;
                setInterval(function(){
                    $(".production-container .model").eq(i).addClass("box-opacity");
                    if(i<6){
                        i++;
                    }else{
                        return;
                    }
                },50);
                $(".make-active").addClass("active");
                right_line.stop().animate({height:line_height[2]+"%"},1000);
                right_line_column.css("z-index","0");

                add_button(share_button,left_icon,1);
                hover_icon(2);
                break;
            case 3:
                
                $(".news-container").addClass("active");
                right_line.stop().animate({height:line_height[3]+"%"},1000);
                right_line_column.css("z-index","10");
                add_button(share_button,left_icon,1);
                hover_icon(2);
                $(".news-active").addClass("active");
                break;
        }},
    onSlideChangeEnd: function (swiper) {
        switch(swiper.activeLoopIndex){
            case 1:
               if($(".video-container").length){
			        document.getElementById('video').pause();
		        }
                break;
            case 2:
                $(".carousel-1").addClass("active");
                break;
            case 3:
                mySwiper1.disableMousewheelControl();
                var scroll = 0;
                if (isPC()) {
                    $(document).bind('mousewheel.aaa', function (e, delta) {
                        if (delta >= 0) {
                            if (scroll < 0) {
								$(".navigation").css("top", "24px");
                                $(".scroll").css("top", "0");
                                mySwiper1.enableMousewheelControl();
                                $(document).unbind("mousewheel.aaa");
                               // $(".advertisement").hide();
                            }
                            else {
                                scroll = scroll - 100;
                                $(".navigation").css("top", "-" + scroll+24 + "px");
                                $(".scroll").css("top", "-" + scroll + "px");
                            }
                        }
                        if (delta < 0) {
                            mySwiper1.disableMousewheelControl();
                            var scroll_height = $(".scroll").height() + $(".advertisement").height() - $(window).height() - 20;
                            if (scroll < scroll_height - 100) {
                                scroll = scroll + 100;
                                $(".navigation").css("top", "-" + scroll + 24 + "px");
                                $(".scroll").css("top", "-" + scroll + "px");
                                $(".scroll").css("transition-duration", "0ms");
                            } else if (scroll < scroll_height) {
                                scroll = scroll_height;
                                $(".navigation").css("top", "-" + scroll + 24 + "px");
                                $(".scroll").css("top", "-" + scroll + "px");
                              $(".scroll").css("transition-duration", "0ms");
                            }
                        }
                    });
                }
                else {
                    
					$(".scroll").css("transition-duration", "0");
					$(".scroll").css("animation-timing-function", "none");
					$(".scroll").css("transform", "none");
                    var y = 0;
                    var box = document.getElementsByClassName("scroll")[0];
                    box.addEventListener("touchstart", function (e) {
                        var touch = e.touches[0];
                        y = touch.pageY;
                    });
                    box.addEventListener('touchmove', function (e) {
                        e.preventDefault();
                    });
                    box.addEventListener("touchend", function (e) {
                        var t = e.changedTouches[0];
                        y = t.pageY - y;
                        var len = parseInt((y > 0) ? y : -y);
                        //up
                        if (y > 0) {
                            //console.log(scroll);
                            if (scroll < 0) {
                                $(".navigation").css("top", "24px");
                                $(".scroll").css("top", "0");
                                mySwiper1.swipeTo(2);
                                box.removeEventListener("touchstart",false);
                                box.removeEventListener("touchmove",false);
                                box.removeEventListener("touchend",false);
                            } else {
                                scroll = scroll - len;
                                $(".navigation").css("top", "-" + scroll + "px");
                                $(".scroll").css("top", "-" + scroll + "px");
                            }
                        } else if (y < 0) {
                            //down
                            var scroll_height = $(".scroll").height() + $(".advertisement").height() - $(window).height() - 20;
                            if (scroll < (scroll_height - len)) {
                                scroll = scroll + len;
                                $(".navigation").css("top", "-" + scroll + "px");
                                $(".scroll").css("top", "-" + scroll + "px");

                            }
                            else if (scroll < scroll_height) {
                                scroll = scroll_height;
                                $(".navigation").css("top", "-" + scroll + "px");
                                $(".scroll").css("top", "-" + scroll + "px");

                            }
                        }
                    })
                }
                break;
        }
        $(".carousel-1").addClass("active");
    }
});
mySwiper1.addCallback('ProgressChange', function (swiper) {
    for (var i = 0; i < swiper.slides.length; i++) {
        var slide = swiper.slides[i];
        var progress = slide.progress;
        var scale, translate, opacity;
        if (progress >= 0) {
            opacity = 1 - Math.min(Math.abs(progress), 1);
            scale = 1 - Math.min(Math.abs(progress / 2), 1);
            translate = progress * swiper.height;
        }
        else {
            opacity = 1 - Math.min(Math.abs(progress / 2), 1);
            scale = 1;
            translate = 0;
        }
//        slide.style.opacity = opacity;
//        swiper.setTransform(slide, 'translate3d(0,' + (translate) + 'px,0) scale(' + scale + ')');
    }
});
var qr_hover = $(".share-hover");
function hover_icon(kind){
    share_button.hover(function(){
        $(this).removeClass("opacity-button");
        var name= $(this).attr("data-name");
        switch(kind) {
            case 1:
                $(this).attr("src", "images/" + name + " white.png");
                break;
            case 2:
                $(this).attr("src", "images/" + name + "_hover.png");
                break;
        }
        if(name=="wechat"){
            qr_hover.find($(".weixin_qr")).stop().show();
        }
        else if(name=="sina weibo"){
            qr_hover.find($(".sina_qr")).stop().show();
        }
    },function(){
        $(this).addClass("opacity-button");
        var name= $(this).attr("data-name");
        qr_hover.find($(".weixin_qr")).hide();
        qr_hover.find($(".sina_qr")).hide();
        switch(kind) {
            case 1:
                $(this).attr("src","images/"+name+" white.png")
                break;
            case 2:
                $(this).attr("src","images/"+name+" grey.png")
                break;
        }
    });
}
$(".pagination .pagination-switch").click(function(){
    $(this).stop(true,false);
})
/*to clear the style*/
function clear_pagination(p_num){
    for(var i=0;i<p_num;i++){
        var node1=$(".pagination-active-"+(i+1)+" div");
		var node2=$(".pagination-active-"+(i+1)+" span");
        node1.css("visibility","hidden");
        node1.css("width","0");
		node2.removeClass("colored");
    }
}
var left_icon={
    icon_white:["wechat white.png","sina weibo white.svg","linkin white.png","twitter white.png","fb white.png"],
    icon_grey:["wechat grey.png","sina weibo grey.png","linkin grey.png","twitter grey.png","fb grey.png"],
    icon_hover:["wechat_hover.png","sina weibo_hover.png","linkin_hover.png","twitter_hover.png","fb_hover.png"]
};
function add_button(node,left_icon,kind){
    var num=node.length;
    switch(kind){
        case 0: for(var i=0;i<num;i++){
            node.eq(i).attr("src","images/"+left_icon.icon_white[i]);
        }
            break;
        case 1: for(var j=0;j<num;j++){
            node.eq(j).attr("src","images/"+left_icon.icon_grey[j]);
        }
            break;
        case 2: for(var m=0;m<num;m++){
            node.eq(m).attr("src","images/"+left_icon.icon_hover[m]);
        }
            break;
    }
}
myVid=document.getElementById("video");
$(".sound-close .sound-button").click(function(){
    if($(this).hasClass("on")){
        $(this).html("关闭");
        myVid.muted=false;
        $(".on").addClass("off");
        $(".on").removeClass("on");
    }
    else if($(this).hasClass("off")){
        $(this).html("打开");
        myVid.muted=true;
        $(".off").addClass("on");
        $(".off").removeClass("off");
    }
});
$(".production").click(function(){
    var show=$(".show");
    var bottom_model=$(".bottom-model");
    show.css("display","none");
    show.css("height","0");
    show.css("width","0");
    bottom_model.css("top","100%");
    bottom_model.css("left","100%");
    show.removeClass("show");
});
$(".pagination .pagination-stop").click(function(){
    if($(this).find("img").hasClass("start")){
        $(this).find("img").removeClass("start");
        $(this).find("img").attr("src","images/start.png");
    }
    else{
        $(this).find("img").addClass("start");
        $(this).find("img").attr("src","images/stop.png");
    }
});

document.getElementById('video').play();
