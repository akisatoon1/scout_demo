class CreateRecruitments < ActiveRecord::Migration[8.0]
  def change
    create_table :recruitments do |t|
      t.references :company, null: false, foreign_key: { to_table: :users }
      t.string :title, null: false
      t.text :contents, null: false

      t.timestamps
    end
  end
end
