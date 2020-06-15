class CreateHogs < ActiveRecord::Migration[5.2]
  def change
    create_table :hogs do |t|
      t.string :name
      t.timestamps
    end
  end
end
