// map js


$(document).ready(function() {
// begin Ready

	//...................................................
	// When the form changes
	$('#mapForm').change(function() {
	
		var selectedCity = $('#mapForm option:selected').val();
		if (selectedCity == 'ALL'){
			$('a.dot').slideDown(1000);
		}else{
			$('a.dot[city = "'+selectedCity+'"]').slideDown(1000);
			$('a.dot[city != "'+selectedCity+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var neighborhood = '.neighborhood_detail#' + $(this).attr('neighborhood');
		var htmlCode = $(neighborhood).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .neighborhood_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});

// end Ready
});