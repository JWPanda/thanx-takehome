class CreateRewards < ActiveRecord::Migration[7.1]
  def change
    create_table :rewards do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.integer :cost, null: false

      t.timestamps
    end
  end
end
