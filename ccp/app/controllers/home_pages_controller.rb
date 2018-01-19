class HomePagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    #@home = HomePage.create(motto: "Here at Cap’s Clear Pools we are dedicated to giving you the most enjoyable time possible owning a pool!")
    redirect_to home_page_url(@home)
  end

  def update
    @home = HomePage.find(1)
    @home.update(motto: params["_json"])
    @home.save
  end

  def show
    @home = HomePage.find(1)
    render json: @home
  end

end
