/**
 * Created by pactera on 2017/6/29.
 */
$(".icon-menu-m").click(function () {
    $(".list").stop().show().animate({"height":"100%"},500);
});
$(".close-button").click(function(){
    $(".list").stop().animate({ "height": "0px" }, 500, function () { $(this).hide(); });
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
//语言切换hover效果
$(".changeLang").hover(function () {
    $(".fiveLang").show();
}, function () {
    $(".fiveLang").hide();
});
$(".Header .navigation-subnav .subnav a").hover(function () {
    $(this).addClass("active");
}, function () {
    $(this).removeClass("active");
});
$(function(){
    var window_width=$(window).width();
    var submenu_width=0;
    var submenu_node=$(".sub-menu .over a");
    var button_node=$(".chapternav-paddle");
    for(var i=0;i<submenu_node.length;i++){
        submenu_width=submenu_width+submenu_node.eq(i).width()+28;
    }
	
	$('#footer-img-height').load(function(){
	   var footerimgheight = $("#footer-img-height").height()-2;
		$(".footer").css("paddingBottom",footerimgheight);
	});
	var footerimgheight = $("#footer-img-height").height()-2;
	$(".footer").css("paddingBottom",footerimgheight);
})

$(window).resize(function(){
    var window_width=$(window).width();
    var submenu_width=0;
    var submenu_node=$(".sub-menu .over a");
    var button_node=$(".chapternav-paddle");
    for(var i=0;i<submenu_node.length;i++){
        submenu_width=submenu_width+submenu_node.eq(i).width()+28;
    }
	
	var footerimgheight = $("#footer-img-height").height()-2;
	$(".footer").css("paddingBottom",footerimgheight);
});
//    footer内容hover效果
$(".footer-list").find("span").hover(
    function () {
        $(this).addClass("opacity1");
    },
    function () {
        $(this).removeClass("opacity1");
    }
);
// footer效果——移动端
$(".righta").click(function () {
	console.log($(this).target);
    var index = $(".righta").index($(this));
    var $footerdetail = $(".footer-row-detail");
    if ($footerdetail.eq(index).css("display") != "none") {
        $footerdetail.slideUp();
        $footerdetail.eq(index).slideUp();
    } else {
        $footerdetail.slideUp();
        $footerdetail.eq(index).slideDown();
    }
});
