var Phone = function(data){
  this.data = data;
}

Phone.prototype.getColors = function(){
  var colors = [];
  for(var i = 0; i < this.data.length; i++){
    colors.push(this.data[i]["values"]["color"]);
  }
  return colors;
}

Phone.prototype.colorSelection = function(){
  var colors = this.getColors();
  var option = "";
  for(var i = 0; i < colors.length; i++){
    option = option + "<option value='" +colors[i]+ "'" + ">"+colors[i]+ "</option>";
  }
  var selector = "<select name='colors' form='phone-form'>" +option+ "</select>";
  return selector;

}

Phone.prototype.createRequest = function(){

  var colors = this.getColors();



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
        "high": 1000,
      },
      "format": "number:2"
    },
    {
      "type": "categorical",
      "key": "color",
      "full_name": "Color",
      "range": colors,
      "goal": "min",
      "preference": [],
      "is_objective": true
    },
    {
      "type": "NUMERIC",
      "key": "weight",
      "full_name": "Weight",
      "goal": "min",
      "range": {
        "low": 0,
        "high": 1000,
      },
      "is_objective": true
    }],
    "options": this.data
  };
  return request;
}

Phone.prototype.updatedRequest = function(data){

  var request = this.createRequest();

  request["columns"][0]["range"]["high"] = parseInt(data[0].value);
  request["columns"][1]["preference"].push(data[2].value);
  request["columns"][2]["range"]["high"] = parseInt(data[1].value);


  return request;

}
