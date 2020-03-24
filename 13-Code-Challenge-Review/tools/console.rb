require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end


ann = CarOwner.new("Ann")
chine = CarOwner.new("Chine")

beza = Mechanic.new("Beza", "antique")
bret = Mechanic.new("Bret", "exotic")

car1 = Car.new(ann, beza, "Honda", "CRV", "SUV")
car2 = Car.new(ann, bret, "Toyota", "Camry", "Sedan")
car3 = Car.new(chine, beza, "Hyndai", "Sonata", "antique")

binding.pry
