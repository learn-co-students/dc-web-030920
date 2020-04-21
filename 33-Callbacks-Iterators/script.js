console.log('connected')
console.log(cerealData)

//building a .map from stratch

//in JS, in works off an array and takes in a function

var numbers = [1, 2, 3, 4]
//[2, 6, 10, 14]

function timesTwo(x){
  return x * 2
}



// var makeNegative = function(z){return -z}
// var newArray = numbers.map(makeNegative)


var newArray = numbers.map( z => z*100 )
//.filter  .select
//.find    .find
//.forEach .each
var newArray = numbers.filter(num => num > 2)
var newArray = numbers.find(x => x > 1)

// numbers.forEach(y => console.log(`I am the number ${y}`))




//numbers.map{|chine| chine*2}

//going over each element and modify the elemnt and return it in a NEW array
// function myMap(array, callbackFunc){
//   var newArray = []
//   for(var i = 0; i < array.length; i++){
//     var newElement = callbackFunc(array[i])
//     newArray.push(newElement)
//   }
//   return newArray
// }


//myMap(numbers, timesTwo) arguments
//
//function myMap(array, func) parameters

//func === timeTwo
//array === numbers









//
