class Imovel < ActiveRecord::Base
  belongs_to :tipo
  belongs_to :cidade
  belongs_to :bairro

  attr_accessor :novo_tipo

  before_save :criar_assossiations

  def criar_assossiations
    unless novo_tipo.blank?
      self.tipo_id = Tipo.find_or_create_by(nome: novo_tipo).id
    end
  end
end
