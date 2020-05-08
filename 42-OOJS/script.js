console.log('connected')

// function teacher(firstName, lastName){
//   return {firstName: firstName, lastName: lastName}
// }
//
// var paul = teacher("Paul", "Nicholsen")
// var ann = teacher("Ann", "Duong")



//ES5 (Old School)
// function Teacher(firstName, lastName){
//     this.firstName = firstName
//     this.lastName = lastName
// }
//
// Teacher.prototype.greet = function(){
//   console.log(`${this.firstName} ${this.lastName} says hi`)
// }

// var paul = new Teacher("Paul", "Nicholsen")
//if you use the new, this => {}
// var ann = new Teacher("Ann", "Duong")

//ALL objects in JS have a proprty called __proto__
//  __proto__ => prototype
//        ann => Teacher.prototype

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`${this.firstName} ${this.lastName} says hi`)
  }
}

//ES6 class syntax
class Teacher extends Person {

  constructor(firstName, lastName, email){
    // debugger
    super(firstName, lastName) //called the constructor in the parent
    this.email = email
  }

  lecture(){
    console.log(`${this.firstName} is giving a lecture!!!!`)
  }

  static startWeekend(){
    console.log("It's the weekend, teachers will see you next week")
  }
}

var paul = new Teacher("Paul", "Nicholsen", "p.nicholsen@flatironschool.com")
var ann = new Teacher("Ann", "Duong", "a.duong@flatironschool.com")
var jane = new Person("Jane", "Doe")

// Teacher.startWeekend()










//
