require "pry"

class Pin
  attr_accessor :title, :description 
  @@all = []

  def initialize(title, description)
    @title = title 
    @description = description
    @@all << self
  end

  def self.all
    @@all
  end

  def users 
    #given a pin (self)
    #Find all the Saves that belong to this pin 
      #Collect all the users from those Saves
    Save.all.select{|save|
      save.pin == self
    }.map{|save|
      save.user
    }
  end 

  def average_user_age
    #average = the total sum of the ages / the numbers of users 
    total_age = 0
    num_of_users = 0
    #pin1.users
    self.users.each{|user| 
      total_age += user.age 
      num_of_users += 1
    }
    return total_age / num_of_users
  end 
end 