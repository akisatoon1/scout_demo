# インターン生と企業をマッチングするスカウトサービス

## 規約(ルール)
- バックエンドには Rails, フロントエンドには Next.js を利用してください。
- データベースにはsqlite3を使用してください。
## ソフトウェア要件
以下の仕様を満たしてください。
- インターン生が登録できる
- 企業が登録できる
- 認証機能がある(session管理で実装)
- 企業がインターン生にメッセージを送れる
### メッセージの仕様
どちらも認証されたユーザでなければいけない
#### インターン生視点
インターン生からは送られたメッセージ一覧が取得できる。
メッセージには内容と送った会社名の2つの情報がある。
#### 企業視点
企業からは送ったメッセージ一覧が取得できる。
メッセージには内容と送られたインターン生の2つの情報がある。
