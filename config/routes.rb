Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "about", to: "pages#about"
  get "fullstack", to: "pages#fullstack"
  get "finance", to: "pages#finance"
  get "consulting", to: "pages#consulting"
  resources :contact, only: [:index, :new, :create]
end
