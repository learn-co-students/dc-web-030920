require 'pry'

class Player 
  attr_writer :shoe
  attr_reader :age
  attr_accessor :name

  @@players = []

  def initialize(name, age, shoe)
    @name = name
    @age = age
    @shoe = shoe
    @@players << self
  end

  #custom setter method
  def age=(new_age)
    if new_age >= 18
      @age = new_age
    else
      @age = 18
    end 
  end 

  #custome getter method
  def shoe
    if(@shoe > 10)
      return "big"
    else 
      return "small"
    end 
  end 

  def shout
    #if you need to know which instance you are on 
    # you would use self
    puts "My name is #{@name}, I have #{self.shoe} sized feet"
  end 

  def self.get_all_players
    @@players
  end 

  def self.shout
    puts "WE ARE THE WNBA"
  end 
end 

maya = Player.new("Maya Moore", 30, 9)
sue  = Player.new("Sue Bird", 25, 11)
alice = Player.new("ALice", 29, 10)

#instance.instance_method 

# print Player.get_all_players

binding.pry

# maya.shoe #=> "small"
# sue.shoe #=> "big"




# y = ["Ann", "Paul", "Chine"]
# puts y.class
# puts y.[](1) #syntactic vinegar
# puts y[1]    #syntactic sugar

# #All arrays .length .[](1)

# class Array 
#   def length
#     #return number of elements in array 
#   end 

#   def [](index)
#     #return the element in the array at the index
#   end 
# end 