class HomeController < ApplicationController
  def index
    @destaques = Imovel.where("destaque = ?", true).limit(8)
  end
end
