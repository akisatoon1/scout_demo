# API設計

## 認証関連

### ユーザー登録
```
POST /api/auth/register
Content-Type: application/json

Request:
{
  "email": "string",
  "password": "string",
  "name": "string",
  "role": "intern" | "company"
}

Response:
{
  "id": "integer",
  "email": "string",
  "name": "string",
  "role": "string"
}
```

### ログイン
```
POST /api/auth/login
Content-Type: application/json

Request:
{
  "email": "string",
  "password": "string"
}

Response:
{
  "user": {
    "id": "integer",
    "email": "string",
    "name": "string",
    "role": "string"
  }
}
```

### ログアウト
```
POST /api/auth/logout

Response:
{
  "message": "Successfully logged out"
}
```

## プロフィール関連

### プロフィール取得
```
GET /api/profile

Response (インターン生の場合):
{
  "id": "integer",
  "email": "string",
  "name": "string",
  "role": "intern",
  "profile": {
    "university": "string",
    "introduction": "string"
  }
}

Response (企業の場合):
{
  "id": "integer",
  "email": "string",
  "name": "string",
  "role": "company",
  "profile": {
    "industry": "string",
    "description": "string"
  }
}
```

### インターン生一覧取得
```
GET /api/interns

Response:
{
  "interns": [
    {
      "id": "integer",
      "name": "string",
    }
  ]
}
```

### 特定のインターン生のプロフィール取得
```
GET /api/interns/:id

Response:
{
  "id": "integer",
  "name": "string",
  "profile": {
    "university": "string",
    "introduction": "string"
  }
}
```

### 企業一覧取得
```
GET /api/companies

Response:
{
  "companies": [
    {
      "id": "integer",
      "name": "string",
      "profile": {
        "industry": "string",
        "description": "string"
      }
    }
  ]
}
```

### 特定の企業のプロフィール取得
```
GET /api/companies/:id

Response:
{
  "id": "integer",
  "name": "string",
  "profile": {
    "industry": "string",
    "description": "string"
  }
}
```

## メッセージ関連

### メッセージ一覧取得（インターン生用）
```
GET /api/messages/received

Response:
{
  "messages": [
    {
      "id": "integer",
      "content": "string",
      "company": {
        "id": "integer",
        "name": "string"
      },
      "created_at": "datetime"
    }
  ]
}
```

### メッセージ一覧取得（企業用）
```
GET /api/messages/sent

Response:
{
  "messages": [
    {
      "id": "integer",
      "content": "string",
      "intern": {
        "id": "integer",
        "name": "string"
      },
      "created_at": "datetime"
    }
  ]
}
```

### メッセージ送信
```
POST /api/messages
Content-Type: application/json

Request:
{
  "receiver_id": "integer",
  "content": "string"
}

Response:
{
  "id": "integer",
  "content": "string",
  "receiver": {
    "id": "integer",
    "name": "string"
  },
  "created_at": "datetime"
}
```

### 特定のメッセージ取得
```
GET /api/messages/:id

Response:
{
  "id": "integer",
  "content": "string",
  "sender": {
    "id": "integer",
    "name": "string"
  },
  "receiver": {
    "id": "integer",
    "name": "string"
  },
  "created_at": "datetime"
}
``` 