class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string  :name
      t.string  :image
      t.string  :breed
      t.boolean :is_house_trained
      t.timestamps
    end
  end
end
