Rails.application.routes.draw do

  # get '/snacks', to: "snacks#index", as: "snacks"
  # get '/snacks/:id', to: "snacks#show", as: "snack"
  resources :snacks
  resources(:retailers, 
    {only: [:index, :show, :new, :create]}
  )
  get "/about", to: "snacks#about"
  get '/login', to: "sessions#login"
  post '/login', to: "sessions#process_login"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


