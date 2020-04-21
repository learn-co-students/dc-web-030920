//END GOAL: DOM, Event, with DB
console.log("connected my js with HTML")
console.log(document.querySelector("tbody"))

function addInstructor(first, last, email){
  var tbodyNode = document.querySelector("tbody")

  tbodyNode.innerHTML += `
  <tr id="row-3">
    <td class="firstName">${first}</td>
    <td class="lastName">${last}</td>
    <td class="email">${email}</td>
  </tr>
  `
}

//intermediate goal:
//create a function that allows us to add a new instructor to the table
function addInstructor(first, last, email){
  console.log(first, last, email)

  //create a tr node
  var trNode = document.createElement("tr")

  //append that tr to the tbody node
  var tbodyNode = document.querySelector("tbody")
  tbodyNode.appendChild(trNode)
  var num = document.querySelector("tbody").children.length
  trNode.id = "row-" + num

  //create three td nodes
  var firstNameNode = document.createElement("td")
  var lastNameNode = document.createElement("td")
  var emailNode = document.createElement("td")

  //append each once of those to the tr node
  trNode.append(firstNameNode, lastNameNode, emailNode)

  //update the td nodes's information
  firstNameNode.className = "firstName"
  lastNameNode.className = "lastName"
  emailNode.className = "email"
  firstNameNode.innerText = first
  lastNameNode.innerText = last
  emailNode.innerText = email
}





//future lectures: how to hook that up with events/ how to save it to DB


//Read things from the DOM
//Creating things to add to the dom
//Update things on the dom
   //select the node you want to update first
//Deleting things on the DOM
