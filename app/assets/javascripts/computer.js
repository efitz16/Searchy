var Computer = function(data) {
	this.data = data;
	// debugger;
}

Computer.prototype.getNames = function(){
	var names = [];

	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
		names.push(this.data[i]["name"])
	}

	return names;
}

Computer.prototype.kindSelection = function() {
	var names = this.getKindsOf();

	var option = "<option value='--'>--</option>";

	for(var i = 0; i < names.length; i++){
		option = option + "<option value='"+names[i]+ "'" + ">"+names[i]+ "</option>";
	}

	var selector = "<select name='kinds' form='computer-form'>" +option+ "</select>";
  
  return selector;
}

Computer.prototype.buildOptions = function(){
	var options = [];

	for(var i = 1; i < this.data.length; i++) {
		hash = {};

		hash["key"] = this.data[i]["id"];
		hash["name"] = this.data[i]["name"];
		hash["values"] = {};
		hash["values"]["price"] = parseInt(this.data[i]["price"]);
		hash["values"]["kind"] = this.data[i]["kind"];
		hash["values"]["brand"] = this.data[i]["brand"];
		hash["values"]["weight"] = parseInt(this.data[i]["weight"]);
		hash["values"]["brand"] = this.data[i]["brand"];
		hash["values"]["operating_system"] = this.data[i]["operating_system"];
		hash["values"]["screen_size"] = parseInt(this.data[i]["screen_size"]);
		hash["values"]["RAM"] = parseInt(this.data[i]["RAM"]);
		hash["values"]["battery_life"] = parseInt(this.data[i]["battery_life"]);
		
		options.push(hash);
	}
	return options;

} 

Computer.prototype.getPriceHighLows = function(){
	
} 

Computer.prototype.getKindsOf = function(){
	var kinds = [];

	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
		kinds.push(this.data[i]["kind"])
	}

	return kinds;
} 

Computer.prototype.getBrands = function(){
	var brands = [];

	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
		brands.push(this.data[i]["brand"])
	}

	return brands;	
} 

Computer.prototype.getWeights = function(){
	
} 

Computer.prototype.getOS = function(){
	var ops_systs = [];

	for(var i = 1; i < this.data.length; i++){ // begins at one because first Object identifies the category
		ops_systs.push(this.data[i]["operating_system"])
	}

	return ops_systs;	
} 

Computer.prototype.getScreSi = function(){
	
} //bat life and ram

Computer.prototype.CreateRequest = function(){
	
	var request = {
		"subject": "phones",
    "columns": [{
      "key": "price",
      "type": "NUMERIC",
      "goal": "min",
      "is_objective": true,
      "full_name": "Price",
      "range": {
        "low": 0,
        "high": 0,
      },
      "format": "number:2"
  	},
  	{
  	  "type": "NUMERIC",
      "key": "weight",
      "full_name": "Weight",
      "goal": "min",
      "range": {
        "low": 0,
        "high": 0,
      },
      "is_objective": true
  	},
  	{
  	  "type": "categorical",
      "key": "kind",
      "full_name": "Kind",
      "range": this.getKindsOf(),
      "goal": "min",
      "preference": [],
      "is_objective": true
  	},
  	{
  	  "type": "categorical",
      "key": "brand",
      "full_name": "Brand",
      "range": this.getBrands(),
      "goal": "min",
      "preference": [],
      "is_objective": true
  	},
  	{
  	  "type": "categorical",
      "key": "operating_system",
      "full_name": "Operating_system",
      "range": this.getOS(),
      "goal": "min",
      "preference": [],
      "is_objective": true
  	},
  	{
  	  "type": "NUMERIC",
      "key": "screen_size",
      "full_name": "Screen_size",
      "goal": "min",
      "range": {
        "low": 0,
        "high": 0,
      },
      "is_objective": true
  	},
  	{
  	  "type": "NUMERIC",
      "key": "RAM",
      "full_name": "RAM",
      "goal": "min", //max?
      "range": {
        "low": 0,
        "high": 0,
      },
      "is_objective": true
  	},
  	{
  	  "type": "NUMERIC",
      "key": "batery_life",
      "full_name": "Batery_life",
      "goal": "min", //max?
      "range": {
        "low": 0,
        "high": 0,
      },
      "is_objective": true
  	}], 
  	"options": this.buildOptions()
	};

	return request;
} 