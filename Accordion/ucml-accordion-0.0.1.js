(function($){
	console.log("In function($)");
	$.fn.accordion=function(option){
		var $heads=$(this).children("h2");
		
		$heads.addClass("ucml-accordion-head").bind("click",function(){
			$(this).next().height(contentHeight).slideToggle();
		});
		$(this).children("h2+").addClass("ucml-accordion-content").hide();
		
		var accordion=new Object();
		accordion.height=$(this).height();
		accordion.width=$(this).width();
		var pattern=/^(\d[\d\.]*)(px)$/;
		var headMargin=$heads.first().css("marginBottom");
		console.log(headMargin);
		var contentHeight=accordion.height-$heads.first().height()*$heads.size();
		
	}
})(jQuery);
