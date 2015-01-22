class Foto < ActiveRecord::Base
  belongs_to :imovel

  has_attached_file :image, :styles => { :thumb => "270x200#", :medium => "1280x960" }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/ 

end
