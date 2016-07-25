class CreateLaptops < ActiveRecord::Migration[5.0]
  def change
    create_table :laptops do |t|
      t.string :name
      t.decimal :price
      t.integer :flash_memory_size
      t.integer :screen_size
      t.integer :ram
      t.string :max_screen_resolution
      t.string :operating_system
      t.string :image_url
      t.decimal :average_rating

      t.timestamps
    end
  end
end
