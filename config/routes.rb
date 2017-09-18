Rails.application.routes.draw do

  devise_for :users
  root to: 'welcome#index'
  resources :bids
  get 'fox_volume', to: 'bids#fox_volume_check'
end
