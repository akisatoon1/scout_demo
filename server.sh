#!/bin/bash

# バックエンドの起動
cd backend
rails server -p 3000 &
BACKEND_PID=$!

# フロントエンドの起動
cd ../frontend
npm run dev -- -p 3001 &
FRONTEND_PID=$!

# Ctrl+Cのハンドリング
trap 'kill $BACKEND_PID $FRONTEND_PID; exit' INT

# プロセスの終了を待つ
wait
