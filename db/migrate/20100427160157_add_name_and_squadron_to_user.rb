class AddNameAndSquadronToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :first_name, :string
    add_column :users, :surname, :string
    add_column :users, :squadron_id, :integer
    
    create_table :squadrons do |t|
      t.integer :number
      t.string  :name
    end
  end

  def self.down
    remove_column :users, :first_name
    remove_column :users, :surname
    remove_column :users, :squadron_id
    drop_table :squadrons
  end
end
