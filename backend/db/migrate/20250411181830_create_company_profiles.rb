class CreateCompanyProfiles < ActiveRecord::Migration[8.0]
  def change
    create_table :company_profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :industry
      t.text :description

      t.timestamps
    end
  end
end
