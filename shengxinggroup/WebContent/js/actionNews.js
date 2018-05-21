/**
 * Created by pactera on 2017/6/20.
 */
$(function(){
    var node=$(".picture-carousels,.swiper-wrapper,.swiper-slide");
    var width=node.width();
    if(node.find("img").eq(0).css("display")=="none"){
        node.height(width*450/750);
    }
    else{
        node.height(width*585/930);
    }


    //pc端选择日期
    var year = 2017;
    var monthhtml = '<div class="div-12"><span data-index="1">1月</span><span data-index="2">2月</span><span data-index="3">3月</span><span data-index="4">4月</span><span data-index="5">5月</span><span data-index="6">6月</span>' +
        '<span data-index="7">7月</span><span data-index="8">8月</span><span data-index="9">9月</span><span data-index="10">10月</span><span data-index="11">11月</span><span data-index="12">12月</span></div>';
    var $datesecond = $(".date-second");
    for (year;year>2009;year--){
        $datesecond.append("<p>"+year+"</p>");
        $datesecond.append(monthhtml);
    }

    //PC端点击月份选择月份
    $(".div-12 span").click(function(){
        $(".div-12 span").removeClass("active-span");
        $(this).addClass("active-span");
        var sltdate = $(this).parent().prev().text() + "年" + $(this).data("index") + "月";
        $(".selected-span").text(sltdate);
        $(".date-span").text(sltdate);
    });



    $('.show-input').bind('input propertychange', function() {
        $('.input-mobile').val($(this).val());
    });
    $('.input-mobile').bind('input propertychange', function() {
        $('.show-input').val($(this).val());
    });


    //PC点击关闭广告
    $(".close-advertisement").click(function(){
        $(".advertisement-txt").hide();
        $(".dvb-notice").animate({width: '100%'}, "normal");
    });
});
$(window).resize(function(){
    var node=$(".picture-carousels,.swiper-wrapper,.swiper-slide");
    var width=node.width();
    if(node.find("img").eq(0).css("display")=="none"){
        node.height(width*450/750);
    }
    else{
        node.height(width*585/930);
    }
});


//PC端目录点击
$(".catalog-filter").click(function(e){ //点击展开
    e.stopPropagation();
    $(".catalog-show").show();
    $(".date-show").hide();
    $(".search-show").hide();
});
$(".catalog-show .show-first").click(function(e){ //点击第一行收起
    e.stopPropagation();
    $(".catalog-show").hide();
});
$(".a-type").click(function(e){
    e.stopPropagation();
    $(".a-type").removeClass("a-active-type");
    $(this).addClass("a-active-type");
    $(".default-row").removeClass("active-default");
    $(".default-row").eq($(this).index()).addClass("active-default");
});
//移动端目录点击
$(".default-filter").click(function(e){
    e.stopPropagation();
    var index = $(this).index();
    if (index == 0){
        $(".div-doctype-mobile").hide();
        $(".default-filter").eq(1).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
        $(".greydate").show();
        $(".reddate").hide();
        $(".date-span").css("color","rgba(0,0,0,.54)");
        if ($(".div-default").css("display") != "none"){
            $(this).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
            $(".div-default").hide();
            $(".greycatalog").show();
            $(".redcatalog").hide();
            $(".catalog-span").css("color","rgba(0,0,0,.54)");
        }else {
            $(this).find(".icon-arr").removeClass("down-arr").addClass("up-arr");
            $(".div-default").show();
            $(".greycatalog").hide();
            $(".redcatalog").show();
            $(".catalog-span").css("color","rgb(200,40,33)");
        }
    }else {
        $(".div-default").hide();
        $(".default-filter").eq(0).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
        $(".greycatalog").show();
        $(".redcatalog").hide();
        $(".catalog-span").css("color","rgba(0,0,0,.54)");
        if ($(".div-doctype-mobile").css("display") != "none"){
            $(this).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
            $(".div-doctype-mobile").hide();
            $(".greydate").show();
            $(".reddate").hide();
            $(".date-span").css("color","rgba(0,0,0,.54)");
        }else {
            $(this).find(".icon-arr").removeClass("down-arr").addClass("up-arr");
            $(".div-doctype-mobile").show();
            $(".greydate").hide();
            $(".reddate").show();
            $(".date-span").css("color","rgb(200,40,33)");
        }
    }
});
$(".default-row").click(function(e){
    e.stopPropagation();
    $(".default-row").removeClass("active-default");
    $(this).addClass("active-default");
    $(".a-type").removeClass("a-active-type");
    $(".a-type").eq($(this).index()).addClass("a-active-type");
});
//    搜索按钮点击效果
$(".input-filter").click(function(e){
    e.stopPropagation();
    $(".div-doctype-mobile").hide();
    $(".default-filter").eq(1).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
    $(".greydate").show();
    $(".reddate").hide();
    $(".date-span").css("color","rgba(0,0,0,.54)");


    $(".div-default").hide();
    $(".default-filter").eq(0).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
    $(".greycatalog").show();
    $(".redcatalog").hide();
    $(".catalog-span").css("color","rgba(0,0,0,.54)");


    if ($(".div-input").css("display") == "none"){
        $(".div-input").show();
        $(".input-mobile").focus();
    }
});
$(".aclearinput").click(function(){
    $(".input-mobile").val("");
    $(".input-mobile").focus();
});
$(".div-input").click(function(e){
    e.stopPropagation();
});
$(".div-small").click(function(e){
    e.stopPropagation();
    $(".div-small").removeClass("div-active-small");
    $(this).addClass("div-active-small");
    var selecteddate = $(".year").text()+"年"+($(this).index()+1)+"月";
    $(".date-span").text(selecteddate);
    $(".selected-span").text(selecteddate);
});
function changeyear(e,type){
    e.stopPropagation();
    var year = $(".year").text();
    if (type == 0){
        if (year == 2017){
            return false;
        } else {
            $(".year").text(parseInt(year)+1);
        }
    } else {
        if (year > 2017){
            return false;
        } else {
            $(".year").text(parseInt(year)-1);
        }
    }
}






//PC端日期点击
$(".date-filter").click(function(e){ //点击展开
    e.stopPropagation();
    $(".date-show").show();
    $(".catalog-show").hide();
    $(".search-show").hide();
});
$(".date-show .show-first").click(function(e){ //点击第一行收起
    e.stopPropagation();
    $(".date-show").hide();
});


//PC端搜索点击
$(".search-filter").click(function(e){
    e.stopPropagation();
    $(".search-show").show();
    $(".date-show").hide();
    $(".catalog-show").hide();
});



$(document).click(function(){
    if ($(".catalog-show").css("display") != "none"){
        $(".catalog-show").hide();
    }
    if ($(".date-show").css("display") != "none"){
        $(".date-show").hide();
    }
    if ($(".search-show").css("display") != "none"){
        $(".search-show").hide();
    }



    if ($(".div-default").css("display") != "none"){
        $(".default-filter").eq(0).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
        $(".div-default").hide();
        $(".greycatalog").show();
        $(".redcatalog").hide();
        $(".catalog-span").css("color","rgba(0,0,0,.54)");
    }
    if ($(".div-doctype-mobile").css("display") != "none"){
        $(".default-filter").eq(1).find(".icon-arr").removeClass("up-arr").addClass("down-arr");
        $(".div-doctype-mobile").hide();
        $(".greydate").show();
        $(".reddate").hide();
        $(".date-span").css("color","rgba(0,0,0,.54)");
    }
    if ($(".div-input").css("display") != "none"){
        $(".div-input").hide();
    }
});