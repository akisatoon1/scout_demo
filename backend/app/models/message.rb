class Message < ApplicationRecord
  belongs_to :sender, class_name: 'User'
  belongs_to :receiver, class_name: 'User'

  validates :content, presence: true
  validate :sender_must_be_company
  validate :receiver_must_be_intern

  private

  def sender_must_be_company
    errors.add(:sender, 'must be a company') unless sender&.role == 'company'
  end

  def receiver_must_be_intern
    errors.add(:receiver, 'must be an intern') unless receiver&.role == 'intern'
  end
end
