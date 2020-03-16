class Instructor
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end 

  def self.all
    @@all
  end
  
  #krabs.boating_tests
  #return all of Mrs.Puff's Boating Tests
  def boating_tests
    BoatingTest.all.select{|test| 
      test.instructor == self
    }
  end 

  #return all the students for an instructor
  def students
    self.boating_tests.collect{|test| test.student}  
  end 


  def pass_student(student, test_name)#studnet instance, string
    #find a test where the student and test_name matches
    found_test = BoatingTest.all.find{|test|
      test.student == student && test.test_name == test_name
    }
    #if the test doesn't exists
    if found_test == nil
      #we want to create that test
      BoatingTest.new(student, test_name, "passed", self)
    else 
      #otherwise, update that test's status = "passed"
      found_test.status = "passed"
    end 
  end 
end
