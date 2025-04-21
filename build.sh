# 依存関係の解決
cd backend
bundle install
cd ../frontend
npm install

# バックエンドのマイグレーション
cd ../backend
rails db:migrate
