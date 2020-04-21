//anytime to need to depend on the DOM
document.addEventListener("DOMContentLoaded", () => {
  let formNode = document.querySelector("form")
  //1. Have the form listen for a submit event
  formNode.addEventListener("submit", handleForm)

  //When the email td is click => alert
  //3 rows
  let emailNodes = document.querySelectorAll(".email")
  for(let i=0; i<emailNodes.length; i++){
    emailNodes[i].addEventListener("click", handleEmail)
  }

})

function handleEmail(event){
  alert("sending email to " + event.target.innerText)
}

function handleForm(event){
  event.preventDefault()

  //2. add a new row to tbody
  let first = document.getElementById("firstNameInput").value
  let last = document.getElementById("lastNameInput").value
  let email = document.getElementById("emailInput").value

  addInstructor(first, last, email)

  //3. Reset the form
  let formNode = document.querySelector("form")
  formNode.reset()
  //event.target.reset()
}

function addInstructor(firstName, lastName, email){
  //creating my <tr>
  var trElement = document.createElement("tr")
  var tBodyEl = document.querySelector("tbody")
  tBodyEl.appendChild(trElement) //appending it to the <tbody>

  var firstNameEl = document.createElement("td")//creating the <td>
  firstNameEl.innerText = firstName//updating the <td> to have a innerText of Jane

  var lastNameEl = document.createElement("td")//creating the <td>
  lastNameEl.innerText = lastName//updating the <td> to have a innerText of Jane

  var emailEl = document.createElement("td")//creating the <td>
  emailEl.innerText = email//updating the <td> to have a innerText of Jane
  emailEl.addEventListener("click", handleEmail)

  trElement.append(firstNameEl, lastNameEl, emailEl)//appending to the tbody
}

//When some event happens => change the DOM
//1. listen for the event addEventListener
//2. change the DOM  




// function addInstructor(firstName, lastName, email){
//   let tBodyNode = document.querySelector("tbody")
//   tBodyNode.innerHTML += `<tr>
//     <td class="firstName">${firstName}</td>
//     <td class="lastName">${lastName}</td>
//     <td class="email">${email}</td>
//   </tr>`
// }









//
//
// function timesTwo(num){ //num = 1; num = 2; num = 3
//   return num * 2
// }
//
// [1, 2, 3, 4].map(timesTwo)
//











//
