// var Television = function(data){
//   this.data = data;
// }

// Television.prototype.getDisplay = function(){

//   var displays = [];
//   for(var i = 0; i < this.data.length; i++){
//     displays.push(this.data[i]["os"]);
//   }
//   return displays;
// }

// Television.prototype.getResolution = function(){

//   var resolutions = [];
//   for(var i = 0; i < this.data.length; i++){
//     resolutions.push(this.data[i]["os"]);
//   }
//   return resolutions;
// }


// Television.prototype.createRequest = function(){

//   var request = {

//       "subject": "televisions",
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
//         "type": "categorical",
//         "key": "display"
//         "full_name": "Display_Technoology",
//         "range": this.getDisplay(),
//         "preference": [],
//         "goal": "min",
//         "is_objective": true
//       },
//       {
//         "type": "categorical",
//         "key": "resolution",
//         "full_name": "Resolution",
//         "range": this.getResolution(),
//         "prefernece": [],
//         "goal": "max",
//         "is_objective": true
//       },
//       {
//         "type": "NUMERIC",
//         "key": "display_size",
//         "full_name": "Display_size",
//         "range": {
//           "low": 0,
//           "high": 0,
//         }
//         "goal": "max",
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


// Laptop.prototype.updateRequest = function(){

//   var upRequest = this.createRequest();

//   request["columns"][0]["range"]["high"] = parseInt(data[0].value);
//   request["columns"][1]["preference"].push(data[1].value);
//   request["columns"][2]["preference"].push(data[2].value);
//   request["columns"][3]["range"]["high"] = parseInt(data[3].value);
//   request["columns"][3]["range"]["high"] = parseInt(data[4].value);

//   return upRequest;
// }
