Rails.application.routes.draw do
  # get 'scientists', to: "scientists#index"
  # get 'scientists/:id', to: "scientists#show"
  resources :planets
  resources :scientists
  resources :missions, only: [:new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
