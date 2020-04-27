document.addEventListener('DOMContentLoaded', function(){
  document.querySelector("form").addEventListener("submit", handleForm)

  fetchHobbies()
  fetchCats()
})

function handleForm(event){
  event.preventDefault()
  let data = {
    name: document.getElementById("name-input").value,
    image: document.getElementById("image-input").value,
    breed: document.getElementById("breed-input").value,
    is_house_trained: document.getElementById("house-trained-input").checked
  }
  fetch('http://localhost:3000/cats', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  .then(newCat => {
    console.log("successfully create a new cat", newCat)
    renderCat(newCat)
  })
}
//
