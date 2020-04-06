module Swimmer 
  module Casual
    def swim 
      puts "splish splash in a bath"
    end 
  end 

  module Expert 
    def swim 
      puts "wooooosh! Go for the gold!!!"
    end 
  end 
end 

class Animal
  def initialize(name, species)
    @name = name
    @species = species
  end 

  def speak 
    puts "Hello, I am #{@name} the #{@species}"
  end 
end 

class Dog < Animal
  include Swimmer::Casual

  def initialize(name) #name = "Fido"
    super(name, "dog")
    # super(name, "dog") #initialize("Fido", "dog") but in the parent class
  end 

  def speak
    puts "bow wow"
    super()
  end 
end 

class Cat < Animal
  def initialize(name)
    super(name, "cat")
  end 
end 

class Fish < Animal 
  include Swimmer::Expert

  def initialize(name)
    super(name, "fish")
  end 
end 

