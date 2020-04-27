function fetchHobbies(){
  fetch("http://localhost:3000/hobbies")
  .then(res => res.json())
  .then(hobbiesArray => {
    hobbiesArray.forEach(hobby => renderHobby(hobby))
  })
}

function renderHobby(hobby){
  let hobbiesUl = document.getElementById("hobbies")
  let li = document.createElement("li")
  li.innerText = hobby.name
  hobbiesUl.appendChild(li)
  //render that hobby as a <li> onto the DOM
}
