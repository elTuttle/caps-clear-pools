class ServicesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @services = Service.all
    render json: @services, include: [:service_items]
  end

  def create
    binding.pry
  end

  def show
    @service = Service.find(params[:id])
    render json: @service, include: [:service_items]
  end

end
