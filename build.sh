# 依存関係の解決
bundle install
npm install

# バックエンドのマイグレーション
cd backend
rails db:migrate
