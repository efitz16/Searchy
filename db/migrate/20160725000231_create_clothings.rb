class CreateClothings < ActiveRecord::Migration[5.0]
  def change
    create_table :clothings do |t|
    	t.string :kind
    	t.string :gender
    	t.string :name
    	t.decimal :price, precision: 15, scale: 2, default: 0
      t.string :url
      t.string :color
      t.string :brand
      t.timestamps
    end
  end
end
