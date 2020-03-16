class Student
  attr_reader :first_name
  @@students = []

  def initialize(first_name)
    @first_name = first_name
    @@students << self
  end

  def self.all
    @@students
  end 

  def self.find_student(first_name)#first_name is a string
    #return student object 
    self.all.find{|student| 
      student.first_name == first_name
    }
  end 

  #patrick.add_boating_test("Don't Crash 202", "failed", krabs)
  #string, string, instance of instructor
  def add_boating_test(test_name, status, instructor)
    #inside a method, self
    BoatingTest.new(self, test_name, status, instructor)
  end 

  def boating_tests 
    BoatingTest.all.select{|test| test.student == self}
  end 

  def instructors
    self.boating_tests.collect{|test| test.instructor}
  end 

  def grade_percentage
    #self which is the student
    passed_test = 0
    failed_test = 0
    self.boating_tests.each{|test|
      if(test.status == "passed")
        passed_test += 1
      else
        failed_test += 1
      end 
    }
    fraction = passed_test.to_f / (passed_test.to_f + failed_test.to_f)
    fraction * 100
  end 

end
