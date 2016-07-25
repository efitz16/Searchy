$(document).ready(function(){
	$('button').on('click', function() {
		$('.main_container').hide();
		$('body').html("<div class='category'><h1>Categories</h1><ul><li><button class='phones'>Phones</button></li><li><button class='computers'>Computers</button></li><li><button class='accessories'>Accessories</button></li><li><button class='clothing'>Clothing</button></li></ul></div>");

		$('button').on('click', function() {
			$('.category').hide();
			var category = $(this).attr('class');

				$.ajax({
					url: '/semantics?category=' + category,
					type: 'GET'
				}).done(function(response));
			})
		});
	});


// .done(function(response) {
// 					var phoneForm = new Phone(response);
// 					$('body').html("<form id='phone-form' action='/semantics' method='post'>Max Price:<br><input type='number' name='maximum price' min='1' max='1000'><br>Max Weight:<br><input type='number' name='maximum weight' min='1' max='1000'><br>"+phoneForm.colorSelection()+"<input type='submit' value='Submit'></form>");
// 					$('#phone-form').on('submit', function(e)  {
// 						// var high_price = this
// 						e.preventDefault();
// 						phoneForm = phoneForm.updatedRequest($(this).serializeArray());

// 						$.ajax({
// 							url: '/searches',
// 							dataType: 'json',
// 							contetType: 'application/json',
// 							type: 'POST',
// 							data: {data: JSON.stringify(phoneForm)}
// 						}).done(function(response) {
// 							// response.preventDefault();
							
// 							var key_option = {};

// 							for(var i = 0; i < response["resolution"]["solutions"].length; i++) {
// 								key_option[response["resolution"]["solutions"][i]["solution_ref"]] = response["resolution"]["solutions"][i]["status"];
// 							}
// 								var render = [];

// 								var front = [];

// 								var no_pref = [];


// 								for (var i = 1; i <= response["problem"]["options"].length; i++) {
// 									switch(key_option[i]){
// 									case "FRONT":
// 										front.push(response["problem"]["options"][i-1]["name"]);
// 										break;
// 									case "DOES_NOT_MEET_PREFERENCE":
// 										no_pref.push(response["problem"]["options"][i-1]["name"]);
// 									}
// 								}

// 								render.push(front);
// 								render.push(no_pref);

// 								var arr = [].concat.apply([], render);

// 								for(var i = 0; i < arr.length; i++){
// 									$('#phone-form').append('<p>'+arr[i]+'</p>');
// 								}

// 						});

// 					})
// 				});
// 				// $.ajax({
// 				// 	url: "/searches",

// 				// });
// 			})

// 		});

		
// 	});
// });
