
$(function(){
			image_size();
			$(window).resize(function(){
				image_size()
			});
			var num=$('.cover').length;
			var i_mun=0;

			$('.cover:gt(0)').hide();

		   function move_banner(){
					if(i_mun==num-1){
						i_mun=-1
					}
					$('.cover').eq(i_mun+1).fadeIn('slow')
											   .siblings('.cover').fadeOut('slow');
					i_mun++
				}

			function bannerMoveks(){
				timer_banner=setInterval(function(){
					move_banner()
				},6000)
			};
			bannerMoveks();			
});

function image_size(){
			win_width=$(window).width();
			win_height=$(window).height();
			$('.imagefun-content').css({'width':win_width,'height':win_height});
			$('.content-detail').css({'width':win_width,'height':win_height});
};
