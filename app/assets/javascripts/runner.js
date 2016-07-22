$(document).ready(function(){
	$('button').on('click', function() {
		$('.main_container').hide();
		$('body').html("<div class='category'><h1>Categories</h1><ul><li><button class='cat'>Computer</button></li></ul></div>");

		$('.cat').on('click', function() {
			$('.category').hide();
			$('body').html('<form>Im a form</form>');
		})
	})
})

