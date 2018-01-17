class HomePagesController < ApplicationController

  def show
    @home = HomePage.find(1)
    render json: @home
  end

end
