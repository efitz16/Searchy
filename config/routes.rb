Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'categories#index'
  resources 'searches'
  resources 'semantics'

  resources 'categories'

  resources 'electronics'
end
