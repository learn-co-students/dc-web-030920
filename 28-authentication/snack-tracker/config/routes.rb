Rails.application.routes.draw do

  resources :snacks
  resources(:retailers, 
    {only: [:index, :show, :new, :create]}
  )
  resources :users, only: [:new, :create]
  
  get "/about", to: "snacks#about"
  get '/login', to: "sessions#login"
  post '/login', to: "sessions#process_login"
  get '/logout', to: "sessions#logout"


end


