class Cat
  attr_reader :name
  attr_accessor :owner, :mood
  @@all_cats = []

  def initialize(name, owner)
    @name = name
    @owner = owner
    @mood = 'nervous'
    # self.class.all << self
    # Cat.all << self
    @@all_cats << self
  end

  def self.all
    @@all_cats
  end

  # def name
  #   @name
  # end

  # def owner
  #   @owner
  # end
end