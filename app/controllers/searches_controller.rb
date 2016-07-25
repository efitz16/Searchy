class SearchesController < ApplicationController
  # WATSON_USERNAME = ENV['WATSON_USERNAME']

  # WATSON_PASSWORD = ENV['WATSON_PASSWORD']
WATSON_USERNAME = ''
WATSON_PASSWORD = ''
  def create


  #   example = {
  # "subject" => "phones",
  # "columns": [{
  #     "key": "price",
  #     "type": "numeric",
  #     "goal": "min",
  #     "is_objective": true,
  #     "full_name": "Price",
  #     "range": {
  #       "low": 0,
  #       "high": 400
  #     },
  #     "format": "number:2"
  #   },
  #   {
  #     "key": "weight",
  #     "type": "numeric",
  #     "goal": "min",
  #     "is_objective": true,
  #     "full_name": "Weight",
  #     "format": "number:0"
  #   }],
  # "options": [
  #   {
  #     "key": "1",
  #     "name": "Apple iPhone 6 - 4.7\" - 16 GB - Gold",
  #     "values": {
  #       "price": 249,
  #       "weight": 130,
  #       "brand": "Samsung"
  #     }},
  #   {
  #     "key": "2",
  #     "name": "Apple iPhone 5",
  #     "values": {
  #       "price": 449,
  #       "weight": 112,
  #       "brand": "Apple"}}]}.to_json
  # binding.pry
  example = JSON.parse(params[:data])
  example = example.to_json
  # binding.pry



    if request.xhr?
      request = HTTParty.post("https://gateway.watsonplatform.net/tradeoff-analytics/api/v1/dilemmas?generate_visualization=false", :basic_auth => {username:WATSON_USERNAME , password:WATSON_PASSWORD}, headers: {"Content-Type" => "application/json"}, body: example)
      # binding.pry
     render json:request
    end
  end
end
