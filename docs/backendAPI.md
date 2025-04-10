# backend設計

## 提供するデータ
- 企業の募集
- メッセージ
- インターン生に関する情報
- 企業の情報

## リソース
### 募集リソース
タイトル, 募集要項, 作成日時, 会社名, 会社へのリンク
### 募集一覧リソース
[タイトル, 会社名, 募集へのリンク]

### チャットリソース
属性(会社or学生), 学生名, 学生へのリンク, 会社名, 会社へのリンク, [メッセージ本文, 作成日時]

### チャット一覧リソース
属性(会社or学生), [会社名, 学生名, チャットへのリンク]

### メッセージ追加リソース
本文

### 会社リソース
会社名
### 学生リソース
名前
### 学生一覧リソース
[名前, 学生へのリンク]

## api仕様
基本的にCookie Headerでsession idを送る.
エラーはステータスコードで返す.
### 募集
#### `GET /recruitments`
##### response
status code: `200`

body
```
[
    {
        "title": "募集のタイトル",
        "company": "会社の名前",
        "link": "募集情報へのurl"
    },
    ...
]
```
#### `POST /recruitments`
##### request

header: `Cookie: session_id`

body
```
{
    "title": "募集のタイトル",
    "": "募集要項",
    "company": {
        "name": "会社の名前",
    }
}
```

##### reponse

status code: `201`

body
```
{
    "title": "募集のタイトル",
    "": "募集要項",
    "created_at": "作成日時",
    "company": {
        "name": "会社の名前",
        "link": "会社情報へのurl"
    }
}
```
#### `GET /recruitments/{recruitment_id}`
##### response

status code: `200`

body
```
{
    "title": "募集のタイトル",
    "": "募集要項",
    "created_at": "作成日時",
    "company": {
        "name": "会社の名前",
        "link": "会社情報へのurl"
    }
}
```

### チャット
#### `GET /chats`
##### request

header: `Cookie: session_id`

##### response

status code: `200`

body
```
{
    "type": "company" or "student",
    "result": [
        {
            "company": "会社名",
            "student": "学生名",
            "link": "チャット情報へのurl"
        },
        ...
    ]
}
```
#### `GET /chats/{chat_id}`
##### request
header: `Cookie: session_id`

##### response
status code: `200`

body
```
{
    "type": "company" or "student",
    "company": {
        "name": "名前",
        "link": "会社情報へのurl"
    }, 
    "student": {
        "name": "学生の名前",
        "link": "学生の情報へのurl"
    },
    "messages": [
        {
            "content": "メッセージ本文",
            "created_at": "作成日時"
        },
        ...
    ]
}
```
#### `POST /chats/{chat_id}/messages`
##### request

header: `Cookie: session_id`

body
```
{
    "content": "メッセージ本文"
}
```

##### response

status code: `201`

body
```
{
    "content": "メッセージ本文",
    "created_at": "作成日時"
}
```

### 会社
#### `GET /companies/{company_id}`
##### response

status code: `200`

body
```
{
    "name": "会社の名前"
}
```

### 学生
#### `GET /students`
##### response

status code: `200`

body
```
[
    {
        "name": "学生の名前",
        "link": "学生情報へのurl"
    },
    ...
]
```
#### `POST /students`
##### request
body
```
{
    "login_id": "ログイン用ユーザid",
    "name": "生徒の名前"
}
```

##### response

status code: `201`

body
```
{
    "name": "生徒の名前",
    "created_at": "作成日時"
}
```
#### `GET /students/{student_id}`
##### response

status code: `200`

body
```
{
    "name": "学生の名前"
}
```
