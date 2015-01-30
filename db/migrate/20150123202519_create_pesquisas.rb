class CreatePesquisas < ActiveRecord::Migration
  def change
    create_table :pesquisas do |t|

      t.timestamps
    end
  end
end
