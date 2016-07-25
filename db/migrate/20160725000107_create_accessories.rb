class CreateAccessories < ActiveRecord::Migration[5.0]
  def change
    create_table :accessories do |t|
      t.string :name
      t.string :brand
      t.string :kind
      t.string :url
      t.string :gender
      t.decimal :price, precision: 15, scale: 2, default: 0

      t.timestamps
    end
  end
end
