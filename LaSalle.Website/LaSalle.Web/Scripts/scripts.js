$(function() {

/* ==========================================================================
   Variables
   ========================================================================== */
	var mainNav = $('.site-nav');
	var hpNews = $('.hp-news');
	
/* ==========================================================================
   Mobile navigation
   ========================================================================== */
	mainNav.before('<div class="nav-icon icon-menu"></div>');
	mainNav.find('ul .menu').before('<div class="subnav-icon icon-expand"></div>');
	
	$('.nav-icon').click(function() {
		mainNav.slideToggle();
		$(this).toggleClass('active');
	});
	
	mainNav.find('ul .menu').closest('li').click(function() {
		$(this).toggleClass('active');
	});
	
	$('a[href^=#]').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 20
		}, 500);
	});


/* ==========================================================================
   Homepage news
   ========================================================================== */
	if(hpNews.length > 0) {
		var newsCount = hpNews.find('.news-item').length;
		var speed = 300;
		
		hpNews.find('.news-item:not(:first)').hide();
		hpNews.find('.content').append('<div class="navigation"><button class="prev" title="Previous"><span>Previous</span></button><button class="next" title="Next"><span>Next</span></button><ol></ol></div>');
		
		hpNews.find('.news-item').each(function(index) {
			var articleTitle = $(this).find('h2').text();
			$(this).attr('id', 'news-item-' + index);
			hpNews.find('.navigation ol').append('<li rel="news-item-' + index + '" title="' + articleTitle + '">' + articleTitle + '</li>');
		});
		
		newsPagination(0);
		
		hpNews.on('click', '.next', function() {
			var current = hpNews.find('.news-item:visible'),
				first = hpNews.find('.news-item:first'),
				next = current.next('.news-item'),
				next = next.index() == -1 ? first : next;
				
			current.fadeOut(speed, function() {
				next.fadeIn(speed);
			});
			newsPagination(next.index());
		});
		
		hpNews.on('click', '.prev', function() {
			var current = hpNews.find('.news-item:visible'),
				last = hpNews.find('.news-item:last'),
				prev = current.prev('.news-item'),
				prev = prev.index() == -1 ? last : prev;
				
			current.fadeOut(speed, function() {
				prev.fadeIn(speed);
			});
			newsPagination(prev.index());
		});
		
		hpNews.on('click', '.navigation ol li', function() {
			var current = hpNews.find('.news-item:visible');
				clicked = $(this).attr('rel');
				
			if(current.attr('id') != clicked) {
				current.fadeOut(speed, function() {
					$('#' + clicked).fadeIn(speed);
				});
				newsPagination($(this).index());
			}
		});
	}
});

function newsPagination(current) {
	$('.navigation ol li').removeClass('active');
	$('.navigation ol li').eq(current).addClass('active');
}