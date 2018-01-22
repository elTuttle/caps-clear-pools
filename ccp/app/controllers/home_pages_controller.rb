class HomePagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @home = HomePage.create(motto: "Here at Cap’s Clear Pools we are dedicated to giving you the most enjoyable time possible owning a pool!")

    redirect_to home_page_url(@home)
  end

  def update
    @home = HomePage.find(1)
    if params["image"] != ""
      @home.carousel_images.build(image_file_name: params["image"])
    end
    @home.update(motto: params["motto"])
    @home.save
  end

  def show
    @home = HomePage.find(1)
    render json: @home, include: [:carousel_images]
  end

end
