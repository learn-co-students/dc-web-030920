## Object Oriented Programming

### Everything in Ruby is an Object? Why?
- grouping 'like' data together
- 'like' things should have the same behavior

#### What is the data type of x?
x = 3
puts x.class

#### What is length and where does it come from?
y = ["Ann", "Paul", "Chine"]
puts y.class
puts y.length

#### See all methods for some data
puts y.methods

#### Everything is probably just a method or syntactic sugar/vinegar
y[1] is just shorthand for y.[](1)

```rb
class Array

  def length
    # return length of string
  end

  def [](index)
    # get char at index and return that char
  end

end
```

- build a Player hash
- `maya = {name: "Maya Moore", age: 30}`
- This is fine but `maya` is just a hash. We can't extend this to have any behavior we might want a player to do.  

### Important Terminology
 - Class vs Instance

Make a basic Player class.
- `Player.new`
```rb
class Player
    def shout
        puts "woohoo!"
    end
end
```

### Instance Variable
- What is the "@"?
    - Accessible throughout the class
    - Scope (local variables vs instance variables)

- Define getter/setter
```rb
    def name=(new_name)
        @name = new_name
    end
```

- Add a getter method (doesn't have to have same variable name)
```rb
    def name
        @name
    end
```

### Classes can have an initialize method
 - Gets called when you type .new()

```rb
class Player
    def initialize(name)
      @name = name
    end
end
```

- attr_accessor :name
- attr_reader :age
- attr_writer :shoe

- custom getter/setters:
```rb
    def shoe
        if @shoe < 10
            return "small"
        else
            return "big"
        end
    end

    def age=(age)
      if @age < 0
        @age = 0
      else
        @age = age
      end
    end
```

#### self
```rb
    def shout
        "My name is #{self.name}!"
    end
```
- `@name vs self.name` -- often the same in practice, but the former accesses the variable
directly while self.name gets the accessor method
```rb
def shout
        "My name is #{self.name} and I have #{@shoe} sized feet! I have #{self.shoe} sized feet!"
end
```

#### Class Methods
```rb
self.say_class_name
  puts "I am the Player class"
end
```

#### Class variable @@all
  - A variable that belongs to the entire class, not any one instance
  - Common use case: keep trak of all instances of a class
  - Make sure to shovel it into the array when you create a new instance
```rb
@@all = []

self.get_all_players
  @@all
end
```
