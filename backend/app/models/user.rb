class User < ApplicationRecord
  has_secure_password # only password

  has_many :company_chats, class_name: 'Chat', foreign_key: 'company_id', dependent: :destroy
  has_many :student_chats, class_name: 'Chat', foreign_key: 'student_id', dependent: :destroy
  has_many :recruitments, foreign_key: 'company_id'

  validates :login_id, presence: true, uniqueness: true
  validates :role, presence: true, inclusion: { in: %w[company student] }
  validates :name, presence: true
end
