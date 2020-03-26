# is_palindrome? 
http://pythontutor.com/ruby.html#mode=edit

# Intro to Rspec testing
- Include `rspec` in Gemfile
- Run `rspec --init` to create starter code
  - This creates a specs folder
  - all test files should end in `_spec.rb`

## Test Driven Development
- Require the file you're testing
1. `describe` what you're testing
2. say what `it` does
3. write assertion
- Run `rspec` to run tests
- "DRY" doesn't apply (at least not as much)

### Create variables using let
- First build an instance `checker = PalindromChecker.new` in the first test  
- When you need to redo it, move `checker` to the top of the describe

```rb
require_relative "../palindrome.rb"

describe "PalindromeChecker" do

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'dad'" do
        expect(checker.is_palindrome?('dad')).to eq(true)
    end

    it "ignores spaces" do
        expect(checker.is_palindrome?('taco cat')).to eq(true)
    end

end
```

### Difference between `to be` and `to eq`
- `to be` (compares object identity equality) to `to eq` (compares value equality)

### Raising Custom Errors
```rb 
    it "raises ArgumentError if input is not a string" do
        expect{ checker.is_palindrome?(7) }.to raise_error ArgumentError
    end
```
- Notice that we need a block as opposed to an argument for a raises test

```rb
raise ArgumentError if !(word.is_a? String)
```

# Cohort Activity: Picking your cohort name: pollev.thuyanduong975