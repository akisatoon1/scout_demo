class Chat < ApplicationRecord
  belongs_to :company, class_name: 'User'
  belongs_to :student, class_name: 'User'
  has_many :messages, dependent: :destroy

  validates :company_id, presence: true
  validates :student_id, presence: true
  validates :company_id, uniqueness: { scope: :student_id }

  validate :company_must_be_company
  validate :student_must_be_student

  private

  def company_must_be_company
    if company.present? && company.role != 'company'
      errors.add(:company, 'must be a company user')
    end
  end

  def student_must_be_student
    if student.present? && student.role != 'student'
      errors.add(:student, 'must be a student user')
    end
  end
end
