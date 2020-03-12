require_relative "../app/user.rb"
require_relative "../app/pin.rb"
require_relative "../app/save.rb"
require "pry"

ann = User.new("Ann", 30)
paul = User.new("Paul", 40)

cats_pin = Pin.new("Cute cats", "So fluffy, so floofy")
dogs_pin = Pin.new("Good dogs", "Here's a treat just for you!")
code_pin = Pin.new("Coding tips", "Hello World")

save1 = Save.new(ann, dogs_pin)
save2 = Save.new(paul, cats_pin)
save3 = Save.new(ann, code_pin)
save4 = Save.new(paul, code_pin)

ann.save_pin(cats_pin)

binding.pry
