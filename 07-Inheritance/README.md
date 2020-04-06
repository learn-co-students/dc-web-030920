# Class Inheritance

## Review "Everything Is an Object"
- `puts "hi".methods`
- Inheritance in real life
- What is all this stuff and where does it come from?
  - `"hi".class`
  - `"hi".class.ancestors`

## Let's Practice It
- Define Animal class `#speak`
- The`<` syntax is used for specifying inheritance
    - `class Dog < Animal`
    - Vocab:  *Child class, Parent class, Sub class, Super class, inherits from*
  - `fido.speak` works!
- What happens if we have `#speak` in child classes
  - We can _override_ methods
  - Method Resolution Order (MRO)
  - We can also overide initialize()

## super(), When you want to call the parent from the child
- `super()` is common used in the initialize method
- We can also call `super()` in any instance method

## Modules  
- Build `Fish < Animal` class  
- Let's build a `#swim` for the `Fish` class.  

- What's the ancestor chain now?
- Namespacing--used for organization and prevent *naming collisions*:
