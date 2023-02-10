Rails.application.routes.draw do
  resources :pages
  resources :posts
  resources :users

  get '/search', to: 'pages#search'
  get '/pagePosts/:size', to: 'pages#pagePosts'

  get "/getPosts", to: 'posts#longestPosts'

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/userRelatedPages", to: 'users#userRelatedPages'


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

end
