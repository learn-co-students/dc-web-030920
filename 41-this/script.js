// console.log(this)

window.firstName = "Bob"
window.lastName = "Window"


console.log(this)
// is the value of THIS OUT HERE
var greet = () => {
  console.log(`${this.firstName} ${this.lastName} says hi`)
}

// function greet2(){
//   var firstName = "jfiejoaf"
//   var lastName = "fenisaofsf"
//   console.log(`${this.firstName} ${this.lastName} says hi`)
// }

var paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

var ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}


//build out a feature: click of button will print out
//greet function shoudl say Bob Window says hi

var button = document.querySelector("#test1")
button.addEventListener("click", greet)

// var button2 = document.querySelector("#test2")
// button2.addEventListener("click", greet2)
//problem: this => <button>
//desired: this => window
