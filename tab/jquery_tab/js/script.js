$(function() {
	$('.tabs .tab-links a').click(function(event) {
		event.preventDefault();

		var currentAttrValue = $(this).attr('href');

		// Show/Hide Tabs
		$('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/Remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');
	});	
});