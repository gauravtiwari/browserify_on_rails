Rails.application.routes.draw do
  root to: 'pages#index'
  get 'pages/show', to: 'pages#show', as: :page_show
  get '/ping', to: 'messages#ping', as: :ping
  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'
end
