class CreateImovels < ActiveRecord::Migration
  def change
    create_table :imovels do |t|
      t.references :tipo, index: true
      t.references :cidade, index: true
      t.references :bairro, index: true
      t.boolean :venda
      t.boolean :aluguel
      t.integer :quartos
      t.integer :banheiros
      t.integer :suites
      t.integer :vagas
      t.integer :preco
      t.string :titulo
      t.text :descricao
      t.text :descricao_curta

      t.timestamps
    end
  end
end
