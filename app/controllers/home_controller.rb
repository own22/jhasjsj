class HomeController < ApplicationController
  def index
    @destaque = Imovel.where("destaque = ?", true).limit(8)
  end
end
