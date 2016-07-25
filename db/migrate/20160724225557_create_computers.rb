class CreateComputers < ActiveRecord::Migration[5.0]
  def change
    create_table :computers do |t|
    	t.string :name
    	t.decimal :price, precision: 15, scale: 2, default: 0
    	t.string :kind
    	t.string :url
    	t.decimal :weight, precision: 15, scale: 2, default: 0
    	t.string :brand
    	t.string :operating_system
    	t.integer :screen_size
    	t.integer :RAM
    	t.decimal :battery_life, precision: 15, scale: 2, default: 0
      t.timestamps
    end
  end
end
