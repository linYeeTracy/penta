//$(document).ready(Init1);
window.onload=Init;

$(document).ready(function(){
	Init1();
	banner();
	
});
function Init1()
{
	//首屏滚动动画
	// $('.welcome .shubiao p').click(show);
	// $(window).scroll(show);
	//首屏文字动效
	setInterval(welcome_text,5000);
	var nav_list=$('nav a.menu_item');
	$('.nav a.menu_item').click(function() {
		$(this).addClass('current').siblings().removeClass('current');
	})
	$('.nav a.menu_item.'+ window.location.hash.slice(1)).trigger('click');
}

function Init(){
	//留言板
	$('.contact .leavemes button').click(function(){
		if(!$('input#name').val() || !$('input#email').val() || !$('textarea#content').val())
		{
			dialogalert('请填写完整的留言信息！');
		}else{
			$.ajax({
				type: "post",
				url: "/submit_msg",
				data: {"name":$('input#name').val(),"email":$('input#email').val(),"content":$('textarea#content').val()},
				success:function(data){					
					dialogalert(data);
					$('.contact .leavemes input').val("");
					$('.contact .leavemes textarea').val("");
				}
			});
		}
	});	

	if($('.welcome').height()<700)
	{
		$('.banner a div').css('background-size','auto 500px');
		$('.banner').css('height','500px');
	}
	$("#dialog .dialog-overlay , #dialog  .dialog-inner button").click(function(){
		$("#dialog").removeClass("dialog-open");
	})
}


//首屏文字动效
var text_list = ['一家专玩高科技的公司', '一群真诚而热血的年轻人', '一个由极客&创客组成的团队'];
var text_index=0;
function welcome_text()
{
	$('.welcome .border p').animate({opacity:'0'},1000,function(){
		text_index++;
		$('.welcome .border p').text(text_list[text_index%text_list.length]);
		$('.welcome .border p').animate({opacity:'1'},1000);
	});
}


//banner轮播图
function banner(){
	pic=$(".banner a div");
	pic_total=pic.length;
	cur_pic=0;
	$(pic[cur_pic]).css({'opacity':'1','z-index':'1'});
	$('.banner .left').click(move_right);
	$('.banner .right').click(move_left);
	bani=setInterval(move_left,5000);
	$('.banner').hover(function(){clearInterval(bani);},function(){if(bani) clearInterval(bani);bani=setInterval(move_left,5000);});
}
function move_left(){
	$(pic[cur_pic]).css({'opacity':'0','z-index':'0'});
	cur_pic<pic_total-1?cur_pic++:cur_pic=0;
	$(pic[cur_pic]).css({'opacity':'1','z-index':'1'});
}
function move_right(){
	$(pic[cur_pic]).css({'opacity':'0','z-index':'0'});
	cur_pic>0?cur_pic--:cur_pic=pic_total-1;
	$(pic[cur_pic]).css({'opacity':'1','z-index':'1'});
}

//二维码显示消失动画
function weixinclk()
{
	$('.erweima').css('position','fixed').css('z-index','9').animate({opacity:'1'},200,function(){
		$('.erweima img').css({'width':'320px','top':'45%'});
		setTimeout(function(){$('.erweima .close').css({'left':'157px','top':'30px','opacity':'1','z-index':'9'});},500);
	});
}
function weixinclose()
{
	$('.erweima').animate({opacity:'0'},500,function(){
		$('.erweima').css('z-index','-1').css('position','absolute');
		$('.erweima img').css({'width':'0','top':'45%'});
		setTimeout(function(){$('.erweima .close').css({'left':'125px','top':'55px','opacity':'0','z-index':'0'});},500);
	});
}
//按钮悬浮动画
function bnshow()
{
	$('.know .button span').css('left','200px');
	$('.know .button i').css('left','87px');
}
function bnhide()
{
	$('.know .button span').css('left','0px');
	$('.know .button i').css('left','-113px');
}


//弹窗
function dialogalert(sth)
{
	$("#dialog  .dialog-inner h2").html(sth);
	$("#dialog").addClass("dialog-open");
}

