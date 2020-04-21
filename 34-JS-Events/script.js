console.log("first line")
setTimeout(function(){console.log("hello right away")}, 1000)
console.log("hello from bottom of the file")


//document.addEventListener("DOMContentLoaded", function(){
//
//})












function addInstructor(firstName, lastName, email){
  var tBodyEl = document.querySelector("tbody")
  tBodyEl.innerHTML += `<tr>
    <td class="firstName">${firstName}</td>
    <td class="lastName">${lastName}</td>
    <td class="email">${email}</td>
  </tr>`
}


// function addInstructor(firstName, lastName, email){
//   //creating my <tr>
//   var trElement = document.createElement("tr")
//   var tBodyEl = document.querySelector("tbody")
//   tBodyEl.appendChild(trElement) //appending it to the <tbody>
//
//   var firstNameEl = document.createElement("td")//creating the <td>
//   firstNameEl.innerText = firstName//updating the <td> to have a innerText of Jane
//
//   var lastNameEl = document.createElement("td")//creating the <td>
//   lastNameEl.innerText = lastName//updating the <td> to have a innerText of Jane
//
//   var emailEl = document.createElement("td")//creating the <td>
//   emailEl.innerText = email//updating the <td> to have a innerText of Jane
//
//   trElement.append(firstNameEl, lastNameEl, emailEl)//appending to the tbody
// }