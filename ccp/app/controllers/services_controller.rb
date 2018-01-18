class ServicesController < ApplicationController

  def index
    @services = Service.all
    render json: @services
  end

  def new
    @service = Service.create(title: "Chemical", price: 90)
    @service.service_items.build(value: "Brush walls and steps", who_int: 1)
    @service.service_items.build(value: "Empty skimmer basket", who_int: 1)
    @service.service_items.build(value: "Empty pump basket(s)", who_int: 1)
    @service.service_items.build(value: "Empty APC bag/filter", who_int: 1)
    @service.service_items.build(value: "Backwash on regular basis", who_int: 1)
    @service.service_items.build(value: "Test and adjust your water chemistry", who_int: 1)
    @service.service_items.build(value: "Verify pool filtration is working properly", who_int: 1)
    @service.service_items.build(value: "Report any issues with pool VIA pool recap or phone call", who_int: 1)
    @service.service_items.build(value: "We keep your pool looking beautiful all year long", who_int: 1)
    @service.service_items.build(value: "Keep water at proper level", who_int: 2)
    @service.service_items.build(value: "Have any problems with equipment fixed ASAP", who_int: 2)
    @service.service_items.build(value: "Report any issues with the pool to Caps Clear Pools ASAP (equipment/water issues)", who_int: 2)
    @service.save
    redirect_to service_url(@service)
  end

  def show
    @service = Service.find(params[:id])
    render json: @service, include: [:service_items]
  end

end
