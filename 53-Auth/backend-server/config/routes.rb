Rails.application.routes.draw do
  # localhost:3000/api/v1/users

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      post '/login', to: 'auth#create'
      get '/decode_token', to: 'users#profile' #given a token, find the authenticated user
    end
  end
end
