Rails.application.routes.draw do
  root "cats#index"
  resources :cats
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users
  get '/append', to: 'users#append', as: 'append'
  get '/prepend', to: 'users#prepend', as: 'prepend'
  get '/before', to: 'users#before', as: 'before'
  get '/after', to: 'users#after', as: 'after'
  get '/update', to: 'users#update', as: 'update'
  get '/replace', to: 'users#replace', as: 'replace'
  get '/remove', to: 'users#remove', as: 'remove'
end
