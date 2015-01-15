class FotosController < ApplicationController
  def create
    @foto = Foto.create(foto_params)
  end

  private

  def foto_params
    params.require(:foto).permit(:image)
  end
end
