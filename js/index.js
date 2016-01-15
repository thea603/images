$(function(){
	 		size();
			$(window).resize(function(){
				size();
			});
	
			var index=banner_num;
			for(i=2;i<=index;i++){
					$('.crl-buttons').append('<span index='+i+'></span>')
				}
			
			
// 左右切换轮播    
			var container = $('.banner');
			var list = $('.banner-pic');
			var buttons = $('.crl-buttons span');
			var prev = $('.left-pic');
			var next = $('.right-pic');
			var index = 1;
			var len = banner_num;
			var interval = 5000;
			var timer;

		    function animate (offset) {
		            var left = parseInt(list.css('left')) + offset;
		            if (offset>0) {
		                offset = '+=' + offset;
		            }
		            else {
		                offset = '-=' + Math.abs(offset);
		            }

		            list.animate({'left': offset}, 1000, function () {

		                if(left > -(win_width)){
		                    list.css('left', -win_width * len);
		                }
		                if(left < (-(win_width * len))) {
		                    list.css('left', -win_width);
		                }
		            });
		        }
			function showButton() {
			         buttons.eq(index-1).addClass('on').siblings().removeClass('on');
			    }
		    function play() {
		        timer = setTimeout(function () {
		            next.trigger('click');
		            play();
		        }, interval);
		    }

		    function stop() {
		        clearTimeout(timer);
		    }
// 左箭头切换   
            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == banner_num) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-win_width);
                showButton();
            });
// 右箭头切换
            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = banner_num;
                }
                else {
                    index -= 1;
                }
                animate(win_width);
                showButton();
            });
// 圆点选择切换
            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -win_width * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);
            play();


})
function size(){
			win_width=$(window).width();
			win_height=$(window).height();
			banner_size=$('.banner-content').size();
			parent_width=win_width*banner_size;
			banner_width=banner_size*parent_width;
		    banner_num=banner_size-2;


			$('.banner').css({'width':win_width,'height':win_height});//整个banner宽高
			$('.banner-pic').css('width',banner_width);//整个轮播窗口宽度
			$('.banner-content').css({'width':win_width,'height':win_height});//单个轮播图片范围
			$('.banner-pic').css('left',-win_width);
			$('.imagefun-content').css({'width':win_width,'height':win_height});
			$('.content-detail').css({'width':win_width,'height':win_height});
}

