require_relative "./user.rb"
require_relative "./tweet.rb"
require "pry"

dad = User.new("coffee_dad")
mom = User.new("tea_mother")
uncle = User.new("soda_uncle")
aunt = User.new("milk_aunt")

tweet1 = Tweet.new("need coffee", dad)
tweet2 = Tweet.new("I love tea", mom)
tweet3 = Tweet.new("I enjoy a darling cup of fizzy", uncle)
tweet4 = Tweet.new("I HATE soda", dad)

puts "Testing initalization of User and Tweets"
p dad.class == User
p tweet1.class == Tweet

puts "Testing User#username method"
p dad.username == "coffee_dad"
p mom.username == "tea_mother"
p uncle.username == "soda_uncle"

puts "Testing Tweet#message method"
p tweet1.message == "need coffee"

puts "Testing Tweet#user method"
p tweet1.user == dad

puts "Testing Tweet#username method"
p tweet1.username
p tweet2.username

binding.pry