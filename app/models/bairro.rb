class Bairro < ActiveRecord::Base
  belongs_to :cidade
  has_many :imovels
end
