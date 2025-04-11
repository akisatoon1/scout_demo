class ApplicationController < ActionController::Base
  # CSRFトークンの保護を設定
  protect_from_forgery with: :exception
  
  # セッション管理を有効化
  include ActionController::Cookies
end
