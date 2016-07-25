class SearchesController < ApplicationController
  # WATSON_USERNAME = ENV['WATSON_USERNAME']

  # WATSON_PASSWORD = ENV['WATSON_PASSWORD']
WATSON_USERNAME = ''
WATSON_PASSWORD = ''


  def create
  example = JSON.parse(params[:data])
  example = example.to_json



    if request.xhr?
      request = HTTParty.post("https://gateway.watsonplatform.net/tradeoff-analytics/api/v1/dilemmas?generate_visualization=false", :basic_auth => {username:WATSON_USERNAME , password:WATSON_PASSWORD}, headers: {"Content-Type" => "application/json"}, body: example)

     render json:request
    end
  end
end
