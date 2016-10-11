LinkAggr::Application.routes.draw do
  resources :products

  resources :rods

  resources :fasteners

  resources :bearings

  resources :pipes

  resources :fittings

  resources :gaskets

  resources :flanges

  resources :tubes

  resources :weldings

  get "payments/index"
  get "payments/new"
  get "payments/create"
  get "certs/index"
  get "certs/new"
  get "certs/create"
  get "certs/destroy"
  resources :comments
  resources :resumes, only: [:index, :new, :create, :destroy]
  resources :payments, only:[:index, :new, :create]

  devise_for :users
  resources :links do
      member do
          put "Like", to: "links#upvote"
          put "Dislike", to: "links#downvote"
      end
      resources :comments
  end
  root to: "links#index"
  resources :users do
    member do
      get :confirm_email
    end
  end
end
