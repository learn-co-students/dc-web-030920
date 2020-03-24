class Mechanic
  attr_reader :name
  attr_accessor :specialty
  @@all = []

  def initialize(name, specialty)
    @name = name
    @specialty = specialty
    @@all << self
  end

  def self.all 
    @@all
  end 

  def cars 
    Car.all.select do |car|
      car.mechanic == self
    end 
  end 

  def car_owners 
    self.cars.map do |car|
      car.owner
    end 
  end 

  #type, name, logic
  def car_owners_names
    self.car_owners.map do |owner|   
      owner.name    
    end
  end 

end

