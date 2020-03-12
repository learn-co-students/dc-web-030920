require "pry"

class Save
  attr_reader :user, :pin
  @@all = []

  def initialize(user, pin)
    @user = user 
    @pin = pin
    @@all << self
  end 

  def self.all 
    @@all 
  end 

end 