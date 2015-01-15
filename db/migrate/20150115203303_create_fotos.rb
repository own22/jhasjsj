class CreateFotos < ActiveRecord::Migration
  def change
    create_table :fotos do |t|
      t.string :image
      t.references :imovel, index: true

      t.timestamps
    end
  end
end
