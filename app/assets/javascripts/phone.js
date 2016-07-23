var Phone = function(data){
  this.data = data;
}

Phone.prototype.getColors = function(){
  var colors = [];
  for(var i = 0; i < this.data.length; i++){
    colors.push(this.data[i]["color"]);
  }
  return colors;
}

Phone.prototype.colorSelection = function(){
  var colors = this.getColors();
  var option = "";
  for(var i = 0; i < colors.length; i++){
    buttons = buttons + "<option value='" +colors[i]+ "'" + ">"+colors[i]+ "</option>";
  }
  var selector = "<select name='colors' form='phone-form'>" +option+ "</select";
  return selector;

}

Phone.prototype.createRequest = function(){

  var colors = this.getColors();

  var request = {

    "subject" => "phones",
    "columns": [{
      "key": "price",
      "type": "numeric",
      "goal": "min",
      "is_objective": false,
      "full_name": "price",
      "range": {
        "low": 0,
        "high" 0,
      },
      "format": "number:2"
    },
    {
      "type": "categorical",
      "key": "color",
      "full_name": "Color",
      "range": colors,
      "goal": "min",
      "preference": [];
      "is_objective": false
    },
    {
      "type": "numeric",
      "key": "weight",
      "full_name": "Weight",
      "goal": "min",
      "range": {
        "low": 0,
        "high" 0,
      },
      "is_objective": false
    }],
    "options": this.data;
  };
  return request;
}

Phone.prototype.updatedRequest = function(){

  var request = this.createRequest();

  request["columns"][]


}
