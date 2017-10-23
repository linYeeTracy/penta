$(window).ready(function(){
	$('.nav .search_b').click(function(){
		$('.nav .search').stop();
		$('.nav .search').animate({height:'100px',opacity:'1'},500);
		$('.nav .search input').focus();
		if($('.nav .search').css('opacity')==0)
			event.stopPropagation();
	});
	$('body').click(function(){
		$('.nav .search').stop();
		$('.nav .search').animate({height:'0',opacity:'0'},500);
		$('.nav .search input').val(null);
	});
	$('.nav .search').click(function(){
		if($('.nav .search input').val()=='请输入要搜索的内容')
		{
			$('.nav .search input').css('color','#ccc');
			$('.nav .search input').val(null);
		}
		event.stopPropagation();
	});
	$('.nav .search button').click(function(){
		if(!$('.nav .search input').val())
		{
			$('.nav .search input').val('请输入要搜索的内容');
			$('.nav .search input').css('color','red');
			return false;
		}
		if($('.nav .search input').val()=='请输入要搜索的内容')
			return false;
	});
	$('.nav #robot').mouseenter(function(){
		$('.nav .search').css({'height':'0','opacity':'0'});
		$('.nav .productmenu').stop();
		$('.nav .productmenu').animate({height:'180px'},500);
		old_back=$(".nav").css("background-color");
		$('.nav .productmenu').css('background-color',old_back);
		if(old_back!='rgb(40, 40, 40)')
			$('.nav .productmenu').css('border-bottom','1px solid #ccc');
		else
			$('.nav .productmenu').css('border-bottom','none');
	});
	$('.nav .menu_item').mouseenter(function(){
		if($(this).attr('id')!='robot')
		{
			$('.nav .productmenu').stop();
			$('.nav .productmenu').animate({height:'0'},500,function(){
			}).css('border-bottom','none');
		}
	});
	$('.nav .productmenu').mouseleave(function(){
		$('.nav .productmenu').stop();
		$('.nav .productmenu').animate({height:'0'},500,function(){
		}).css('border-bottom','none');
	});

	$('.f_contact #ph').hover(p_show,null);
	$('.f_contact .ph').hover(null,p_hide);
	$('#aboutm').css('left',$('#nabout').offset().left - 13);
	$('#domainm').css('left',$('#ndomain').offset().left);
	$('#qrcode').css('left',$('#nqrcode').offset().left - 40);
});

function p_show()
{
	$('.f_contact .ph').css({'opacity':'1','width':'271px'});
	$('.f_contact .c img#phone').css('-webkit-animation','none');
}
function p_hide()
{
	$('.f_contact .ph').css({'opacity':'0','width':'66px'});
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?b3a5075eea8badc3499fc161dc6e0259";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
