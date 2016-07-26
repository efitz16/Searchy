// var LaptopRequest = function(data){
//   this.data = data;
// }

// LaptopRequest.prototype.getOs = function(){

//   var os = [];
//   for(var i = 0; i < this.data.length; i++){
//     os.push(this.data[i]["os"]);
//   }
//   return os;
// }

// LaptopRequest.prototype.osSelection = function(){
//   var os = this.getOs();
//   var option = "";
//   for(var i = 0; i < colors.length; i++){
//     option = option + "<option value='" +os[i]+ "'" + ">"+os[i]+ "</option>";
//   }
//   var selector = "<select name='operating System' form='laptop-form'>" +option+ "</select>";
//   return selector;

// }

// LaptopRequest.prototype.getResolution = function(){

//   var resolution = [];
//   for(var i = 0; i < this.data.length; i++){
//     resolution.push(this.data[i]["resolution"]);
//   }
//   return resolution;
// }

// LaptopRequest.prototype.resolutionSelection = function(){
//   var resolutions = this.getResolution();
//   var option = "";
//   for(var i = 0; i < resolutions.length; i++){
//     option = option + "<option value='" +resolutions[i]+ "'" + ">"+resolutions[i]+ "</option>";
//   }
//   var selector = "<select name='resolution' form='laptop-form'>" +option+ "</select>";
//   return selector;

// }

// LaptopRequest.prototype.createRequest = function(){

//   var request = {

//       "subject": "laptops",
//       "columns": [{
//         "type": "NUMERIC",
//         "key": "price",
//         "goal": "min",
//         "is_objective": true,
//         "full_name": "Price",
//         "range": {
//           "low": 0,
//           "high": 0,
//         },
//         "format": "number:2"
//       },
//       {
//         "type": "NUMERIC",
//         "key": "flash"
//         "full_name": "Flash_Memory",
//         "range": {
//           "low": 0,
//           "high": 0,
//         }
//         "goal": "min",
//         "is_objective": true
//       },
//       {
//         "type": "NUMERIC",
//         "key": "screen",
//         "full_name": "Screen_Size",
//         "goal": "max",
//         "range": {
//           "low": 0,
//           "high": 0,
//         },
//         "is_objective": true
//       },
//       {
//         "type": "NUMERIC",
//         "key": "ram",
//         "full_name": "RAM",
//         "range": {
//           "low": 0,
//           "high": 0,
//         }
//         "goal": "max",
//         "is_objective": true
//       },
//       {
//         "type": "categorical",
//         "key": "resolution",
//         "full_name": "Screen_Resolution",
//         "range": this.getResolution(),
//         "preference": [],
//         "goal": "min",
//         "is_objective": true
//       },
//       {
//         "type": "categorical",
//         "key": "os",
//         "full_name": "Operating_Sytem",
//         "range": this.getOs(),
//         "preference": []
//         "goal": "min",
//         "is_objective": true
//       },
//       {
//       "type": "NUMERIC",
//       "key": "rating",
//       "full_name": "Average_Rating",
//       "range": {
//         "low": 0,
//         "high": 0,
//       }
//       "goal": "max",
//       "is_objective": true
//     }],
//     "options": this.data
//   };

//   return request;
// }

// LaptopRequest.prototype.updateRequest = function(formData){

//   var upRequest = this.createRequest();

//   request["columns"][0]["range"]["high"] = parseInt(formData[0].value);
//   request["columns"][1]["range"]["high"] = parseInt(formData[1].value);
//   request["columns"][2]["range"]["high"] = parseInt(formData[2].value);
//   request["columns"][3]["range"]["high"] = parseInt(formData[3].value);
//   request["columns"][4]["preference"].push(formData[4].value);
//   request["columns"][5]["preference"].push(formData[5].value);
//   request["columns"][3]["range"]["high"] = parseInt(formData[6].value);

//   return upRequest;
// }
