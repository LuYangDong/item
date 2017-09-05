

$(".navFu_nav_ul2 li").mouseover(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
$(".navFu_nav_ul2 li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".navFu_nav_ul2 li").children("a").css("color","#333")
	$(this).children("a").css("color","#ff637c")
})
/**********content1 hover效果******************/
$(".content1 ul li").hover(function(){
	$(this).find("a").css({"background":"url(./image/cnt1_bg1.png)"});
	$(this).find("dt").css({"background":"url(./image/cnt1_ico2.png) no-repeat center bottom","color":"#fff"});
	$(this).find("dd").css("color","#fff");
},function(){
	$(this).find("a").css({"background":"none"});
	$(this).find("dt").css({"background":"url(./image/cnt1_ico1.png) no-repeat center bottom","color":"#f3658e"});
	$(this).find("dd").css("color","#999");
})

/*****************实现培训课程的内容切换**************/
$(function(){
	$(".content2 .list li").click(function(){
		$(".content2 .list li").find("img").attr('src',"image/cnt2_ico3.png" );
		$(".content2 .list li").find("img").css("top","0px")
		$(".content2 .list li").find("p").removeClass("active")
		$(this).find("p").addClass("active")
		$(this).find("img").attr('src',"image/cnt2_ico4.png" ).css("top","-10px");
	})
	$(".content2 .lt_item1 li").click(function(){
		$(".content2 .rt li").removeClass("active");
		$(".content2 .rt .yuesao").eq($(this).index()).addClass("active");
	})
	$(".content2 .lt_item2 li").click(function(){
		$(".content2 .rt li").removeClass("active");
		$(".content2 .rt .yuer").eq($(this).index()).addClass("active");
	})
	$(".content2 .lt_item3 li").click(function(){
		$(".content2 .rt li").removeClass("active");
		$(".content2 .rt .tese").eq($(this).index()).addClass("active");
	})
})
//滑入图片显示文字

$(function(){
	$('.icon_left li').hover(function(){
		$('.text',this).stop().slideToggle({
			height:'62px'
		});
	},function(){
		$('.text',this).stop().slideToggle({
			height:'0'
		});
	});
});

var n=0;
var oLiWidth = $(".content3_ul li").width();
var geshu = 1200/oLiWidth;
var liLength = $(".content3_ul li").length;
var dangq = liLength-geshu;
$(".content3_cont_an .an1").click(function(){
	var left = $(".content3_ul").position().left;
	$(this).addClass("active").siblings().removeClass("active");
	n--;
	if(n<0){
		n=0;
	}
	if(left==0){
		return n;
	}else if(left<=0){
		$(".content3_ul").animate({'left':(-oLiWidth*n)});
	}
});
$(".content3_cont_an .an2").click(function(){
	var left = $(".content3_ul").position().left;
	$(this).addClass("active").siblings().removeClass("active");
	n++;
	if(n>dangq){
		n=dangq;
	}
	if(left>(-oLiWidth*dangq)){
		$(".content3_ul").animate({'left':-oLiWidth*n});
	}else if(left==(-oLiWidth*dangq)){
		return n;
	}

});

$(".content3_ul_p img").click(function(){
	
//	$(".content3_ul li").eq(0).css("left","0px")
//	$(".content3_ul li").eq(1).css("left","240px")
//	$(".content3_ul li").eq(2).css("left","480px")
//	$(".content3_ul li").eq(3).css("left","720px")
//	$(".content3_ul li").eq(4).css("left","960px")
//	$(".content3_ul li").eq(5).css("left","1200px")
//	$(".content3_ul li").eq(6).css("left","1440px")
	var le=parseInt($(".content3_ul .active").css("left"));
	     $(".content3_ul .active").css("left",le+10);
	 $(this).parent().parent().addClass("active").siblings().removeClass("active");
		var left=parseInt($(this).parents("li").css("left"));
		$(this).parents("li").css("left",left-10);
	
})
