class Recruitment < ApplicationRecord
  belongs_to :company, class_name: 'User'

  validates :title, presence: true
  validates :contents, presence: true
  validates :company_id, presence: true

  validate :company_must_be_company

  private

  def company_must_be_company
    if company.present? && company.role != 'company'
      errors.add(:company, 'must be a company user')
    end
  end
end
