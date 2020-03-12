require "pry"

class User
  attr_accessor :username, :age
  @@all = []

  def initialize(username, age)
    @username = username 
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end 

  #find all the pins that belong to a user
  def pins 
    #Find the Saves that belong to that user
    users_saves = Save.all.select do |save_instance| 
      save_instance.user == self 
    end

    #Collect JUST the pins
    users_pins = users_saves.map do |save_instance| 
      save_instance.pin 
    end 
    
    return users_pins
    # Save.all.select { |save_instance| 
    #   save_instance.user == self 
    # }.map { |save_instance| 
    #   save_instance.pin 
    # }
  end 

  def save_pin(pin)
    #given a pin, save it to this user 
    Save.new(self, pin)
  end 

  def number_of_saved_pins
    self.pins.count
  end 
end 