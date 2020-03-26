#give this test file access to the code its supposed to test 
require_relative '../palindrome.rb'

describe "PalindromeChecker" do 
  let (:checker) { PalindromeChecker.new }

  it "returns true if the word is 'racecar'" do 
    expect( checker.palindrome?("racecar") ).to eq(true)
  end 

  it "returns false if the word is 'banana'" do 
    expect( checker.palindrome?("banana") ).to eq(false)
  end 

  it "should ignore case and returns true if the word is 'Abba'" do 
    expect( checker.palindrome?("Abba") ).to eq(true)
  end 

  it "should ignore spaces and returns true is the word is 'taco cat'" do 
    expect( checker.palindrome?('taco cat') ).to eq(true)
  end 

  it "should ignore punctuation returns true for 'Madam In Eden, I'm Adam'" do 
    expect( checker.palindrome?('Madam In Eden, I\'m Adam') ).to eq(true)
  end 

  it "check is two identical strings are the same" do 
    expect("dad").to eq("dad") #checks for value equality 
    expect("dad").to be("dad") #comparing the space in memory
  end 


end 