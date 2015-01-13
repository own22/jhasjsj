class Cidade < ActiveRecord::Base
  has_many :imovels
  has_many :bairros
end
