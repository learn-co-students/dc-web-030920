Rails.application.routes.draw do
  
  resources :pets

  get '/', to: 'static#home', as: 'home'
  get '/not_doges', to: 'pets#not_doges', as: 'not_doges'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
