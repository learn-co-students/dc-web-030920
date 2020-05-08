const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", ()=>{
  fetch("http://localhost:3000/trainers")
  .then(res => res.json())
  .then(trainersArray => {
    console.log(trainersArray)
    var application = new App(trainersArray)
    var body = document.querySelector("body")
    body.innerHTML = application.render()
  })
})
