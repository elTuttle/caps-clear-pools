class ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    #@contact = Contact.create(email: "capsclearpools@hotmail.com", phone: "(210)-788-3572")
    redirect_to contact_url(@contact)
  end

  def update
    @contact = Contact.find(1)
    @contact.update(email: params["email"], phone: params["phone"])
    @contact.save
  end

  def show
    @contact = Contact.find(1)
    render json: @contact
  end

end
