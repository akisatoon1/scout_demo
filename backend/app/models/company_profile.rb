class CompanyProfile < ApplicationRecord
  belongs_to :user

  validates :industry, presence: true
  validates :description, presence: true
end
