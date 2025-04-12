# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# テストユーザーの作成
puts "Creating test users..."

# 企業ユーザーの作成
company1 = User.find_or_create_by!(email: 'company1@example.com') do |user|
  user.name = '株式会社テック'
  user.password = 'password123'
  user.role = 'company'
end

company2 = User.find_or_create_by!(email: 'company2@example.com') do |user|
  user.name = '株式会社イノベーション'
  user.password = 'password123'
  user.role = 'company'
end

# インターンユーザーの作成
intern1 = User.find_or_create_by!(email: 'intern1@example.com') do |user|
  user.name = '山田太郎'
  user.password = 'password123'
  user.role = 'intern'
end

intern2 = User.find_or_create_by!(email: 'intern2@example.com') do |user|
  user.name = '佐藤花子'
  user.password = 'password123'
  user.role = 'intern'
end

=begin
# プロフィールの作成
puts "Creating profiles..."

# 企業プロフィール
CompanyProfile.find_or_create_by!(user: company1) do |profile|
  profile.industry = 'IT・通信'
  profile.description = '最新のテクノロジーで社会に貢献する企業です。'
end

CompanyProfile.find_or_create_by!(user: company2) do |profile|
  profile.industry = '金融・保険'
  profile.description = '金融テクノロジーで未来を創造します。'
end

# インターンプロフィール
InternProfile.find_or_create_by!(user: intern1) do |profile|
  profile.university = '東京大学'
  profile.introduction = 'プログラミングとデザインに興味があります。'
end

InternProfile.find_or_create_by!(user: intern2) do |profile|
  profile.university = '京都大学'
  profile.introduction = 'データサイエンスとAIに興味があります。'
end
=end

# メッセージの作成
puts "Creating messages..."

# 企業1からインターン1へのメッセージ
Message.find_or_create_by!(sender: company1, receiver: intern1, content: 'こんにちは、山田さん。弊社のインターンシップに興味はありますか？') do |message|
  message.created_at = 1.day.ago
end

Message.find_or_create_by!(sender: company1, receiver: intern1, content: '弊社では最新のテクノロジーを使用した開発環境を提供しています。') do |message|
  message.created_at = 12.hours.ago
end

# 企業2からインターン2へのメッセージ
Message.find_or_create_by!(sender: company2, receiver: intern2, content: '佐藤さん、こんにちは。データサイエンスのインターンシップに興味はありますか？') do |message|
  message.created_at = 2.days.ago
end

Message.find_or_create_by!(sender: company2, receiver: intern2, content: '弊社では金融データの分析に取り組んでいます。') do |message|
  message.created_at = 1.day.ago
end

puts "Seed data created successfully!"