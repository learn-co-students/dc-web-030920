//2 pillars of web dev
//event => DOM
//When a form submit event happens => add an <li> to the DOM

//When the drop down changes => edit the color of the text to be red/yellow/green


//1. When submit form, I want to see a conosle.log
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", formSubmit)
});

function formSubmit(e){
  e.preventDefault()
  let li = document.createElement("li")
  let ul = document.getElementById("tasks")
  ul.appendChild(li)
  let text = document.querySelector("#new-task-description").value
  li.innerText = text


  let select = document.createElement("select")
  select.addEventListener("change", test)

  let option1 = document.createElement("option")
  option1.innerText = "low"
  let option2 = document.createElement("option")
  option2.innerText = "medium"
  let option3 = document.createElement("option")
  option3.innerText = "high"
  select.append(option1, option2, option3)
  li.appendChild(select)

  // e.target.reset()
}

function test(e){
  console.log("jgioesjoifahjaiof")
  if(e.target.value === "high"){
    //change the text to be red
    e.target.parentElement.style.color = "red"
  }else if(e.target.value === "medium"){
    //change the text to be yellow
    e.target.parentElement.style.color = "yellow"
  }else if(e.target.value === "low"){
    e.target.parentElement.style.color = "green"
    //change the text to be green
  }
}




























/*

function timesTwo(num){
  return num * 2
}

[1, 2, 3, 4].map(timesTwo)

function map(func){
 for(i = 0; i< array.length; i++){
  func(array[i])
 }

}

*/
