class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :login_id, null: false
      # passwordカラム
      t.string :role, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :users, :login_id, unique: true
  end
end
