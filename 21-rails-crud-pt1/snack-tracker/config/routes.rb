Rails.application.routes.draw do
  # get '/snacks', to: "snacks#index", as: "snacks"
  # get '/snacks/:id', to: "snacks#show", as: "snack"
  resources :snacks, only: [:index, :show]
  get "/about", to: "snacks#about"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end


