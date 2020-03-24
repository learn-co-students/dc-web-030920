class CarOwner
  attr_reader :name

  @@all_owners = []

  def initialize(name)
    @name = name
    @@all_owners << self
  end

  #type, name, logic
  def self.all
    #i want to return all owners
    @@all_owners
  end 

  #type, name
  def cars 
    #get a list of all the cars that owner has 
    #get me all the cars 
    #only select those cars where 
    #the owner is self
    Car.all.select do |car|
      car.owner == self
    end 
  end 

  def mechanics 
    #get a list of all of this 
    #owner's machanics
    owners_car = self.cars
    owners_car.map do |car|
      car.mechanic
    end 
  end 

  def self.average_number_of_cars
    averages = CarOwner.all.map do |owner|
      owner.cars.count
    end 
    return averages.sum(0.0)/averages.size
  end 

end



  #type/scope, name, logic 
  # def over_here 
  #   p "over here"
  #   p self
  # end  

  # #type/scope, name, logic 
  # def self.right_here
  #   p "right here"
  #   p self
  # end 