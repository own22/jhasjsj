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

ActiveRecord::Schema.define(version: 20150115203540) do

  create_table "bairros", force: true do |t|
    t.string   "nome"
    t.integer  "cidade_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "bairros", ["cidade_id"], name: "index_bairros_on_cidade_id"

  create_table "cidades", force: true do |t|
    t.string   "nome"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "fotos", force: true do |t|
    t.string   "image"
    t.integer  "imovel_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "fotos", ["imovel_id"], name: "index_fotos_on_imovel_id"

  create_table "imovels", force: true do |t|
    t.integer  "tipo_id"
    t.integer  "cidade_id"
    t.integer  "bairro_id"
    t.boolean  "venda"
    t.boolean  "aluguel"
    t.integer  "quartos"
    t.integer  "banheiros"
    t.integer  "suites"
    t.integer  "vagas"
    t.integer  "preco"
    t.string   "titulo"
    t.text     "descricao"
    t.text     "descricao_curta"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "imovels", ["bairro_id"], name: "index_imovels_on_bairro_id"
  add_index "imovels", ["cidade_id"], name: "index_imovels_on_cidade_id"
  add_index "imovels", ["tipo_id"], name: "index_imovels_on_tipo_id"

  create_table "tipos", force: true do |t|
    t.string   "nome"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
