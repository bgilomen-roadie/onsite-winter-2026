Rails.application.routes.draw do
  namespace :api do
    resources :books, only: [:index, :show]
    get 'genres', to: 'books#genres'
  end
  
  root to: proc { [200, {}, ['Books API - Visit /api/books']] }
end
