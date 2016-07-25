class CreateCameras < ActiveRecord::Migration[5.0]
  def change
    create_table :cameras do |t|
      t.string :name
      t.decimal :price
      t.integer :optical_zoom
      t.integer :item_weight
      t.string :image_url
      t.decimal :average_rating

      t.timestamps
    end
  end
end
