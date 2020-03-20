class AddBioColumn < ActiveRecord::Migration[6.0]
  #I want to change my users table to have a new col called bio
  def change
    add_column :users, :bio, :string
  end
end
