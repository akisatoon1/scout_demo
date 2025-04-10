# データベース設計
- sqlite3
- 全てnot nullである
- ruby on railsで実装します

## sessions
ログイン機能のためのテーブルである。ruby on railsの実装に置いて必要でないならば、作らなくてよい。
- id    text primary key
- user_id text foreign key references users(id)

## users
- id         int primary key autoincrement
- login_id    text
- password   text
- role       text -- "company" or "student"
- name       text
- created_at text
- updated_at text
unique(login_id)

## chats
- id         int primary key autoincrement
- company_id int foreign key references users(id) -- where role = "company"
- student_id int foreign key references users(id) -- where role = "student"
- created_at text
- updated_at text
unique(company_id, student_id)

## messages
- id         int primary key autoincrement
- chat_id    int foreign key references chats(id)
- contents   text
- created_at text
- updated_at text

## recruitments
- id         int primary key autoincrement
- company_id int foreign key references users(id) -- where role = "company"
- title      text
- contents   text
- created_at text
- updated_at text
