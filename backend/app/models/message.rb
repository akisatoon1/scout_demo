class Message < ApplicationRecord
  belongs_to :chat

  validates :contents, presence: true
  validates :chat_id, presence: true
end
