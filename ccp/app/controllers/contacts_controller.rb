class ContactsController < ApplicationController

  def new
    @contact = Contact.create(email: "capsclearpools@hotmail.com", phone: "(210)-788-3572")
    redirect_to contact_url(@contact)
  end

  def show
    @contact = Contact.find(1)
    render json: @contact
  end

end
