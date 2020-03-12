class Owner
  attr_reader :name, :species
  @@all_owners = []

  def initialize(name)
    @name = name
    @species = 'human'
    @@all_owners << self
  end

  def say_species
    "I am a #{self.species}."
    # "I am a #{@species}."
  end

  def self.all
    @@all_owners
  end

  def self.count
    # @@all_owners.length
    # Owner.all.length
    self.all.length
  end

  def self.reset_all
    # @@all_owners = []
    # Owner.all.clear
    self.all.clear
  end

  def cats
    Cat.all.select do |cat_instance|
      cat_instance.owner == self
    end
  end

  def dogs
    Dog.all.find_all do |dog_instance|
      dog_instance.owner == self
    end
  end

  def buy_cat(name)
    Cat.new(name, self)
  end

  def buy_dog(dog_name)
    Dog.new(dog_name, self)
  end

  def walk_dogs
    self.dogs.each {|dog| dog.mood = 'happy'}
  end

  def feed_cats
    self.cats.each {|cat| cat.mood = 'happy'}
  end

  def sell_pets
    # self.cats.each do |cat|
    #   cat.mood = 'nervous'
    #   cat.owner = nil
    # end

    # self.dogs.each do |dog|
    #   dog.mood = 'nervous'
    #   dog.owner = nil
    # end

    # pets = self.cats + self.dogs

    pets = self.cats.push(*self.dogs)

    pets.each do |pet|
      pet.mood = 'nervous'
      pet.owner = nil
    end
  end

  def list_pets
    "I have #{self.dogs.count} dog(s), and #{self.cats.count} cat(s)."
  end
end