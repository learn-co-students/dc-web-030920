require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

spongebob = Student.new("Spongebob")
patrick = Student.new("Patrick")

puff = Instructor.new("Ms.Puff")
krabs = Instructor.new("Mr.Krabs")

test1 = BoatingTest.new(spongebob, "Don't Crash 101", "passed", puff)
test2 = BoatingTest.new(patrick, "Power Steering 202", "failed", krabs)
test3 = BoatingTest.new(patrick, "Power Steering 101", "failed", puff)

binding.pry
0 #leave this here to ensure binding.pry isn't the last line

