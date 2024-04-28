class CreateRedemptions < ActiveRecord::Migration[7.1]
  def change
    create_table :redemptions do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :reward, null: false, foreign_key: true

      t.timestamps
    end
  end
end
