//ALL server communications should be Non-blocking
//  - Goal: make a webpage when the user clicks the button
//     that requests animal data
//     from an API and renders that data on the DOM

document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM is loaded')
  var button = document.querySelector("button")
  button.addEventListener("click", fetchAnimals)
})


function fetchAnimals(){
  fetch("https://animal-farm-api.herokuapp.com/animals") //requesting from server
  .then(response => response.json() )                 //convert response to json
  .then(animalsArray => {                            //do something with data
    console.log(animalsArray)

    //iterate through animalsArray and
    //render each animal onto the DOM
    animalsArray.forEach(animal => { renderAnimal(animal) })
  })
}

function renderAnimal(data){
  var div = document.querySelector(".container")
  var li = document.createElement("li")
  div.appendChild(li)
  li.innerText = data.name
  var imgNode = document.createElement("img")
  div.appendChild(imgNode)
  imgNode.src = data.img
}

//
//data = getHttp("swapi.com/people")
//json = JSON.parse(data)
//









// //example of block code:
// let startTime = Date.now()
// while(Date.now() < startTime + 5000){ //simulate a server that takes 5 seconds to load
//   //waiting for the server
// }
//
// document.querySelector("h1").innerText = "Here are the animals from our Database"
//
//
// //there is blocking code, non-blocking code
