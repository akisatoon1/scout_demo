class CreateChats < ActiveRecord::Migration[8.0]
  def change
    create_table :chats do |t|
      t.references :company, foreign_key: { to_table: :users }
      t.references :student, foreign_key: { to_table: :users }
      t.timestamps
    end
    add_index [:company_id, :student_id], { unique: true }
  end
end