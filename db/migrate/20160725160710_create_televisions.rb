class CreateTelevisions < ActiveRecord::Migration[5.0]
  def change
    create_table :televisions do |t|
      t.string :name
      t.string :display_technology
      t.string :resolution
      t.decimal :display_size
      t.decimal :price
      t.string :image_url
      t.decimal :average_rating

      t.timestamps
    end
  end
end
