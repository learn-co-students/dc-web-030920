Rails.application.routes.draw do
  # localhost:3000/api/v1/users

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      post '/login', to: 'auth#create'
    end
  end
end
