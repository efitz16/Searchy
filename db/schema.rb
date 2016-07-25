# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160725161529) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accessories", force: :cascade do |t|
    t.string   "name"
    t.string   "brand"
    t.string   "kind"
    t.string   "url"
    t.string   "gender"
    t.decimal  "price",      precision: 15, scale: 2, default: "0.0"
    t.datetime "created_at",                                          null: false
    t.datetime "updated_at",                                          null: false
  end

  create_table "cameras", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price"
    t.integer  "optical_zoom"
    t.integer  "weight"
    t.string   "image_url"
    t.decimal  "average_rating"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "clothings", force: :cascade do |t|
    t.string   "kind"
    t.string   "gender"
    t.string   "name"
    t.decimal  "price",      precision: 15, scale: 2, default: "0.0"
    t.string   "url"
    t.string   "color"
    t.string   "brand"
    t.datetime "created_at",                                          null: false
    t.datetime "updated_at",                                          null: false
  end

  create_table "computers", force: :cascade do |t|
    t.string   "name"
    t.decimal  "price",            precision: 15, scale: 2, default: "0.0"
    t.string   "kind"
    t.string   "url"
    t.decimal  "weight",           precision: 15, scale: 2, default: "0.0"
    t.string   "brand"
    t.string   "operating_system"
    t.integer  "screen_size"
    t.integer  "RAM"
    t.decimal  "battery_life",     precision: 15, scale: 2, default: "0.0"
    t.datetime "created_at",                                                null: false
    t.datetime "updated_at",                                                null: false
  end

  create_table "laptops", force: :cascade do |t|
    t.string   "name"
    t.string   "brand"
    t.decimal  "price"
    t.integer  "flash_memory_size"
    t.integer  "screen_size"
    t.integer  "RAM"
    t.string   "max_screen_resolution"
    t.string   "operating_system"
    t.string   "image_url"
    t.decimal  "average_rating"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

  create_table "phones", force: :cascade do |t|
    t.string   "name"
    t.string   "url"
    t.decimal  "price",      precision: 15, scale: 2, default: "0.0"
    t.decimal  "weight",     precision: 15, scale: 2, default: "0.0"
    t.string   "brand"
    t.datetime "created_at",                                          null: false
    t.datetime "updated_at",                                          null: false
  end

  create_table "televisions", force: :cascade do |t|
    t.string   "name"
    t.string   "display_technology"
    t.string   "resolution"
    t.decimal  "display_size"
    t.decimal  "price"
    t.decimal  "weight"
    t.decimal  "average_rating"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

end
