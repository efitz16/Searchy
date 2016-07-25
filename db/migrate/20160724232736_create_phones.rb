class CreatePhones < ActiveRecord::Migration[5.0]
  def change
    create_table :phones do |t|
    	t.string :name
    	t.string :url
    	t.decimal :price, precision: 15, scale: 2, default: 0
    	t.decimal :weight, precision: 15, scale: 2, default: 0
    	t.string :brand

      t.timestamps
    end
  end
end
