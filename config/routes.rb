Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :users, param: :id do
        resources :redemptions
      end
      resources :rewards, only: [:show, :index]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
