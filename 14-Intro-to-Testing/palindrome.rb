require 'pry'

class PalindromeChecker

  def palindrome?(word)
    word.downcase! #word = word.downcase
    word.gsub!(" ","")
    word.gsub!(/[^A-Za-z]/i, '')
    if word.length <= 1
      return true
    else #the word is more than 1 letter long 
      if word[0] == word[-1]
        #word might be a palindrome, we have to check the inner string
        inner_string = word[1...-1]
        return palindrome?(inner_string)
      else 
        return false
      end 
    end 
  end 

end 

# checker = PalindromeChecker.new 
# puts checker.palindrome?("racecar")
# puts checker.palindrome?("racebar")

