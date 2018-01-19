class ServicesController < ApplicationController

  def index
    @services = Service.all
    render json: @services, include: [:service_items]
  end

  def new
    
  end

  def show
    @service = Service.find(params[:id])
    render json: @service, include: [:service_items]
  end

end
