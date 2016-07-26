// var Clothing = function(data) {
// 	this.data = data;
// }

// Clothing.prototype.getKindsOf = function(){
// 	var kinds = [];

// 	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
// 		kinds.push(this.data[i]["kind"])
// 	}

// 	return kinds;
// } 

// Clothing.prototype.getBrands = function(){
// 	var brands = [];

// 	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
// 		brands.push(this.data[i]["brand"])
// 	}

// 	return brands;	
// } 

// Clothing.prototype.getGenders = function(){
// 	var brands = [];

// 	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
// 		brands.push(this.data[i]["gender"])
// 	}

// 	return brands;	
// }

// Clothing.prototype.getColors = function(){
// 	var colors = [];

// 	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
// 		brands.push(this.data[i]["color"])
// 	}

// 	return colors;	
// }

// Clothing.prototype.buildOptions = function(){
// 	var options = [];

// 	for(var i = 1; i < this.data.length; i++) {
// 		hash = {};

// 		hash["key"] = this.data[i]["id"];
// 		hash["name"] = this.data[i]["name"];
// 		hash["values"] = {};
// 		hash["values"]["price"] = parseInt(this.data[i]["price"]);
// 		hash["values"]["kind"] = this.data[i]["kind"];
// 		hash["values"]["brand"] = this.data[i]["brand"];
// 		hash["values"]["brand"] = parseInt(this.data[i]["brand"]);
// 		hash["values"]["color"] = this.data[i]["color"];
// 		hash["values"]["gender"] = parseInt(this.data[i]["gender"]);
// 		options.push(hash);
// 	}
// 	return options;

// } 

// Clothing.prototype.createRequest = function(){
	
// 	var request = {
// 		"subject": "clothing",
//     "columns": [{
//       "key": "price",
//       "type": "NUMERIC",
//       "goal": "min",
//       "is_objective": true,
//       "full_name": "Price",
//       "range": {
//         "low": 0,
//         "high": 0,
//       },
//       "format": "number:2"
//   	},
//   	{
//   	  "type": "categorical",
//       "key": "kind",
//       "full_name": "Kind",
//       "range": this.getKindsOf(),
//       "goal": "min",
//       "preference": [],
//       "is_objective": true
//   	},
//   	{
//   	  "type": "categorical",
//       "key": "brand",
//       "full_name": "Brand",
//       "range": this.getBrands(),
//       "goal": "min",
//       "preference": [],
//       "is_objective": true
//   	},
//   	{
//   	  "type": "categorical",
//       "key": "gender",
//       "full_name": "Gender",
//       "range": this.getGenders(),
//       "goal": "min",
//       "preference": [],
//       "is_objective": true
//   	},
//   	{
//   	  "type": "categorical",
//       "key": "color",
//       "full_name": "Color",
//       "range": this.getColors(),
//       "goal": "min",
//       "preference": [],
//       "is_objective": true
//   	}], 
//   	"options": this.buildOptions()
// 	};

// 	return request;
// } 

// Clothing.prototype.updatedRequest = function(data){

//   var request = this.createRequest();

//   request["columns"][0]["range"]["high"] = parseInt(data[0].value);
//   request["columns"][2]["preference"].push(data[2].value);
//   request["columns"][1]["range"]["high"] = parseInt(data[1].value);

//   return request;
// }




