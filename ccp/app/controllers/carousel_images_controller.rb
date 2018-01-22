class CarouselImagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def destroy
    CarouselImage.destroy(params[:id])
  end

end
