class Car
  attr_reader :classification, :owner, :mechanic
  @@all = []

  def initialize(owner, mechanic, make, model, classification)
    @owner = owner
    @mechanic = mechanic
    @make = make
    @model = model
    @classification = classification
    @@all << self
  end

  def self.all 
    @@all
  end 

  def self.classifications
    Car.all.map do |car|
      car.classification
    end 
  end 

  def self.find_mechanic(classification)
    Mechanic.all.select do |mechanic|
      mechanic.specialty == classification
    end 
    #select will always return SOME array 
    #find will sometimes return nil
  end 

end

