class BoatingTest
  #join table
  attr_reader :student, :test_name, :instructor
  attr_accessor :status
  @@all = []

  def initialize(student, test_name, status, instructor)
    @instructor = instructor
    @student = student
    @test_name = test_name
    @status = status
    @@all << self
  end 

  def self.all
    @@all
  end 

end
