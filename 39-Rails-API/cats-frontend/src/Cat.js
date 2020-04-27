function fetchCats(){
  fetch("http://localhost:3000/cats") // localhost:3000/cats
  .then(res => res.json())
  .then(catArray => {
    catArray.forEach(cat => renderCat(cat))
  })
}

function renderCat(cat){
  console.log(cat)
  let catsContainer = document.querySelector("#cats")
  let catElement = document.createElement("div")

  catElement.innerHTML = `<div class="ui card">
    <div class="image">
      <img src=${cat.image}>
    </div>
    <div class="content">
      <a class="header">${cat.name}</a>
      <div class="meta">
        House trained: ${cat.is_house_trained}
      </div>
    </div>
  </div>`

  catsContainer.appendChild(catElement)

  let catsHobbysContainer = document.createElement("ul")
  catElement.appendChild(catsHobbysContainer)

  //for each cat's hobbies, render that into the catDiv
  cat.hobbies.forEach(hobby => {
    //render this hobby in the cat card
    let hobbyLi = document.createElement("li")
    hobbyLi.innerText = hobby.name
    catsHobbysContainer.appendChild(hobbyLi)
  })

  //createElement
  //innerHTML <- harder to work with addEventListener

  //render this cat on the DOM
}
