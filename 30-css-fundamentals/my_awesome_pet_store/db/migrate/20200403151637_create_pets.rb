class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :phrase
      t.string :picture
      t.text :bio
      t.boolean :dog, default: true

      t.timestamps
    end
  end
end
