$(function(){
// 侧边栏和底部事件
		function getOffset(e){
            var target = e.target;
            if (target.offsetLeft == undefined){
            	target = target.parentNode;
            }
            var pageCoord = getPageCoord(target);
            var eventCoord ={
            	x: window.pageXOffset + e.clientX,
            	y: window.pageYOffset + e.clientY
            };
            var offset ={
            	offsetX: eventCoord.x - pageCoord.x,
            	offsetY: eventCoord.y - pageCoord.y
            };
            	return offset;
        }
        function getPageCoord(element){
            var coord = {x: 0, y: 0};
            while (element){
            	coord.x += element.offsetLeft;
            	coord.y += element.offsetTop;
            	element = element.offsetParent;
            }
            return coord;
        }
	    $('.list').find('dd').find('a').mouseenter(function(e){  
	         var h = $(this).height();
	         var y = e.offsetY || (getOffset(e).offsetY);
	    	if(y<h/2){
// 上方进入
	    		$(this).prev().stop(true,false).animate({top:'0'},200);  
	    	}else{
// 下方进入
	    		$(this).prev().css('top','30px');
	    		$(this).prev().stop(true,false).animate({top:'0'},200);
	    	}
	    	return  
	    });  
	   $('.list').find('dd').find('a').mouseout(function(e){  
	        var h = $(this).height();
	         var y = e.offsetY || (getOffset(e).offsetY);
	    	if(y<h/2){
// 上方离开
	    		$(this).prev().stop(true,false).animate({top:'-30px'},200);  
	    	}else{
// 下方离开
	    		$(this).prev().stop(true,false).animate({top:'30px'},200);  
	    	}
	        return  
			    });
// 头部跳转
			$('.list-title').find('a').click(function(){
				$('.list-title').removeClass('active');
				$(this).parent().addClass('active');
				var Id = $(this).attr('data-href');
				$('.link-company-infor').find('dd').removeClass('dd-active');
				switch(Id){
					case '#introduces': 
						$('.link-company-infor').find('dd').eq(0).addClass('dd-active');
						break;
					case '#contact':
						$('.link-company-infor').find('dd').eq(1).addClass('dd-active');
						break;
					default:
						$('.link-company-infor').find('dd').eq(2).addClass('dd-active');
						break;
				}
				$('.tab-pane').removeClass('active');
				$(Id).addClass('active');
			})
// 公司介绍页面
// 侧边栏的内容块跳转
			$('.link-company-infor').find('dd').find('a').click(function(){
				$('.link-company-infor').find('dd').removeClass('dd-active');
				$(this).parent().addClass('dd-active');
				$('.list-title').removeClass('active');
				var Id = $(this).attr('data-href');
				$('.list-title').removeClass('active');
				switch(Id){
					case '#introduces': 
						$('.list-title').eq(0).addClass('active');
						break;
					case '#contact':
						$('.list-title').eq(1).addClass('active');
						break;
					default:
						$('.list-title').eq(2).addClass('active');
						break;
				}
				$('.tab-pane').removeClass('active');
				$(Id).addClass('active');
			})
//头部
			$('.header-nav').find('li').mouseenter(function(){
				var Index = $(this).index();
				var headerLineLeft = $('.header-line-left');
				var headerLineRight = $('.header-line-right');
				switch(Index){
					case 0:
						headerLineLeft.stop(true,false).animate({left:'0%'},500);
						break;
					case 1:
						headerLineLeft.stop(true,false).animate({left:'14%'},500);
						break;
					case 2:
						headerLineLeft.stop(true,false).animate({left:'28%'},500);
						break;
					case 4:
						headerLineRight.stop(true,false).animate({right:'28%'},500);
						break;
					case 5:
						headerLineRight.stop(true,false).animate({right:'14%'},500);
						break;
					case 6:
						headerLineRight.stop(true,false).animate({right:'0'},500);
						break;
					
				};
				return;
			});
			$('.header-nav').find('li').mouseout(function(){
//				alert($(this).index());
				var Indexnum = $(this).index();
				if(Indexnum>2){
					$('.header-line-right').stop(true,false).animate({right:'-14%'},500);
				}else{
					$('.header-line-left').stop(true,false).animate({left:'-14%'},500);
				}
				
				return;
			})
})