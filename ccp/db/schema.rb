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

ActiveRecord::Schema.define(version: 20180118004703) do

  create_table "about_pages", force: :cascade do |t|
    t.text "about_1"
    t.text "about_2"
    t.text "about_3"
    t.text "about_4"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "phone"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "home_pages", force: :cascade do |t|
    t.text "motto"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "service_items", force: :cascade do |t|
    t.string "value"
    t.integer "who_int"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "service_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price"
  end

  create_table "websites", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
