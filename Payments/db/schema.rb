# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20161001103204) do

  create_table "bearings", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "typec"
    t.string   "materialdescription"
    t.string   "size"
    t.string   "quantity"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "certs", force: true do |t|
    t.string   "attachment"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comments", force: true do |t|
    t.integer  "link_id"
    t.text     "body"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "sort_number"
  end

  add_index "comments", ["link_id"], name: "index_comments_on_link_id"
  add_index "comments", ["user_id"], name: "index_comments_on_user_id"

  create_table "fasteners", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "typec"
    t.string   "grade"
    t.string   "item"
    t.string   "size"
    t.string   "quantity"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "fittings", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "typec"
    t.string   "materialgrade"
    t.string   "itemdescription"
    t.string   "size"
    t.string   "sch"
    t.string   "lr"
    t.string   "quantity"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "flanges", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "materialgrade"
    t.string   "size"
    t.string   "classc"
    t.string   "tk"
    t.string   "quantity"
    t.string   "kgs"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "gaskets", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "typec"
    t.string   "material"
    t.string   "nb"
    t.string   "thk"
    t.string   "classc"
    t.string   "quantity"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "links", force: true do |t|
    t.string   "title"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.integer  "auth"
    t.integer  "price"
  end

  add_index "links", ["user_id"], name: "index_links_on_user_id"

  create_table "payments", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "last4"
    t.float    "amount"
    t.boolean  "success"
    t.string   "authorization_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pipes", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "description"
    t.string   "typec"
    t.string   "materialgrade"
    t.string   "inch"
    t.string   "od"
    t.string   "tk"
    t.string   "lg"
    t.string   "quantity"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "products", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "rods", force: true do |t|
    t.integer  "slno"
    t.string   "code"
    t.string   "typec"
    t.string   "material"
    t.string   "size"
    t.string   "tk"
    t.string   "dia"
    t.string   "lg"
    t.string   "quantity"
    t.string   "weight"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tubes", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "typec"
    t.string   "materialgrade"
    t.string   "od"
    t.string   "lg"
    t.string   "weight"
    t.string   "quantity"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "name"
    t.string   "attachment"
    t.string   "certificate"
    t.boolean  "email_confirmed",        default: false
    t.string   "confirm_token"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.boolean  "admin"
    t.integer  "auth"
  end

  add_index "users", ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

  create_table "votes", force: true do |t|
    t.integer  "votable_id"
    t.string   "votable_type"
    t.integer  "voter_id"
    t.string   "voter_type"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "votes", ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope"
  add_index "votes", ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope"

  create_table "weldings", force: true do |t|
    t.integer  "slno"
    t.string   "codeno"
    t.string   "description"
    t.string   "quantity"
    t.string   "UOM"
    t.float    "price"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
