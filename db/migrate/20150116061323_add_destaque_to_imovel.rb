class AddDestaqueToImovel < ActiveRecord::Migration
  def change
    add_column :imovels, :destaque, :boolean
  end
end
