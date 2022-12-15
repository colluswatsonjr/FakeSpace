Rails.application.routes.draw do
  resources :posts
  resources :pages
  resources :users

  get  "/pages/:id", to: 'pages#show'
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
