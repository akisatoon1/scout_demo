class CreateInternProfiles < ActiveRecord::Migration[8.0]
  def change
    create_table :intern_profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :university
      t.text :introduction

      t.timestamps
    end
  end
end
