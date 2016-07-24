class SemanticsController < ApplicationController
  SEM_API_KEY = ''

  SEM_SECRET = ''

  def create

    # binding.pry
    params[:category] = 'iphone'

    sem3 = Semantics3::Products.new(SEM_API_KEY, SEM_SECRET)

    sem3.products_field( "search", params[:category] )

    productsHash = sem3.get_products()

    semantics_results = []

    productsHash["results"].each_with_index do |item, index|
      hash = {}
      index += 1
      hash["key"] = index.to_s
      hash["name"] = item["name"]
      hash["price"] = item["price"].to_i
      hash["model"] = item["model"]
      hash["color"] = item["color"]
      hash["weight"] = item["weight"].to_i

      semantics_results << hash
    end

    semantics_results = semantics_results.to_json

    render :json => semantics_results

  end


  # sem3 = Semantics3::Products.new(SEM_API_KEY,SEM_SECRET)

  # sem3.products_field( "search", "phones" )

  # productsHash = sem3.get_products()

  # problem = {"subject"=> "", "columns": [], "options": [] }

  # problem["subject"] = "phones" # or whatever category is clicked--point is, we probs have to hard code this

  # brands = []

  # productsHash["results"].each do |p|
  #   brands << p["brand"]
  # end

  # brands.compact!

  # prices = []

  # productsHash["results"].each do |p|
  #   prices << p["price"]
  # end

  # prices.compact!

  # weights = []

  # productsHash["results"].each do |p|
  #   weights << p["weight"]
  # end

  # weights.compact!
end
