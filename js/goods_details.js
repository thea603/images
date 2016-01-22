$(function(){
			pro_size();
			$(window).resize(function(){
				pro_size();
			});

			var index=banner_num;

			for(i=2;i<=index;i++){
					$('.goods-crl-buttons').append('<span index='+i+'></span>')
				}

// 左右切换轮播    
			var container = $('.goods-pic');
			var list = $('.goods-banner-pic');
			var buttons = $('.goods-crl-buttons span');
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

		            list.animate({'left': offset}, 500, function () {

		                if(left > -(pic_width-100)){
		                    list.css('left', -pic_width * len);
		                }
		                if(left < (-pic_width * len)) {
		                    list.css('left', -pic_width);
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
                animate(-pic_width);
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
                animate(pic_width);
                showButton();
            });
// 圆点选择切换
            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -pic_width * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);
            play();
// 产品选择

		   $('.goods-type div').click(function(){
		   	 	$('.goods-type div').removeClass('click');
		     	$(this).addClass('click')
		   })	
//颜色选择
		   $('.color-type div').click(function(){
		   	 	$('.color-type div').removeClass('click');
		     	$(this).addClass('click')
		   })
		   $('.buy-button div').click(function(){
		   		 $('.buy-button div').removeClass('click');
		   	 	 $(this).addClass('click');
		    
		   })	
		   $('.buy-button div').eq(0).click(function(){
		   	    $('.buy-url').css('display','block')
		   });
		   $('.buy-button div').eq(1).click(function(){
		   	    $('.buy-url').css('display','none');
		   });
})

function pro_size(){
			win_width=$(window).width();
			win_height=$(window).height();
			pic_width=win_width*0.3;
			banner_size=$('.goods-banner-content').size();
			parent_width= pic_width*banner_size;
			banner_num=banner_size-2;
			
			$('.buy-info').css({'width':win_width,'height':win_height});
			$('.goods-banner-pic').css('width',parent_width);
			$('.goods-banner-content').css('width',pic_width);
			$('.goods-banner-pic').css('left',-pic_width);
}