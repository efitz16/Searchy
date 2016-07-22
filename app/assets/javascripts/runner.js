$(document).ready(function(){
	$('button').on('click', function() {
		$('.main_container').hide();
		$('body').html("<div class='category'><h1>Categories</h1><ul><li><button class='cat'>Computer</button></li></ul></div>");

		$('.cat').on('click', function() {
			$('.category').hide();
			$('body').html('<form>Im a form</form>');


			var example = {
				  "problem": {
				    "columns": [
				      {
				        "type": "numeric",
				        "key": "price",
				        "full_name": "Price",
				        "range": {
				          "low": 0.0,
				          "high": 400.0
				        },
				        "format": "number:2",
				        "goal": "min",
				        "is_objective": true
				      },
				      {
				        "type": "numeric",
				        "key": "weight",
				        "full_name": "Weight",
				        "format": "number:0",
				        "goal": "min",
				        "is_objective": true
				      },
				      {
				        "type": "categorical",
				        "key": "brand",
				        "full_name": "Brand",
				        "range": [
				          "Apple",
				          "HTC",
				          "Samsung",
				          "Sony"
				        ],
				        "goal": "min",
				        "preference": [
				          "Samsung",
				          "Apple",
				          "HTC"
				        ],
				        "is_objective": true
				      },
				      {
				        "type": "datetime",
				        "key": "rDate",
				        "full_name": "Release Date",
				        "format": "date: 'MMM dd, yyyy'",
				        "goal": "max",
				        "is_objective": false
				      }
				    ],
				    "subject": "phones",
				    "options": [
				      {
				        "key": "1",
				        "name": "Samsung Galaxy S4",
				        "values": {
				          "weight": 130,
				          "brand": "Samsung",
				          "price": 249,
				          "rDate": "2013-04-29T00:00:00Z"
				        },
				        "description_html": ""
				      },
				      {
				        "key": "2",
				        "name": "Apple iPhone 5",
				        "values": {
				          "weight": 112,
				          "brand": "Apple",
				          "price": 449,
				          "rDate": "2012-09-21T00:00:00Z"
				        },
				        "description_html": ""
				      },
				      {
				        "key": "3",
				        "name": "HTC One",
				        "values": {
				          "weight": 143,
				          "brand": "HTC",
				          "price": 299,
				          "rDate": "2013-03-01T00:00:00Z"
				        },
				        "description_html": ""
				      }
				    ]
				  }
				}

				
				$.ajax({
					url: '/searches',
    			type: 'POST',
    			data: example
				});
		})
	})
})

