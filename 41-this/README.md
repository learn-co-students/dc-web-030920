## Object Oriented JavaScript:

class Person
  def initialize(name, age)
    @name = name
    @age = age
  end
end

fido.bark
sparky.bark

class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}


### JS `this` vs Ruby `self`
- `self` => main
- `this` => window
- `this` is always determined by the object to the left of the '.'
- the value of `this` changes depending on which object the function is invoked from
- implied `this` for all functions
  - `this` is the window object 

- `this` is also known as the execution context
  - window?
  - obj?


### Sometimes the value of `this` gets lost
var button = document.querySelector("button")
button.addEventListener("click", greet)


### `bind`
- bind returns a new function where the value of `this` is pre-set (won't be lost)
- arrow functions automatically bind the value of `this` to the  scope of the function
