class AddAttachmentImageToFotos < ActiveRecord::Migration
  def self.up
    change_table :fotos do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :fotos, :image
  end
end
