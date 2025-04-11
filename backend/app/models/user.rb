class User < ApplicationRecord
  has_secure_password

  has_one :intern_profile, dependent: :destroy
  has_one :company_profile, dependent: :destroy
  has_many :sent_messages, class_name: 'Message', foreign_key: 'sender_id', dependent: :destroy
  has_many :received_messages, class_name: 'Message', foreign_key: 'receiver_id', dependent: :destroy

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }, if: :password_required?
  validates :name, presence: true
  validates :role, presence: true, inclusion: { in: %w[intern company] }

  private

  def password_required?
    new_record? || password.present?
  end
end
