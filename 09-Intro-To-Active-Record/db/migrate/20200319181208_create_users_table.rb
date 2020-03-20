class CreateUsersTable < ActiveRecord::Migration[6.0]
  #create a table called users
  def change
    create_table :users do |t|
      t.string :username
      t.timestamps
    end
  end
end
