Rails.application.routes.draw do
  resources :contacts
  resources :services
  resources :about_pages
  resources :home_pages
  resources :websites
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
