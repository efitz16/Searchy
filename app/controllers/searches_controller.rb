class SearchesController < ApplicationController
  def create


    example = {
  "subject" => "phones",
  "columns": [{
      "key": "price",
      "type": "numeric",
      "goal": "min",
      "is_objective": true,
      "full_name": "Price",
      "range": {
        "low": 0,
        "high": 400
      },
      "format": "number:2"
    }],
  "options": [
    {
      "key": "1",
      "name": "Samsung Galaxy S4",
      "values": {
        "price": 249,
        "weight": 130,
        "brand": "Samsung",
        "rDate": "2013-04-29T00:00:00Z"
      }
    }
  ]}.to_json


    if request.xhr?
      request = HTTParty.post("https://gateway.watsonplatform.net/tradeoff-analytics/api/v1/dilemmas?generate_visualization=false", :basic_auth => {username:"c09a3da0-63b2-4381-9ee8-0ddd9ce53cb7" , password:"0FtKhPANJD8g"}, headers: {"Content-Type" => "application/json"}, body: example)
     render json:request
    end
  end
end
