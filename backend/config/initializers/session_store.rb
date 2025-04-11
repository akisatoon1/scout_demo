# Be sure to restart your server when you modify this file.

# セッションストアの設定
Rails.application.config.session_store :cookie_store, 
  key: '_scout_demo_session',
  same_site: :lax,
  secure: Rails.env.production? 