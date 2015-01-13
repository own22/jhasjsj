class Imovel < ActiveRecord::Base
  belongs_to :tipo
  belongs_to :cidade
  belongs_to :bairro
end
