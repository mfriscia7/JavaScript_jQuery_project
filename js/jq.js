$(document).ready(function() {
	for(var i=0;i<16;i++){
		for (var j=0;j<16;j++){
			$('#wrapper').append('<div class="square" />');
		};
	}

	$('.square').mouseenter(function(){
		$(this).css({'background-color':'red'});
	});
	$('.square').mouseleave(function(){
		$(this).css({'background-color':'black'});
	});
	$('button').click(function(){
		var size = prompt("Specify dimensions");
	});
});