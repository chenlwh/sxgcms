	window.onload=function(){
	if($("p img").length){
	    order_article($("p img"));
	}
	}
/*to order the article */
var order_article=function(node){
    var num=node.length;
    for(var i=0;i<num;i++){
        var imgSrc=node.eq(i).attr("src");
        var num_node=node.eq(i);
        getBoxWidth(num_node,imgSrc,function(w,node){
            if(w>node.parent().width()){
                node.width("100%");
                node.height("auto");
                node.parent().attr("style","text-align:left;text-indent:0;");
            }
            else{
                node.width("auto");
                node.height("auto");
                node.parent().attr("style","text-align:center;text-indent:0;");
            }
        })
    }
}
/*get picture width and box width*/
function getBoxWidth(node,url,callback){
    var img = new Image();
    img.src = url;
    img.onload = function(){
        callback(img.width,node);
    }
}
$(window).resize(function () {
    if ($("p img").length) {
        order_article($("p img"));
    }
});