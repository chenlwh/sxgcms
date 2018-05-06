/**
 * Created by Pactera on 2017/5/23.
 */
	var mySwiper = new Swiper('.slide-banner .swiper-container', {
    autoplay: 3000,
    speed: 1000,
    pagination: '.slide-banner .swiper-pagination',
    effect: 'fade',
    prevButton: '.slide-banner .swiper-button-prev',
    nextButton: '.slide-banner .swiper-button-next',
    autoplayDisableOnInteraction: false,
    onSlideChangeEnd: function () {
        mySwiperMobile.slideTo(mySwiper.activeIndex);
    }
});
var mySwiperMobile = new Swiper('.slide-banner-mobile .swiper-container', { //海航文化移动端弹出
    autoHeight: true,
    effect: 'fade',
    prevButton: '.slide-banner-mobile .swiper-button-prev',
    nextButton: '.slide-banner-mobile .swiper-button-next',
    observer: true,
    observeParents: true,
    onSlideChangeEnd: function () {
        mySwiper.slideTo(mySwiperMobile.activeIndex);
    }
});
var maobiSwiperMobile = new Swiper('.third-block-mobile-pop .swiper-container', { //毛笔字移动端弹出
    autoHeight: true,
    effect: 'fade',
    prevButton: '.third-block-mobile-pop .swiper-button-next',
    nextButton: '.third-block-mobile-pop .swiper-button-prev',
    observer: true,
    observeParents: true,
    onSlideChangeEnd: function () {
		$(".third-maobi-container,.third-detail-container").fadeOut("normal", function () {
			 $(".third-detail-container").eq(maobiSwiperMobile.activeIndex).fadeIn();
		});
    }
});



$(".show-icon").click(function () { //海航简介点击展开/收缩
    var $wordTitle = $(".word-title");
    var $hideP = $(".hide-p");
    $(this).toggleClass("rotate45");
    if ($(this).hasClass("rotate45")) {
        $(this).animate({top: "60px"}, 1000);
        $wordTitle.animate({paddingTop: "165px"}, 1000);
        $wordTitle.css({"text-align": "center"});
        $hideP.slideDown("slow");
        $(".second-block-mobile").show();
    } else {
        $(this).animate({top: "102%"}, 1000);
        $wordTitle.animate({paddingTop: "60px"}, 1000);
        $wordTitle.css({"text-align": "left"});
        $hideP.slideUp("0");
        $(".second-block-mobile").hide();
    }
});
$(".show-icon-mobile").click(function () { //海航简介点击展开/收缩
    var $wordTitle = $(".word-title");
    var $hideP = $(".hide-p");
    var $pcshowicon = $(".show-icon");
    $pcshowicon.addClass("rotate45");
    $pcshowicon.animate({top: "60px"}, 1000);
    $wordTitle.animate({paddingTop: "165px"}, 1000);
    $wordTitle.css({"text-align": "center"});
    $hideP.slideDown("slow");
    $(".second-block-mobile").show();

});
$(".delete-icon").click(function () { //海航简介手机端点击收起
    var $wordTitle = $(".word-title");
    var $hideP = $(".hide-p");
    $(".show-icon").animate({top: "102%"}, 1000);
    $(".show-icon").removeClass("rotate45");
    $wordTitle.animate({paddingTop: "60px"}, 1000);
    $wordTitle.css({"text-align": "left"});
    $hideP.slideUp("0");
    $(".second-block-mobile").hide();
});


$(".addshow").click(function () {
    mySwiper.stopAutoplay();
    $(".onehand").fadeOut("normal", function () {
        $(".swiper-pagination").hide();
        $(".addshow").hide();
        $(".blackbg").fadeIn("normal");
        $(".otherhand").fadeIn("normal");
    });
    $(".slide-banner-mobile").show();
    mySwiperMobile.slideTo(mySwiper.activeIndex);
});
$(".addhide").click(function () {
    mySwiper.startAutoplay();
    $(".otherhand").fadeOut("normal", function () {
        $(".swiper-pagination").show();
        $(".addshow").show();
        $(".blackbg").fadeOut("normal");
        $(".onehand").fadeIn("normal");
    });
    $(".slide-banner-mobile").hide();
});
$(".slide-delete-icon").click(function () {
    mySwiper.startAutoplay();
    $(".otherhand").fadeOut("normal", function () {
        $(".swiper-pagination").show();
        $(".addshow").show();
        $(".blackbg").fadeOut("normal");
        $(".onehand").fadeIn("normal");
        $(".slide-banner-mobile").hide();
    });
});
//    毛笔字模块
var imgsrc;
$(".third-block-pc .third-list").hover(
    function () {
        $(this).css({borderColor: "#8a6622"});
		$(this).find($(".normal")).hide();
		$(this).find($(".hover")).css("display","block");
    },
    function () {
        $(this).css({borderColor: "rgba(240,176,46,.3)"});
		$(this).find($(".hover")).hide();
		$(this).find($(".normal")).css("display","block");
    }
);
$(".third-block-pc .third-list").click(function () { //PC端点击毛笔字
    $(".third-block-mobile-pop").show();
    var index = $(this).index();
	 maobiSwiperMobile.slideTo(index);
    var $briefimgmaobi = $(".detail-word-img");
    var $brieftitle = $(".brief-title");
    var $brieftitle1 = $(".brief-title1");
    var $briefdetailword = $(".brief-detail-word");
    $(".third-maobi-container").fadeOut("normal", function () {
         $(".third-detail-container").eq(index).fadeIn();
    });
});
$(".icon-larr").click(function (){
    $(".third-detail-container").hide();
	$(".third-maobi-container").fadeIn("normal");
    $(".third-block-mobile-pop").hide();
});
//毛笔字模块——移动端
$(".third-block-mobile .third-list").click(function () {
    var index = $(this).data("index");
    maobiSwiperMobile.slideTo(index);
    $(".third-block-mobile-pop").show();
	$(".third-maobi-container,.third-detail-container").hide();
	$(".third-detail-container").eq(index).hide();
});
$(".third-delete-icon").click(function () {
    $(".third-detail-container").fadeOut("normal", function () {
        $(".third-maobi-container").fadeIn();
    });
    $(".third-block-mobile-pop").hide();
});

//    footer内容hover效果——PC
$(".footer-list").find("span").find("a").hover(
    function () {
        $(this).addClass("opacity1");
    },
    function () {
        $(this).removeClass("opacity1");
    }
);
// footer效果——移动端
/*$(".righta").click(function () {
    var index = $(".righta").index($(this));
    var $footerdetail = $(".footer-row-detail");
    if ($footerdetail.eq(index).css("display") != "none") {
        $footerdetail.slideUp();
        $footerdetail.eq(index).slideUp();
    } else {
        $footerdetail.slideUp();
        $footerdetail.eq(index).slideDown();
    }
});*/







//移动端header的js
$("#menu-button").click(function(){
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