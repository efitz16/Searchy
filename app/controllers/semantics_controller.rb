class SemanticsController < ApplicationController
  SEM_API_KEY = ''

  SEM_SECRET = ''

  def create
    binding.pry



        case params[:category]
        when "cameras"
          cameras = ["type": "cameras"]
          Camera.all.each do |c|
            cameras << c.as_json
          end
          render json:cameras
        when "laptops"
          laptops = ["type": "laptops"]
          Laptop.all.each do |l|
            laptops << l.as_json
          end
          render json:laptops
        when "televisions"
          televisions = ["type": "televisions"]
          Television.all.each do |t|
            televisions << t.as_json
          end
          render json:televisions
        end
  end
end
