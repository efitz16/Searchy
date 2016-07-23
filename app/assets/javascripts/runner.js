$(document).ready(function(){
	$('button').on('click', function() {
		$('.main_container').hide();
		$('body').html("<div class='category'><h1>Categories</h1><ul><li><button class='phones'>Phones</button></li></ul></div>");

		$('.phones').on('click', function() {
			$('.category').hide();
			$('body').html("<button class='iphone'>Iphone</button></br></br><button class='samsung'>Samsungs</button>");

			$('.iphone').on('click', function() {
				$('.samsung').hide();
				$('.iphone').hide();

				$.ajax({
					url: '/semantics',
					type: 'POST',
					data: 'iphone'
				}).done(function(response) {
					var phoneForm = new Phone(response);
					$('body').html("<form id='phone-form' action='/semantics' method='post'>Max Price:<br><input type='number' name='maximum price' min='1' max='1000'><br>Max Weight:<br><input type='number' name='maximum weight' min='1' max='1000'><br>"+phoneForm.colorSelection()+"<input type='submit' value='Submit'></form>");
				});

			})

		});
	});
});
