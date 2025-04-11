class InternProfile < ApplicationRecord
  belongs_to :user

  validates :university, presence: true
  validates :introduction, presence: true
end
